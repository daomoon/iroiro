/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { TokenFactoryInterfaceV1 } from "../TokenFactoryInterfaceV1";

export class TokenFactoryInterfaceV1__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenFactoryInterfaceV1 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TokenFactoryInterfaceV1;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
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
    ],
    name: "CreateToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "creatorFund",
        type: "address",
      },
    ],
    name: "UpdateCreatorFund",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "donatee",
        type: "address",
      },
    ],
    name: "UpdateDonatee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "UpdateOperator",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "treasuryVester",
        type: "address",
      },
    ],
    name: "UpdateTreasuryVester",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOperator",
        type: "address",
      },
    ],
    name: "updateOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newDonatee",
        type: "address",
      },
    ],
    name: "updateDonatee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newCreatorFund",
        type: "address",
      },
    ],
    name: "updateCreatorFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "treasuryVester",
        type: "address",
      },
    ],
    name: "updateTreasuryVester",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "donationRatio",
        type: "uint256",
      },
    ],
    name: "createToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "donationRatio",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "operationRatio",
        type: "uint256",
      },
    ],
    name: "createExclusiveToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
