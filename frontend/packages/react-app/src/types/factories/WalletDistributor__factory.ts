/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { WalletDistributor } from "../WalletDistributor";

export class WalletDistributor__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _distributorInfoCid: string,
    overrides?: Overrides
  ): Promise<WalletDistributor> {
    return super.deploy(
      _distributorInfoCid,
      overrides || {}
    ) as Promise<WalletDistributor>;
  }
  getDeployTransaction(
    _distributorInfoCid: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_distributorInfoCid, overrides || {});
  }
  attach(address: string): WalletDistributor {
    return super.attach(address) as WalletDistributor;
  }
  connect(signer: Signer): WalletDistributor__factory {
    return super.connect(signer) as WalletDistributor__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WalletDistributor {
    return new Contract(address, _abi, signerOrProvider) as WalletDistributor;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_distributorInfoCid",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "distributionId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Claimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "distributionId",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "merkleTreeCid",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "campaignInfoCid",
        type: "string",
      },
    ],
    name: "CreateCampaign",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "cid",
        type: "string",
      },
    ],
    name: "UpdateDistributorInfo",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "newToken",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "newMerkleRoot",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
    ],
    name: "addDistribution",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "distributionId",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    name: "distributionMap",
    outputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "remainingAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "distributionId",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "isClaimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "distributionId",
        type: "uint64",
      },
    ],
    name: "merkleRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextDistributionId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "distributionId",
        type: "uint64",
      },
    ],
    name: "remainingAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "distributionId",
        type: "uint64",
      },
    ],
    name: "token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "distributorInfoCid",
        type: "string",
      },
    ],
    name: "updateDistributorInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
      {
        internalType: "address payable",
        name: "token",
        type: "address",
      },
      {
        internalType: "string",
        name: "merkleTreeCid",
        type: "string",
      },
      {
        internalType: "string",
        name: "campaignInfoCid",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
    ],
    name: "createCampaign",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526001600060146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055503480156200003b57600080fd5b50604051620017ed380380620017ed833981810160405260208110156200006157600080fd5b81019080805160405193929190846401000000008211156200008257600080fd5b838201915060208201858111156200009957600080fd5b8251866001820283011164010000000082111715620000b757600080fd5b8083526020830192505050908051906020019080838360005b83811015620000ed578082015181840152602081019050620000d0565b50505050905090810190601f1680156200011b5780820380516001836020036101000a031916815260200191505b50604052505050806000620001356200027a60201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3507f1e54e07388f827c88e88d724fc81b174a902ab48e8703c3cc30a38b221b83fae816040518080602001828103825283818151815260200191508051906020019080838360005b83811015620002375780820151818401526020810190506200021a565b50505050905090810190601f168015620002655780820380516001836020036101000a031916815260200191505b509250505060405180910390a1505062000282565b600033905090565b61155b80620002926000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80638da5cb5b1161008c578063c9d8be3a11610066578063c9d8be3a146103e0578063cc0a56f8146104e2578063cebce72d1461052e578063f2fde38b14610590576100cf565b80638da5cb5b146102e4578063b224f69914610318578063bc94dca614610370576100cf565b806323711997146100d45780635fdeeee314610195578063715018a61461020e57806375ecbb8914610218578063795be4b9146102705780638283ba9614610298575b600080fd5b610193600480360360a08110156100ea57600080fd5b81019080803567ffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561014f57600080fd5b82018360208201111561016157600080fd5b8035906020019184602083028401116401000000008311171561018357600080fd5b90919293919293905050506105d4565b005b61020c600480360360208110156101ab57600080fd5b81019080803590602001906401000000008111156101c857600080fd5b8201836020820111156101da57600080fd5b803590602001918460018302840111640100000000831117156101fc57600080fd5b909192939192939050505061095e565b005b610216610a74565b005b6102586004803603604081101561022e57600080fd5b81019080803567ffffffffffffffff16906020019092919080359060200190929190505050610be1565b60405180821515815260200191505060405180910390f35b610278610c4f565b604051808267ffffffffffffffff16815260200191505060405180910390f35b6102ce600480360360208110156102ae57600080fd5b81019080803567ffffffffffffffff169060200190929190505050610c69565b6040518082815260200191505060405180910390f35b6102ec610c9d565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61036e6004803603606081101561032e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190505050610cc6565b005b6103a66004803603602081101561038657600080fd5b81019080803567ffffffffffffffff169060200190929190505050610ec9565b604051808473ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390f35b6104e0600480360360a08110156103f657600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561043d57600080fd5b82018360208201111561044f57600080fd5b8035906020019184600183028401116401000000008311171561047157600080fd5b90919293919293908035906020019064010000000081111561049257600080fd5b8201836020820111156104a457600080fd5b803590602001918460018302840111640100000000831117156104c657600080fd5b909192939192939080359060200190929190505050610f13565b005b610518600480360360208110156104f857600080fd5b81019080803567ffffffffffffffff16906020019092919050505061100d565b6040518082815260200191505060405180910390f35b6105646004803603602081101561054457600080fd5b81019080803567ffffffffffffffff169060200190929190505050611041565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6105d2600480360360208110156105a657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611095565b005b6105de8686610be1565b15610634576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806114ba6028913960400191505060405180910390fd5b6000600160008867ffffffffffffffff1667ffffffffffffffff168152602001908152602001600020905080600201548411156106bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806114946026913960400191505060405180910390fd5b6000868686604051602001808481526020018373ffffffffffffffffffffffffffffffffffffffff1660601b81526014018281526020019350505050604051602081830303815290604052805190602001209050610760848480806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050836001015483611287565b6107b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806114e26021913960400191505060405180910390fd5b6107bf888861133c565b8160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb87876040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561085457600080fd5b505af1158015610868573d6000803e3d6000fd5b505050506040513d602081101561087e57600080fd5b81019080805190602001909291905050506108e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806115036023913960400191505060405180910390fd5b8482600201540382600201819055508573ffffffffffffffffffffffffffffffffffffffff168867ffffffffffffffff167fd764529a8799bb0d27fe5a52891f3c7f36c5fd2748c1925b30c5a780f80fd3218988604051808381526020018281526020019250505060405180910390a35050505050505050565b6109666113c9565b73ffffffffffffffffffffffffffffffffffffffff16610984610c9d565b73ffffffffffffffffffffffffffffffffffffffff1614610a0d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b7f1e54e07388f827c88e88d724fc81b174a902ab48e8703c3cc30a38b221b83fae828260405180806020018281038252848482818152602001925080828437600081840152601f19601f820116905080830192505050935050505060405180910390a15050565b610a7c6113c9565b73ffffffffffffffffffffffffffffffffffffffff16610a9a610c9d565b73ffffffffffffffffffffffffffffffffffffffff1614610b23576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000806101008381610bef57fe5b04905060006101008481610bff57fe5b0690506000600260008767ffffffffffffffff16815260200190815260200160002060008481526020019081526020016000205490506000826001901b9050808183161494505050505092915050565b600060149054906101000a900467ffffffffffffffff1681565b6000600160008367ffffffffffffffff1667ffffffffffffffff168152602001908152602001600020600201549050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600060405180606001604052808573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815250905080600160008060149054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155905050610dca6001600060149054906101000a900467ffffffffffffffff1667ffffffffffffffff166113d190919063ffffffff16565b600060146101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060008490508073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610e8657600080fd5b505af1158015610e9a573d6000803e3d6000fd5b505050506040513d6020811015610eb057600080fd5b8101908080519060200190929190505050505050505050565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154905083565b3373ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16600060149054906101000a900467ffffffffffffffff1667ffffffffffffffff167f6fe3b4268dcb7962585e4f5c46d2255e248c49ab91565a0eec2c4e4889ceafb6888888886040518080602001806020018381038352878782818152602001925080828437600081840152601f19601f8201169050808301925050508381038252858582818152602001925080828437600081840152601f19601f820116905080830192505050965050505050505060405180910390a4611004868883610cc6565b50505050505050565b6000600160008367ffffffffffffffff1667ffffffffffffffff168152602001908152602001600020600101549050919050565b6000600160008367ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b61109d6113c9565b73ffffffffffffffffffffffffffffffffffffffff166110bb610c9d565b73ffffffffffffffffffffffffffffffffffffffff1614611144576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156111ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061146e6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008082905060005b855181101561132e5760008682815181106112a757fe5b602002602001015190508083116112ee5782816040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209250611320565b808360405160200180838152602001828152602001925050506040516020818303038152906040528051906020012092505b508080600101915050611290565b508381149150509392505050565b6000610100828161134957fe5b0490506000610100838161135957fe5b069050806001901b600260008667ffffffffffffffff16815260200190815260200160002060008481526020019081526020016000205417600260008667ffffffffffffffff16815260200190815260200160002060008481526020019081526020016000208190555050505050565b600033905090565b60008082840190508367ffffffffffffffff168167ffffffffffffffff161015611463576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b809150509291505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734d65726b6c654469737472696275746f723a20496e73756666696369656e7420746f6b656e2e4d65726b6c654469737472696275746f723a2044726f7020616c726561647920636c61696d65642e4d65726b6c654469737472696275746f723a20496e76616c69642070726f6f662e4d65726b6c654469737472696275746f723a205472616e73666572206661696c65642ea2646970667358221220d946f0239852fdb5a8f24bacc42a9e935b89065b4006b5c17543cd93947bf9d064736f6c63430007060033";
