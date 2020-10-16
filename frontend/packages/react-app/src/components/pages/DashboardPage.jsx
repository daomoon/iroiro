import React, {useCallback, useEffect, useState} from "react"
import {Web3Provider} from "@ethersproject/providers";
import {web3Modal} from "../../utils/web3Modal";
import {Contract} from "@ethersproject/contracts";
import {abis, addresses} from "@project/contracts";
import Dashboard from "../templates/DashboardPageTemplate"
import {useLazyQuery} from "@apollo/react-hooks";
import {GET_CREATOR_TOKENS} from "../../graphql/subgraph";

const DashboardPage = () => {
  const [provider, setProvider] = useState();
  const [tokens, setTokensAddress] = useState([]);
  const [walletAddress, setWalletAddress] = useState("")
  const [getCreatorTokens, {loading, error, data}] = useLazyQuery(GET_CREATOR_TOKENS)

  const loadWeb3Modal = useCallback(async () => {
    const newProvider = await web3Modal.connect();
    setProvider(new Web3Provider(newProvider));
  }, []);

  useEffect(() => {
    if (walletAddress !== "") {
      getCreatorTokens({
        variables: {id: walletAddress.toLowerCase()}
      })
    }
  }, [walletAddress, getCreatorTokens]);

  useEffect(() => {
    if (loading || error || !data) {
      return
    }
    console.debug(data)
    const f = async () => {
      const signer = await provider.getSigner()
      const staking = new Contract(addresses.Staking, abis.staking, signer)
      const vesting = new Contract(addresses.Vesting, abis.vesting, signer)
      const tmpTokens = await Promise.all(data.creator.tokens.map(async creatorToken => {
        const vestingAmount = await vesting.remainingAmount(creatorToken.id)
        const redeemableAmount = await vesting.redeemableAmount(creatorToken.id)
        const isStakingPaused = await staking.tokensStakingPaused(creatorToken.id)
        return {
          address: creatorToken.id,
          name: creatorToken.name,
          symbol: creatorToken.symbol,
          vestingAmount: vestingAmount.toNumber(),
          redeemableAmount: redeemableAmount.toNumber(),
          // isStakingPaused: !creatorToken.enableStakeToToken // TODO Fix staking status from subgraph is not updated
          isStakingPaused: isStakingPaused
        }
      }))
      console.debug(tmpTokens)
      setTokensAddress(tmpTokens)
    }
    f()
  }, [loading, error, data, setTokensAddress]);

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      loadWeb3Modal();
    }
  }, [loadWeb3Modal]);

  useEffect(() => {
    const f = async () => {
      if (!provider) {
        return
      }
      const signer = await provider.getSigner()
      const walletAddress = await signer.getAddress()
      setWalletAddress(walletAddress)

      // for (let i = 0; i < tokenAmount; i++) {
      //   const tokenAddress = await tokenFactory.creatorTokenOf(walletAddress, i + 1)
      //   const fanToken = new Contract(tokenAddress, abis.fanToken, signer)
      //   const name = await fanToken.name()
      //   const symbol = await fanToken.symbol()
      //
      //   const vesting = new Contract(addresses.Vesting, abis.vesting, signer)
      //   const vestingAmount = await vesting.remainingAmount(tokenAddress)
      //   const redeemableAmount = await vesting.redeemableAmount(tokenAddress)
      //
      //   const staking = new Contract(addresses.Staking, abis.staking, signer)
      //   const isStakingPaused = await staking.tokensStakingPaused(tokenAddress)
      //
      //   const tokenInfo = {
      //     address: tokenAddress,
      //     name: name,
      //     symbol: symbol,
      //     vestingAmount: vestingAmount.toNumber(),
      //     redeemableAmount: redeemableAmount.toNumber(),
      //     isStakingPaused: isStakingPaused,
      //   }
      //   tokenArray.push(tokenInfo)
      // }
      // setTokensAddress(tokenArray)
    }
    f()
  }, [provider, setWalletAddress])

  const withdrawToken = async (address) => {
    const signer = await provider.getSigner()
    const vesting = new Contract(addresses.Vesting, abis.vesting, signer)
    vesting.redeem(address)
  }

  const restartStaking = async (address) => {
    const signer = await provider.getSigner()
    const staking = new Contract(addresses.Staking, abis.staking, signer)
    staking.resumeStakingOf(address)
  }

  const stopStaking = async (address) => {
    const signer = await provider.getSigner()
    const staking = new Contract(addresses.Staking, abis.staking, signer)
    staking.pauseStakingOf(address)
  }

  return (
    <div>
      <Dashboard
        provider={provider}
        loadWeb3Modal={loadWeb3Modal}
        tokens={tokens}
        withdrawToken={withdrawToken}
        restartStaking={restartStaking}
        stopStaking={stopStaking}
      />
    </div>
  );
}

export default DashboardPage
