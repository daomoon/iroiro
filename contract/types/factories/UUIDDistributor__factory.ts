/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { UUIDDistributor } from "../UUIDDistributor";

export class UUIDDistributor__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _distributorInfoCid: string,
    overrides?: Overrides
  ): Promise<UUIDDistributor> {
    return super.deploy(
      _distributorInfoCid,
      overrides || {}
    ) as Promise<UUIDDistributor>;
  }
  getDeployTransaction(
    _distributorInfoCid: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_distributorInfoCid, overrides || {});
  }
  attach(address: string): UUIDDistributor {
    return super.attach(address) as UUIDDistributor;
  }
  connect(signer: Signer): UUIDDistributor__factory {
    return super.connect(signer) as UUIDDistributor__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UUIDDistributor {
    return new Contract(address, _abi, signerOrProvider) as UUIDDistributor;
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
        internalType: "string",
        name: "target",
        type: "string",
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
  "0x60806040526001600060146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055503480156200003b57600080fd5b506040516200181338038062001813833981810160405260208110156200006157600080fd5b81019080805160405193929190846401000000008211156200008257600080fd5b838201915060208201858111156200009957600080fd5b8251866001820283011164010000000082111715620000b757600080fd5b8083526020830192505050908051906020019080838360005b83811015620000ed578082015181840152602081019050620000d0565b50505050905090810190601f1680156200011b5780820380516001836020036101000a031916815260200191505b50604052505050806000620001356200027a60201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3507f1e54e07388f827c88e88d724fc81b174a902ab48e8703c3cc30a38b221b83fae816040518080602001828103825283818151815260200191508051906020019080838360005b83811015620002375780820151818401526020810190506200021a565b50505050905090810190601f168015620002655780820380516001836020036101000a031916815260200191505b509250505060405180910390a1505062000282565b600033905090565b61158180620002926000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80638da5cb5b1161008c578063c9d8be3a11610066578063c9d8be3a14610415578063cc0a56f814610517578063cebce72d14610563578063f2fde38b146105c5576100cf565b80638da5cb5b14610319578063b224f6991461034d578063bc94dca6146103a5576100cf565b8063298d81d9146100d45780635fdeeee3146101ca578063715018a61461024357806375ecbb891461024d578063795be4b9146102a55780638283ba96146102cd575b600080fd5b6101c8600480360360a08110156100ea57600080fd5b81019080803567ffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561012557600080fd5b82018360208201111561013757600080fd5b8035906020019184600183028401116401000000008311171561015957600080fd5b9091929391929390803590602001909291908035906020019064010000000081111561018457600080fd5b82018360208201111561019657600080fd5b803590602001918460208302840111640100000000831117156101b857600080fd5b9091929391929390505050610609565b005b610241600480360360208110156101e057600080fd5b81019080803590602001906401000000008111156101fd57600080fd5b82018360208201111561020f57600080fd5b8035906020019184600183028401116401000000008311171561023157600080fd5b9091929391929390505050610984565b005b61024b610a9a565b005b61028d6004803603604081101561026357600080fd5b81019080803567ffffffffffffffff16906020019092919080359060200190929190505050610c07565b60405180821515815260200191505060405180910390f35b6102ad610c75565b604051808267ffffffffffffffff16815260200191505060405180910390f35b610303600480360360208110156102e357600080fd5b81019080803567ffffffffffffffff169060200190929190505050610c8f565b6040518082815260200191505060405180910390f35b610321610cc3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103a36004803603606081101561036357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190505050610cec565b005b6103db600480360360208110156103bb57600080fd5b81019080803567ffffffffffffffff169060200190929190505050610eef565b604051808473ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390f35b610515600480360360a081101561042b57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561047257600080fd5b82018360208201111561048457600080fd5b803590602001918460018302840111640100000000831117156104a657600080fd5b9091929391929390803590602001906401000000008111156104c757600080fd5b8201836020820111156104d957600080fd5b803590602001918460018302840111640100000000831117156104fb57600080fd5b909192939192939080359060200190929190505050610f39565b005b61054d6004803603602081101561052d57600080fd5b81019080803567ffffffffffffffff169060200190929190505050611033565b6040518082815260200191505060405180910390f35b6105996004803603602081101561057957600080fd5b81019080803567ffffffffffffffff169060200190929190505050611067565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610607600480360360208110156105db57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506110bb565b005b6106138787610c07565b15610669576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806114e06028913960400191505060405180910390fd5b6000600160008967ffffffffffffffff1667ffffffffffffffff168152602001908152602001600020905080600201548411156106f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806114ba6026913960400191505060405180910390fd5b6000878787876040516020018085815260200184848082843780830192505050828152602001945050505050604051602081830303815290604052805190602001209050610785848480806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050508360010154836112ad565b6107da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806115086021913960400191505060405180910390fd5b6107e48989611362565b8160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33876040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561087957600080fd5b505af115801561088d573d6000803e3d6000fd5b505050506040513d60208110156108a357600080fd5b8101908080519060200190929190505050610909576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806115296023913960400191505060405180910390fd5b8482600201540382600201819055503373ffffffffffffffffffffffffffffffffffffffff168967ffffffffffffffff167fd764529a8799bb0d27fe5a52891f3c7f36c5fd2748c1925b30c5a780f80fd3218a88604051808381526020018281526020019250505060405180910390a3505050505050505050565b61098c6113ef565b73ffffffffffffffffffffffffffffffffffffffff166109aa610cc3565b73ffffffffffffffffffffffffffffffffffffffff1614610a33576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b7f1e54e07388f827c88e88d724fc81b174a902ab48e8703c3cc30a38b221b83fae828260405180806020018281038252848482818152602001925080828437600081840152601f19601f820116905080830192505050935050505060405180910390a15050565b610aa26113ef565b73ffffffffffffffffffffffffffffffffffffffff16610ac0610cc3565b73ffffffffffffffffffffffffffffffffffffffff1614610b49576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000806101008381610c1557fe5b04905060006101008481610c2557fe5b0690506000600260008767ffffffffffffffff16815260200190815260200160002060008481526020019081526020016000205490506000826001901b9050808183161494505050505092915050565b600060149054906101000a900467ffffffffffffffff1681565b6000600160008367ffffffffffffffff1667ffffffffffffffff168152602001908152602001600020600201549050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600060405180606001604052808573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815250905080600160008060149054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155905050610df06001600060149054906101000a900467ffffffffffffffff1667ffffffffffffffff166113f790919063ffffffff16565b600060146101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060008490508073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610eac57600080fd5b505af1158015610ec0573d6000803e3d6000fd5b505050506040513d6020811015610ed657600080fd5b8101908080519060200190929190505050505050505050565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154905083565b3373ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16600060149054906101000a900467ffffffffffffffff1667ffffffffffffffff167f6fe3b4268dcb7962585e4f5c46d2255e248c49ab91565a0eec2c4e4889ceafb6888888886040518080602001806020018381038352878782818152602001925080828437600081840152601f19601f8201169050808301925050508381038252858582818152602001925080828437600081840152601f19601f820116905080830192505050965050505050505060405180910390a461102a868883610cec565b50505050505050565b6000600160008367ffffffffffffffff1667ffffffffffffffff168152602001908152602001600020600101549050919050565b6000600160008367ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6110c36113ef565b73ffffffffffffffffffffffffffffffffffffffff166110e1610cc3565b73ffffffffffffffffffffffffffffffffffffffff161461116a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156111f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806114946026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008082905060005b85518110156113545760008682815181106112cd57fe5b602002602001015190508083116113145782816040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209250611346565b808360405160200180838152602001828152602001925050506040516020818303038152906040528051906020012092505b5080806001019150506112b6565b508381149150509392505050565b6000610100828161136f57fe5b0490506000610100838161137f57fe5b069050806001901b600260008667ffffffffffffffff16815260200190815260200160002060008481526020019081526020016000205417600260008667ffffffffffffffff16815260200190815260200160002060008481526020019081526020016000208190555050505050565b600033905090565b60008082840190508367ffffffffffffffff168167ffffffffffffffff161015611489576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b809150509291505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734d65726b6c654469737472696275746f723a20496e73756666696369656e7420746f6b656e2e4d65726b6c654469737472696275746f723a2044726f7020616c726561647920636c61696d65642e4d65726b6c654469737472696275746f723a20496e76616c69642070726f6f662e4d65726b6c654469737472696275746f723a205472616e73666572206661696c65642ea2646970667358221220bc680a8a488f8865e6664d5c1fac8422ce3d806f203cba931650f2c9a4fb81de64736f6c63430007060033";
