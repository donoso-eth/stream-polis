// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class LoanDemandCreated extends ethereum.Event {
  get params(): LoanDemandCreated__Params {
    return new LoanDemandCreated__Params(this);
  }
}

export class LoanDemandCreated__Params {
  _event: LoanDemandCreated;

  constructor(event: LoanDemandCreated) {
    this._event = event;
  }

  get loanDemand(): LoanDemandCreatedLoanDemandStruct {
    return changetype<LoanDemandCreatedLoanDemandStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class LoanDemandCreatedLoanDemandStruct extends ethereum.Tuple {
  get loanDemandId(): BigInt {
    return this[0].toBigInt();
  }

  get config(): LoanDemandCreatedLoanDemandConfigStruct {
    return changetype<LoanDemandCreatedLoanDemandConfigStruct>(
      this[1].toTuple()
    );
  }

  get loanTaker(): Address {
    return this[2].toAddress();
  }

  get status(): i32 {
    return this[3].toI32();
  }
}

export class LoanDemandCreatedLoanDemandConfigStruct extends ethereum.Tuple {
  get loanAmount(): BigInt {
    return this[0].toBigInt();
  }

  get fee(): i32 {
    return this[1].toI32();
  }

  get superToken(): Address {
    return this[2].toAddress();
  }

  get collateralShare(): i32 {
    return this[3].toI32();
  }

  get duration(): BigInt {
    return this[4].toBigInt();
  }
}

export class LoanOfferCreated extends ethereum.Event {
  get params(): LoanOfferCreated__Params {
    return new LoanOfferCreated__Params(this);
  }
}

export class LoanOfferCreated__Params {
  _event: LoanOfferCreated;

  constructor(event: LoanOfferCreated) {
    this._event = event;
  }

  get loanOffered(): LoanOfferCreatedLoanOfferedStruct {
    return changetype<LoanOfferCreatedLoanOfferedStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class LoanOfferCreatedLoanOfferedStruct extends ethereum.Tuple {
  get loanOfferId(): BigInt {
    return this[0].toBigInt();
  }

  get config(): LoanOfferCreatedLoanOfferedConfigStruct {
    return changetype<LoanOfferCreatedLoanOfferedConfigStruct>(
      this[1].toTuple()
    );
  }

  get loanProvider(): Address {
    return this[2].toAddress();
  }

  get status(): i32 {
    return this[3].toI32();
  }
}

export class LoanOfferCreatedLoanOfferedConfigStruct extends ethereum.Tuple {
  get loanMaxAmount(): BigInt {
    return this[0].toBigInt();
  }

  get loanMinAmount(): BigInt {
    return this[1].toBigInt();
  }

  get fee(): i32 {
    return this[2].toI32();
  }

  get superToken(): Address {
    return this[3].toAddress();
  }

  get collateralShare(): i32 {
    return this[4].toI32();
  }

  get maxDuration(): BigInt {
    return this[5].toBigInt();
  }

  get isInfinite(): boolean {
    return this[6].toBoolean();
  }

  get numberOfLoansOffered(): i32 {
    return this[7].toI32();
  }

  get numberOfLoansTraded(): i32 {
    return this[8].toI32();
  }
}

export class LoanTradeCreated extends ethereum.Event {
  get params(): LoanTradeCreated__Params {
    return new LoanTradeCreated__Params(this);
  }
}

export class LoanTradeCreated__Params {
  _event: LoanTradeCreated;

  constructor(event: LoanTradeCreated) {
    this._event = event;
  }

  get loanTraded(): LoanTradeCreatedLoanTradedStruct {
    return changetype<LoanTradeCreatedLoanTradedStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class LoanTradeCreatedLoanTradedStruct extends ethereum.Tuple {
  get loanTradedId(): BigInt {
    return this[0].toBigInt();
  }

  get fee(): i32 {
    return this[1].toI32();
  }

  get loanAmount(): BigInt {
    return this[2].toBigInt();
  }

  get loanTotalAmount(): BigInt {
    return this[3].toBigInt();
  }

  get collateral(): BigInt {
    return this[4].toBigInt();
  }

  get collateralShare(): i32 {
    return this[5].toI32();
  }

  get flowRate(): BigInt {
    return this[6].toBigInt();
  }

  get initTimestamp(): BigInt {
    return this[7].toBigInt();
  }

  get duration(): BigInt {
    return this[8].toBigInt();
  }

  get status(): i32 {
    return this[9].toI32();
  }

  get loanTaker(): Address {
    return this[10].toAddress();
  }

  get loanProvider(): Address {
    return this[11].toAddress();
  }

  get superToken(): Address {
    return this[12].toAddress();
  }

  get loanContract(): Address {
    return this[13].toAddress();
  }
}

export class LoanTradeFinished extends ethereum.Event {
  get params(): LoanTradeFinished__Params {
    return new LoanTradeFinished__Params(this);
  }
}

export class LoanTradeFinished__Params {
  _event: LoanTradeFinished;

  constructor(event: LoanTradeFinished) {
    this._event = event;
  }

  get loanTradedId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class LendingMarketPlace___loansTradedByIdResult {
  value0: BigInt;
  value1: i32;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: i32;
  value6: BigInt;
  value7: BigInt;
  value8: BigInt;
  value9: i32;
  value10: Address;
  value11: Address;
  value12: Address;
  value13: Address;

  constructor(
    value0: BigInt,
    value1: i32,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: i32,
    value6: BigInt,
    value7: BigInt,
    value8: BigInt,
    value9: i32,
    value10: Address,
    value11: Address,
    value12: Address,
    value13: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
    this.value10 = value10;
    this.value11 = value11;
    this.value12 = value12;
    this.value13 = value13;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set(
      "value1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value1))
    );
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set(
      "value5",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value5))
    );
    map.set("value6", ethereum.Value.fromSignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromUnsignedBigInt(this.value8));
    map.set(
      "value9",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value9))
    );
    map.set("value10", ethereum.Value.fromAddress(this.value10));
    map.set("value11", ethereum.Value.fromAddress(this.value11));
    map.set("value12", ethereum.Value.fromAddress(this.value12));
    map.set("value13", ethereum.Value.fromAddress(this.value13));
    return map;
  }
}

export class LendingMarketPlace__checkerStopStreamResult {
  value0: boolean;
  value1: Bytes;

  constructor(value0: boolean, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromBytes(this.value1));
    return map;
  }
}

export class LendingMarketPlace__getMathsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromSignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class LendingMarketPlace extends ethereum.SmartContract {
  static bind(address: Address): LendingMarketPlace {
    return new LendingMarketPlace("LendingMarketPlace", address);
  }

  ETH(): Address {
    let result = super.call("ETH", "ETH():(address)", []);

    return result[0].toAddress();
  }

  try_ETH(): ethereum.CallResult<Address> {
    let result = super.tryCall("ETH", "ETH():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _gelatoTaskIdbyLoanClone(param0: Address): Bytes {
    let result = super.call(
      "_gelatoTaskIdbyLoanClone",
      "_gelatoTaskIdbyLoanClone(address):(bytes32)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBytes();
  }

  try__gelatoTaskIdbyLoanClone(param0: Address): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "_gelatoTaskIdbyLoanClone",
      "_gelatoTaskIdbyLoanClone(address):(bytes32)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  _loanIdByTaker(param0: Address): BigInt {
    let result = super.call(
      "_loanIdByTaker",
      "_loanIdByTaker(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try__loanIdByTaker(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_loanIdByTaker",
      "_loanIdByTaker(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _loansDemandCounter(): BigInt {
    let result = super.call(
      "_loansDemandCounter",
      "_loansDemandCounter():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__loansDemandCounter(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_loansDemandCounter",
      "_loansDemandCounter():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _loansOfferedCounter(): BigInt {
    let result = super.call(
      "_loansOfferedCounter",
      "_loansOfferedCounter():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__loansOfferedCounter(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_loansOfferedCounter",
      "_loansOfferedCounter():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _loansTradedById(param0: BigInt): LendingMarketPlace___loansTradedByIdResult {
    let result = super.call(
      "_loansTradedById",
      "_loansTradedById(uint256):(uint256,uint16,uint256,uint256,uint256,uint16,int96,uint256,uint256,uint8,address,address,address,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new LendingMarketPlace___loansTradedByIdResult(
      result[0].toBigInt(),
      result[1].toI32(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toI32(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBigInt(),
      result[9].toI32(),
      result[10].toAddress(),
      result[11].toAddress(),
      result[12].toAddress(),
      result[13].toAddress()
    );
  }

  try__loansTradedById(
    param0: BigInt
  ): ethereum.CallResult<LendingMarketPlace___loansTradedByIdResult> {
    let result = super.tryCall(
      "_loansTradedById",
      "_loansTradedById(uint256):(uint256,uint16,uint256,uint256,uint256,uint16,int96,uint256,uint256,uint8,address,address,address,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new LendingMarketPlace___loansTradedByIdResult(
        value[0].toBigInt(),
        value[1].toI32(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toI32(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toBigInt(),
        value[9].toI32(),
        value[10].toAddress(),
        value[11].toAddress(),
        value[12].toAddress(),
        value[13].toAddress()
      )
    );
  }

  _loansTradedCounter(): BigInt {
    let result = super.call(
      "_loansTradedCounter",
      "_loansTradedCounter():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__loansTradedCounter(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_loansTradedCounter",
      "_loansTradedCounter():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  checkerStopStream(
    loanId: BigInt
  ): LendingMarketPlace__checkerStopStreamResult {
    let result = super.call(
      "checkerStopStream",
      "checkerStopStream(uint256):(bool,bytes)",
      [ethereum.Value.fromUnsignedBigInt(loanId)]
    );

    return new LendingMarketPlace__checkerStopStreamResult(
      result[0].toBoolean(),
      result[1].toBytes()
    );
  }

  try_checkerStopStream(
    loanId: BigInt
  ): ethereum.CallResult<LendingMarketPlace__checkerStopStreamResult> {
    let result = super.tryCall(
      "checkerStopStream",
      "checkerStopStream(uint256):(bool,bytes)",
      [ethereum.Value.fromUnsignedBigInt(loanId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new LendingMarketPlace__checkerStopStreamResult(
        value[0].toBoolean(),
        value[1].toBytes()
      )
    );
  }

  gelato(): Address {
    let result = super.call("gelato", "gelato():(address)", []);

    return result[0].toAddress();
  }

  try_gelato(): ethereum.CallResult<Address> {
    let result = super.tryCall("gelato", "gelato():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getMaths(
    _loanAmount: BigInt,
    _fee: i32,
    _duration: BigInt,
    _collateralShare: i32
  ): LendingMarketPlace__getMathsResult {
    let result = super.call(
      "getMaths",
      "getMaths(uint256,uint16,uint256,uint16):(uint256,int96,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_loanAmount),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_fee)),
        ethereum.Value.fromUnsignedBigInt(_duration),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_collateralShare))
      ]
    );

    return new LendingMarketPlace__getMathsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_getMaths(
    _loanAmount: BigInt,
    _fee: i32,
    _duration: BigInt,
    _collateralShare: i32
  ): ethereum.CallResult<LendingMarketPlace__getMathsResult> {
    let result = super.tryCall(
      "getMaths",
      "getMaths(uint256,uint16,uint256,uint16):(uint256,int96,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_loanAmount),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_fee)),
        ethereum.Value.fromUnsignedBigInt(_duration),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_collateralShare))
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new LendingMarketPlace__getMathsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  ops(): Address {
    let result = super.call("ops", "ops():(address)", []);

    return result[0].toAddress();
  }

  try_ops(): ethereum.CallResult<Address> {
    let result = super.tryCall("ops", "ops():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  withdrawContract(): boolean {
    let result = super.call(
      "withdrawContract",
      "withdrawContract():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_withdrawContract(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "withdrawContract",
      "withdrawContract():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _loanFactory(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _host(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _marketPlaceFee(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get _ops(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptDemandCall extends ethereum.Call {
  get inputs(): AcceptDemandCall__Inputs {
    return new AcceptDemandCall__Inputs(this);
  }

  get outputs(): AcceptDemandCall__Outputs {
    return new AcceptDemandCall__Outputs(this);
  }
}

export class AcceptDemandCall__Inputs {
  _call: AcceptDemandCall;

  constructor(call: AcceptDemandCall) {
    this._call = call;
  }
}

export class AcceptDemandCall__Outputs {
  _call: AcceptDemandCall;

  constructor(call: AcceptDemandCall) {
    this._call = call;
  }
}

export class AcceptOfferCall extends ethereum.Call {
  get inputs(): AcceptOfferCall__Inputs {
    return new AcceptOfferCall__Inputs(this);
  }

  get outputs(): AcceptOfferCall__Outputs {
    return new AcceptOfferCall__Outputs(this);
  }
}

export class AcceptOfferCall__Inputs {
  _call: AcceptOfferCall;

  constructor(call: AcceptOfferCall) {
    this._call = call;
  }

  get _config(): AcceptOfferCall_configStruct {
    return changetype<AcceptOfferCall_configStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class AcceptOfferCall__Outputs {
  _call: AcceptOfferCall;

  constructor(call: AcceptOfferCall) {
    this._call = call;
  }
}

export class AcceptOfferCall_configStruct extends ethereum.Tuple {
  get offerId(): BigInt {
    return this[0].toBigInt();
  }

  get loanAmount(): BigInt {
    return this[1].toBigInt();
  }

  get duration(): BigInt {
    return this[2].toBigInt();
  }
}

export class CancelTaskbyIdCall extends ethereum.Call {
  get inputs(): CancelTaskbyIdCall__Inputs {
    return new CancelTaskbyIdCall__Inputs(this);
  }

  get outputs(): CancelTaskbyIdCall__Outputs {
    return new CancelTaskbyIdCall__Outputs(this);
  }
}

export class CancelTaskbyIdCall__Inputs {
  _call: CancelTaskbyIdCall;

  constructor(call: CancelTaskbyIdCall) {
    this._call = call;
  }

  get _taskId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get loanContract(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class CancelTaskbyIdCall__Outputs {
  _call: CancelTaskbyIdCall;

  constructor(call: CancelTaskbyIdCall) {
    this._call = call;
  }
}

export class DemandLoanCall extends ethereum.Call {
  get inputs(): DemandLoanCall__Inputs {
    return new DemandLoanCall__Inputs(this);
  }

  get outputs(): DemandLoanCall__Outputs {
    return new DemandLoanCall__Outputs(this);
  }
}

export class DemandLoanCall__Inputs {
  _call: DemandLoanCall;

  constructor(call: DemandLoanCall) {
    this._call = call;
  }

  get config(): DemandLoanCallConfigStruct {
    return changetype<DemandLoanCallConfigStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class DemandLoanCall__Outputs {
  _call: DemandLoanCall;

  constructor(call: DemandLoanCall) {
    this._call = call;
  }
}

export class DemandLoanCallConfigStruct extends ethereum.Tuple {
  get loanAmount(): BigInt {
    return this[0].toBigInt();
  }

  get fee(): i32 {
    return this[1].toI32();
  }

  get superToken(): Address {
    return this[2].toAddress();
  }

  get collateralShare(): i32 {
    return this[3].toI32();
  }

  get duration(): BigInt {
    return this[4].toBigInt();
  }
}

export class OfferLoanCall extends ethereum.Call {
  get inputs(): OfferLoanCall__Inputs {
    return new OfferLoanCall__Inputs(this);
  }

  get outputs(): OfferLoanCall__Outputs {
    return new OfferLoanCall__Outputs(this);
  }
}

export class OfferLoanCall__Inputs {
  _call: OfferLoanCall;

  constructor(call: OfferLoanCall) {
    this._call = call;
  }

  get config(): OfferLoanCallConfigStruct {
    return changetype<OfferLoanCallConfigStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class OfferLoanCall__Outputs {
  _call: OfferLoanCall;

  constructor(call: OfferLoanCall) {
    this._call = call;
  }
}

export class OfferLoanCallConfigStruct extends ethereum.Tuple {
  get loanMaxAmount(): BigInt {
    return this[0].toBigInt();
  }

  get loanMinAmount(): BigInt {
    return this[1].toBigInt();
  }

  get fee(): i32 {
    return this[2].toI32();
  }

  get superToken(): Address {
    return this[3].toAddress();
  }

  get collateralShare(): i32 {
    return this[4].toI32();
  }

  get maxDuration(): BigInt {
    return this[5].toBigInt();
  }

  get isInfinite(): boolean {
    return this[6].toBoolean();
  }

  get numberOfLoansOffered(): i32 {
    return this[7].toI32();
  }

  get numberOfLoansTraded(): i32 {
    return this[8].toI32();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class StopStreamCall extends ethereum.Call {
  get inputs(): StopStreamCall__Inputs {
    return new StopStreamCall__Inputs(this);
  }

  get outputs(): StopStreamCall__Outputs {
    return new StopStreamCall__Outputs(this);
  }
}

export class StopStreamCall__Inputs {
  _call: StopStreamCall;

  constructor(call: StopStreamCall) {
    this._call = call;
  }

  get loanId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class StopStreamCall__Outputs {
  _call: StopStreamCall;

  constructor(call: StopStreamCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawContractCall extends ethereum.Call {
  get inputs(): WithdrawContractCall__Inputs {
    return new WithdrawContractCall__Inputs(this);
  }

  get outputs(): WithdrawContractCall__Outputs {
    return new WithdrawContractCall__Outputs(this);
  }
}

export class WithdrawContractCall__Inputs {
  _call: WithdrawContractCall;

  constructor(call: WithdrawContractCall) {
    this._call = call;
  }
}

export class WithdrawContractCall__Outputs {
  _call: WithdrawContractCall;

  constructor(call: WithdrawContractCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}
