/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type TradeConfigStruct = {
  offerId: BigNumberish;
  loanAmount: BigNumberish;
  duration: BigNumberish;
};

export type TradeConfigStructOutput = [BigNumber, BigNumber, BigNumber] & {
  offerId: BigNumber;
  loanAmount: BigNumber;
  duration: BigNumber;
};

export type DemandConfigStruct = {
  loanAmount: BigNumberish;
  fee: BigNumberish;
  superToken: string;
  collateralShare: BigNumberish;
  duration: BigNumberish;
};

export type DemandConfigStructOutput = [
  BigNumber,
  number,
  string,
  BigNumber,
  BigNumber
] & {
  loanAmount: BigNumber;
  fee: number;
  superToken: string;
  collateralShare: BigNumber;
  duration: BigNumber;
};

export type OfferConfigStruct = {
  loanMaxAmount: BigNumberish;
  loanMinAmount: BigNumberish;
  fee: BigNumberish;
  superToken: string;
  collateralShare: BigNumberish;
  maxDuration: BigNumberish;
};

export type OfferConfigStructOutput = [
  BigNumber,
  BigNumber,
  number,
  string,
  number,
  BigNumber
] & {
  loanMaxAmount: BigNumber;
  loanMinAmount: BigNumber;
  fee: number;
  superToken: string;
  collateralShare: number;
  maxDuration: BigNumber;
};

export interface LendingMarketPlaceInterface extends utils.Interface {
  functions: {
    "AcceptDemand()": FunctionFragment;
    "_loanIdByTaker(address)": FunctionFragment;
    "_loansDemandCounter()": FunctionFragment;
    "_loansOfferedCounter()": FunctionFragment;
    "_loansTradedById(uint256)": FunctionFragment;
    "_loansTradedCounter()": FunctionFragment;
    "acceptOffer((uint256,uint256,uint256))": FunctionFragment;
    "demandLoan((uint256,uint16,address,uint256,int96))": FunctionFragment;
    "getMaths(uint256,uint16,uint256,uint16)": FunctionFragment;
    "offerLoan((uint256,uint256,uint16,address,uint16,uint256))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "AcceptDemand",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_loanIdByTaker",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "_loansDemandCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_loansOfferedCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_loansTradedById",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_loansTradedCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptOffer",
    values: [TradeConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "demandLoan",
    values: [DemandConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getMaths",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "offerLoan",
    values: [OfferConfigStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "AcceptDemand",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_loanIdByTaker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_loansDemandCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_loansOfferedCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_loansTradedById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_loansTradedCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptOffer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "demandLoan", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getMaths", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "offerLoan", data: BytesLike): Result;

  events: {};
}

export interface LendingMarketPlace extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LendingMarketPlaceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    AcceptDemand(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _loanIdByTaker(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    _loansDemandCounter(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _value: BigNumber }>;

    _loansOfferedCounter(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _value: BigNumber }>;

    _loansTradedById(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        BigNumber,
        BigNumber,
        number,
        string,
        string,
        string,
        string
      ] & {
        loanTradedId: BigNumber;
        fee: number;
        loanAmount: BigNumber;
        loanTotalAmount: BigNumber;
        collateral: BigNumber;
        collateralShare: number;
        flowRate: BigNumber;
        initTimestamp: BigNumber;
        status: number;
        loanTaker: string;
        loanProvider: string;
        superToken: string;
        loanContract: string;
      }
    >;

    _loansTradedCounter(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _value: BigNumber }>;

    acceptOffer(
      _config: TradeConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    demandLoan(
      config: DemandConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getMaths(
      _loanAmount: BigNumberish,
      _fee: BigNumberish,
      _duration: BigNumberish,
      _collateralShare: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        totalLoanAmount: BigNumber;
        totalInflowRate: BigNumber;
        collateral: BigNumber;
      }
    >;

    offerLoan(
      config: OfferConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  AcceptDemand(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _loanIdByTaker(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  _loansDemandCounter(overrides?: CallOverrides): Promise<BigNumber>;

  _loansOfferedCounter(overrides?: CallOverrides): Promise<BigNumber>;

  _loansTradedById(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      number,
      BigNumber,
      BigNumber,
      BigNumber,
      number,
      BigNumber,
      BigNumber,
      number,
      string,
      string,
      string,
      string
    ] & {
      loanTradedId: BigNumber;
      fee: number;
      loanAmount: BigNumber;
      loanTotalAmount: BigNumber;
      collateral: BigNumber;
      collateralShare: number;
      flowRate: BigNumber;
      initTimestamp: BigNumber;
      status: number;
      loanTaker: string;
      loanProvider: string;
      superToken: string;
      loanContract: string;
    }
  >;

  _loansTradedCounter(overrides?: CallOverrides): Promise<BigNumber>;

  acceptOffer(
    _config: TradeConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  demandLoan(
    config: DemandConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getMaths(
    _loanAmount: BigNumberish,
    _fee: BigNumberish,
    _duration: BigNumberish,
    _collateralShare: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      totalLoanAmount: BigNumber;
      totalInflowRate: BigNumber;
      collateral: BigNumber;
    }
  >;

  offerLoan(
    config: OfferConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    AcceptDemand(overrides?: CallOverrides): Promise<void>;

    _loanIdByTaker(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    _loansDemandCounter(overrides?: CallOverrides): Promise<BigNumber>;

    _loansOfferedCounter(overrides?: CallOverrides): Promise<BigNumber>;

    _loansTradedById(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        BigNumber,
        BigNumber,
        number,
        string,
        string,
        string,
        string
      ] & {
        loanTradedId: BigNumber;
        fee: number;
        loanAmount: BigNumber;
        loanTotalAmount: BigNumber;
        collateral: BigNumber;
        collateralShare: number;
        flowRate: BigNumber;
        initTimestamp: BigNumber;
        status: number;
        loanTaker: string;
        loanProvider: string;
        superToken: string;
        loanContract: string;
      }
    >;

    _loansTradedCounter(overrides?: CallOverrides): Promise<BigNumber>;

    acceptOffer(
      _config: TradeConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    demandLoan(
      config: DemandConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    getMaths(
      _loanAmount: BigNumberish,
      _fee: BigNumberish,
      _duration: BigNumberish,
      _collateralShare: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        totalLoanAmount: BigNumber;
        totalInflowRate: BigNumber;
        collateral: BigNumber;
      }
    >;

    offerLoan(
      config: OfferConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    AcceptDemand(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _loanIdByTaker(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    _loansDemandCounter(overrides?: CallOverrides): Promise<BigNumber>;

    _loansOfferedCounter(overrides?: CallOverrides): Promise<BigNumber>;

    _loansTradedById(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _loansTradedCounter(overrides?: CallOverrides): Promise<BigNumber>;

    acceptOffer(
      _config: TradeConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    demandLoan(
      config: DemandConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getMaths(
      _loanAmount: BigNumberish,
      _fee: BigNumberish,
      _duration: BigNumberish,
      _collateralShare: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    offerLoan(
      config: OfferConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    AcceptDemand(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _loanIdByTaker(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _loansDemandCounter(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _loansOfferedCounter(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _loansTradedById(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _loansTradedCounter(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    acceptOffer(
      _config: TradeConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    demandLoan(
      config: DemandConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getMaths(
      _loanAmount: BigNumberish,
      _fee: BigNumberish,
      _duration: BigNumberish,
      _collateralShare: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    offerLoan(
      config: OfferConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
