/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface TokenFactoryInterfaceV1Interface extends ethers.utils.Interface {
  functions: {
    "updateOperator(address)": FunctionFragment;
    "updateDonatee(address)": FunctionFragment;
    "updateCreatorFund(address)": FunctionFragment;
    "updateTreasuryVester(address)": FunctionFragment;
    "createToken(string,string,uint16)": FunctionFragment;
    "createExclusiveToken(address,string,string,uint16,uint16)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "updateOperator",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateDonatee",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateCreatorFund",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateTreasuryVester",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "createToken",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createExclusiveToken",
    values: [string, string, string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "updateOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateDonatee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateCreatorFund",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateTreasuryVester",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createExclusiveToken",
    data: BytesLike
  ): Result;

  events: {
    "CreateToken(address,address)": EventFragment;
    "UpdateCreatorFund(address)": EventFragment;
    "UpdateDonatee(address)": EventFragment;
    "UpdateOperator(address)": EventFragment;
    "UpdateTreasuryVester(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreateToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateCreatorFund"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateDonatee"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateOperator"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateTreasuryVester"): EventFragment;
}

export class TokenFactoryInterfaceV1 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TokenFactoryInterfaceV1Interface;

  functions: {
    updateOperator(
      newOperator: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateOperator(address)"(
      newOperator: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    updateDonatee(
      newDonatee: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateDonatee(address)"(
      newDonatee: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    updateCreatorFund(
      newCreatorFund: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateCreatorFund(address)"(
      newCreatorFund: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    updateTreasuryVester(
      treasuryVester: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateTreasuryVester(address)"(
      treasuryVester: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    createToken(
      name: string,
      symbol: string,
      donationRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createToken(string,string,uint16)"(
      name: string,
      symbol: string,
      donationRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    createExclusiveToken(
      creator: string,
      name: string,
      symbol: string,
      donationRatio: BigNumberish,
      operationRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createExclusiveToken(address,string,string,uint16,uint16)"(
      creator: string,
      name: string,
      symbol: string,
      donationRatio: BigNumberish,
      operationRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  updateOperator(
    newOperator: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateOperator(address)"(
    newOperator: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  updateDonatee(
    newDonatee: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateDonatee(address)"(
    newDonatee: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  updateCreatorFund(
    newCreatorFund: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateCreatorFund(address)"(
    newCreatorFund: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  updateTreasuryVester(
    treasuryVester: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateTreasuryVester(address)"(
    treasuryVester: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  createToken(
    name: string,
    symbol: string,
    donationRatio: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createToken(string,string,uint16)"(
    name: string,
    symbol: string,
    donationRatio: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  createExclusiveToken(
    creator: string,
    name: string,
    symbol: string,
    donationRatio: BigNumberish,
    operationRatio: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createExclusiveToken(address,string,string,uint16,uint16)"(
    creator: string,
    name: string,
    symbol: string,
    donationRatio: BigNumberish,
    operationRatio: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    updateOperator(
      newOperator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateOperator(address)"(
      newOperator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateDonatee(newDonatee: string, overrides?: CallOverrides): Promise<void>;

    "updateDonatee(address)"(
      newDonatee: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateCreatorFund(
      newCreatorFund: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateCreatorFund(address)"(
      newCreatorFund: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateTreasuryVester(
      treasuryVester: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateTreasuryVester(address)"(
      treasuryVester: string,
      overrides?: CallOverrides
    ): Promise<void>;

    createToken(
      name: string,
      symbol: string,
      donationRatio: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "createToken(string,string,uint16)"(
      name: string,
      symbol: string,
      donationRatio: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createExclusiveToken(
      creator: string,
      name: string,
      symbol: string,
      donationRatio: BigNumberish,
      operationRatio: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "createExclusiveToken(address,string,string,uint16,uint16)"(
      creator: string,
      name: string,
      symbol: string,
      donationRatio: BigNumberish,
      operationRatio: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    CreateToken(
      token: string | null,
      creator: string | null
    ): TypedEventFilter<[string, string], { token: string; creator: string }>;

    UpdateCreatorFund(
      creatorFund: null
    ): TypedEventFilter<[string], { creatorFund: string }>;

    UpdateDonatee(
      donatee: null
    ): TypedEventFilter<[string], { donatee: string }>;

    UpdateOperator(
      operator: null
    ): TypedEventFilter<[string], { operator: string }>;

    UpdateTreasuryVester(
      treasuryVester: null
    ): TypedEventFilter<[string], { treasuryVester: string }>;
  };

  estimateGas: {
    updateOperator(
      newOperator: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateOperator(address)"(
      newOperator: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    updateDonatee(
      newDonatee: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateDonatee(address)"(
      newDonatee: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    updateCreatorFund(
      newCreatorFund: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateCreatorFund(address)"(
      newCreatorFund: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    updateTreasuryVester(
      treasuryVester: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateTreasuryVester(address)"(
      treasuryVester: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    createToken(
      name: string,
      symbol: string,
      donationRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createToken(string,string,uint16)"(
      name: string,
      symbol: string,
      donationRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    createExclusiveToken(
      creator: string,
      name: string,
      symbol: string,
      donationRatio: BigNumberish,
      operationRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createExclusiveToken(address,string,string,uint16,uint16)"(
      creator: string,
      name: string,
      symbol: string,
      donationRatio: BigNumberish,
      operationRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    updateOperator(
      newOperator: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateOperator(address)"(
      newOperator: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    updateDonatee(
      newDonatee: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateDonatee(address)"(
      newDonatee: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    updateCreatorFund(
      newCreatorFund: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateCreatorFund(address)"(
      newCreatorFund: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    updateTreasuryVester(
      treasuryVester: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateTreasuryVester(address)"(
      treasuryVester: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    createToken(
      name: string,
      symbol: string,
      donationRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createToken(string,string,uint16)"(
      name: string,
      symbol: string,
      donationRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    createExclusiveToken(
      creator: string,
      name: string,
      symbol: string,
      donationRatio: BigNumberish,
      operationRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createExclusiveToken(address,string,string,uint16,uint16)"(
      creator: string,
      name: string,
      symbol: string,
      donationRatio: BigNumberish,
      operationRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
