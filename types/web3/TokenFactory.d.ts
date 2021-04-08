/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type CreateToken = ContractEventLog<{
  token: string;
  creator: string;
  0: string;
  1: string;
}>;
export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;
export type UpdateCreatorFund = ContractEventLog<{
  creatorFund: string;
  0: string;
}>;
export type UpdateDonatee = ContractEventLog<{
  donatee: string;
  0: string;
}>;
export type UpdateOperator = ContractEventLog<{
  operator: string;
  0: string;
}>;
export type UpdateTreasuryVester = ContractEventLog<{
  treasuryVester: string;
  0: string;
}>;

export interface TokenFactory extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): TokenFactory;
  clone(): TokenFactory;
  methods: {
    /**
     * Returns the address of the current owner.
     */
    owner(): NonPayableTransactionObject<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(): NonPayableTransactionObject<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    updateOperator(newOperator: string): NonPayableTransactionObject<void>;

    updateDonatee(newDonatee: string): NonPayableTransactionObject<void>;

    updateCreatorFund(
      newCreatorFund: string
    ): NonPayableTransactionObject<void>;

    updateTreasuryVester(
      newTreasuryVester: string
    ): NonPayableTransactionObject<void>;

    createToken(
      name: string,
      symbol: string,
      donationRatio: number | string | BN
    ): NonPayableTransactionObject<void>;

    createExclusiveToken(
      creator: string,
      name: string,
      symbol: string,
      donationRatio: number | string | BN,
      operationRatio: number | string | BN
    ): NonPayableTransactionObject<void>;
  };
  events: {
    CreateToken(cb?: Callback<CreateToken>): EventEmitter;
    CreateToken(
      options?: EventOptions,
      cb?: Callback<CreateToken>
    ): EventEmitter;

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    UpdateCreatorFund(cb?: Callback<UpdateCreatorFund>): EventEmitter;
    UpdateCreatorFund(
      options?: EventOptions,
      cb?: Callback<UpdateCreatorFund>
    ): EventEmitter;

    UpdateDonatee(cb?: Callback<UpdateDonatee>): EventEmitter;
    UpdateDonatee(
      options?: EventOptions,
      cb?: Callback<UpdateDonatee>
    ): EventEmitter;

    UpdateOperator(cb?: Callback<UpdateOperator>): EventEmitter;
    UpdateOperator(
      options?: EventOptions,
      cb?: Callback<UpdateOperator>
    ): EventEmitter;

    UpdateTreasuryVester(cb?: Callback<UpdateTreasuryVester>): EventEmitter;
    UpdateTreasuryVester(
      options?: EventOptions,
      cb?: Callback<UpdateTreasuryVester>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "CreateToken", cb: Callback<CreateToken>): void;
  once(
    event: "CreateToken",
    options: EventOptions,
    cb: Callback<CreateToken>
  ): void;

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;

  once(event: "UpdateCreatorFund", cb: Callback<UpdateCreatorFund>): void;
  once(
    event: "UpdateCreatorFund",
    options: EventOptions,
    cb: Callback<UpdateCreatorFund>
  ): void;

  once(event: "UpdateDonatee", cb: Callback<UpdateDonatee>): void;
  once(
    event: "UpdateDonatee",
    options: EventOptions,
    cb: Callback<UpdateDonatee>
  ): void;

  once(event: "UpdateOperator", cb: Callback<UpdateOperator>): void;
  once(
    event: "UpdateOperator",
    options: EventOptions,
    cb: Callback<UpdateOperator>
  ): void;

  once(event: "UpdateTreasuryVester", cb: Callback<UpdateTreasuryVester>): void;
  once(
    event: "UpdateTreasuryVester",
    options: EventOptions,
    cb: Callback<UpdateTreasuryVester>
  ): void;
}
