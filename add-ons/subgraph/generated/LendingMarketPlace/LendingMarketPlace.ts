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

  get collateralShare(): BigInt {
    return this[3].toBigInt();
  }

  get flowRate(): BigInt {
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

  get status(): i32 {
    return this[8].toI32();
  }

  get loanTaker(): Address {
    return this[9].toAddress();
  }

  get loanProvider(): Address {
    return this[10].toAddress();
  }

  get superToken(): Address {
    return this[11].toAddress();
  }

  get loanContract(): Address {
    return this[12].toAddress();
  }
}

export class LendingMarketPlace extends ethereum.SmartContract {
  static bind(address: Address): LendingMarketPlace {
    return new LendingMarketPlace("LendingMarketPlace", address);
  }
}
