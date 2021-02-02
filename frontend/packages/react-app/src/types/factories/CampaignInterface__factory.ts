/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { CampaignInterface } from "../CampaignInterface";

export class CampaignInterface__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _token: string,
    _campaignInfoCid: string,
    _recipientsCid: string,
    _campaignId: BigNumberish,
    _claimAmount: BigNumberish,
    _refundDestination: string,
    _startDate: BigNumberish,
    _endDate: BigNumberish,
    _link: string,
    overrides?: Overrides
  ): Promise<CampaignInterface> {
    return super.deploy(
      _token,
      _campaignInfoCid,
      _recipientsCid,
      _campaignId,
      _claimAmount,
      _refundDestination,
      _startDate,
      _endDate,
      _link,
      overrides || {}
    ) as Promise<CampaignInterface>;
  }
  getDeployTransaction(
    _token: string,
    _campaignInfoCid: string,
    _recipientsCid: string,
    _campaignId: BigNumberish,
    _claimAmount: BigNumberish,
    _refundDestination: string,
    _startDate: BigNumberish,
    _endDate: BigNumberish,
    _link: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _token,
      _campaignInfoCid,
      _recipientsCid,
      _campaignId,
      _claimAmount,
      _refundDestination,
      _startDate,
      _endDate,
      _link,
      overrides || {}
    );
  }
  attach(address: string): CampaignInterface {
    return super.attach(address) as CampaignInterface;
  }
  connect(signer: Signer): CampaignInterface__factory {
    return super.connect(signer) as CampaignInterface__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CampaignInterface {
    return new Contract(address, _abi, signerOrProvider) as CampaignInterface;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_token",
        type: "address",
      },
      {
        internalType: "string",
        name: "_campaignInfoCid",
        type: "string",
      },
      {
        internalType: "string",
        name: "_recipientsCid",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_campaignId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_claimAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_refundDestination",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_startDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endDate",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_link",
        type: "address",
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
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Claim",
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
    inputs: [],
    name: "UpdateStatus",
    type: "event",
  },
  {
    inputs: [],
    name: "campaignId",
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
    name: "campaignInfoCid",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimAmount",
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
    name: "claimedNum",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "endDate",
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
    inputs: [],
    name: "recipientsCid",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "refundDestination",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startDate",
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
    name: "status",
    outputs: [
      {
        internalType: "enum CampaignInterface.Status",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "address payable",
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
    inputs: [],
    name: "cancelCampaign",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "refundRemainingTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260016004556000600c60006101000a81548163ffffffff021916908363ffffffff1602179055506000600f60006101000a81548160ff021916908360028111156200004b57fe5b02179055503480156200005d57600080fd5b506040516200171a3803806200171a83398181016040526101208110156200008457600080fd5b810190808051906020019092919080516040519392919084640100000000821115620000af57600080fd5b83820191506020820185811115620000c657600080fd5b8251866001820283011164010000000082111715620000e457600080fd5b8083526020830192505050908051906020019080838360005b838110156200011a578082015181840152602081019050620000fd565b50505050905090810190601f168015620001485780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200016c57600080fd5b838201915060208201858111156200018357600080fd5b8251866001820283011164010000000082111715620001a157600080fd5b8083526020830192505050908051906020019080838360005b83811015620001d7578082015181840152602081019050620001ba565b50505050905090810190601f168015620002055780820380516001836020036101000a031916815260200191505b5060405260200180519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919050505060006200025d6200049360201b60201c565b905080600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35081831062000356576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180620016f56025913960400191505060405180910390fd5b88600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508760089080519060200190620003af92919062000589565b508660099080519060200190620003c892919062000589565b5085600a8190555084600b8190555083600c60046101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600d8190555081600e81905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141562000472576200046c6200049b60201b60201c565b62000484565b62000483816200054560201b60201c565b5b50505050505050505062000638565b600033905090565b6200054373c89bd4e1632d3a43cb03aaad5262cbe4038bc57173ffffffffffffffffffffffffffffffffffffffff166338cc48316040518163ffffffff1660e01b815260040160206040518083038186803b158015620004fa57600080fd5b505afa1580156200050f573d6000803e3d6000fd5b505050506040513d60208110156200052657600080fd5b81019080805190602001909291905050506200054560201b60201c565b565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620005cc57805160ff1916838001178555620005fd565b82800160010185558215620005fd579182015b82811115620005fc578251825591602001919060010190620005df565b5b5090506200060c919062000610565b5090565b6200063591905b808211156200063157600081600090555060010162000617565b5090565b90565b6110ad80620006486000396000f3fe608060405234801561001057600080fd5b50600436106100f45760003560e01c80638d1e55e911610097578063b06633fa11610066578063b06633fa14610317578063c24a0f8b14610361578063f2fde38b1461037f578063fc0c546a146103c3576100f4565b80638d1e55e9146102225780638da5cb5b146102a55780638ed5b0fc146102ef578063980e78441461030d576100f4565b80634bbf545b116100d35780634bbf545b146101c6578063715018a6146101f05780637864e735146101fa578063830953ab14610204576100f4565b8062acccbc146100f95780630b97bc861461017c578063200d2ed21461019a575b600080fd5b61010161040d565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610141578082015181840152602081019050610126565b50505050905090810190601f16801561016e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101846104ab565b6040518082815260200191505060405180910390f35b6101a26104b1565b604051808260028111156101b257fe5b60ff16815260200191505060405180910390f35b6101ce6104c4565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b6101f86104da565b005b610202610665565b005b61020c6109bc565b6040518082815260200191505060405180910390f35b61022a6109c2565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561026a57808201518184015260208101905061024f565b50505050905090810190601f1680156102975780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102ad610a60565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102f7610a8a565b6040518082815260200191505060405180910390f35b610315610a90565b005b61031f610de7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610369610e0d565b6040518082815260200191505060405180910390f35b6103c16004803603602081101561039557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e13565b005b6103cb611023565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60098054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104a35780601f10610478576101008083540402835291602001916104a3565b820191906000526020600020905b81548152906001019060200180831161048657829003601f168201915b505050505081565b600d5481565b600f60009054906101000a900460ff1681565b600c60009054906101000a900463ffffffff1681565b6104e2611049565b73ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146105a4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b61066d611049565b73ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461072f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b42600e54106107a6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f43616d706169676e206973206e6f7420656e646564207965740000000000000081525060200191505060405180910390fd5b6002600f60006101000a81548160ff021916908360028111156107c557fe5b02179055506000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600c60049054906101000a900473ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156108ad57600080fd5b505afa1580156108c1573d6000803e3d6000fd5b505050506040513d60208110156108d757600080fd5b81019080805190602001909291905050506040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561095157600080fd5b505af1158015610965573d6000803e3d6000fd5b505050506040513d602081101561097b57600080fd5b8101908080519060200190929190505050507ff1a4f7af7ee628980477c1cfcce6c7e00a2d08730fcc70cdd17ab241a457f54d60405160405180910390a150565b600b5481565b60088054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a585780601f10610a2d57610100808354040283529160200191610a58565b820191906000526020600020905b815481529060010190602001808311610a3b57829003601f168201915b505050505081565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600a5481565b610a98611049565b73ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610b5a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600d544210610bd1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f43616d706169676e20697320616c72656164792073746172746564000000000081525060200191505060405180910390fd5b6001600f60006101000a81548160ff02191690836002811115610bf057fe5b02179055506000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600c60049054906101000a900473ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610cd857600080fd5b505afa158015610cec573d6000803e3d6000fd5b505050506040513d6020811015610d0257600080fd5b81019080805190602001909291905050506040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610d7c57600080fd5b505af1158015610d90573d6000803e3d6000fd5b505050506040513d6020811015610da657600080fd5b8101908080519060200190929190505050507ff1a4f7af7ee628980477c1cfcce6c7e00a2d08730fcc70cdd17ab241a457f54d60405160405180910390a150565b600c60049054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600e5481565b610e1b611049565b73ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610edd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610f63576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806110526026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60003390509056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a264697066735822122095f16016d7ffb44209112d1dd4c5ef8078c4b13da99d390ac8c988630eb909a864736f6c634300060b003353746172742064617461206d757374206265206c657373207468616e20656e642064617465";
