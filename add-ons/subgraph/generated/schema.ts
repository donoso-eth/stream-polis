// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class LoanOffer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("loanMaxAmount", Value.fromBigInt(BigInt.zero()));
    this.set("loanMinAmount", Value.fromBigInt(BigInt.zero()));
    this.set("fee", Value.fromBigInt(BigInt.zero()));
    this.set("superToken", Value.fromString(""));
    this.set("collateralShare", Value.fromBigInt(BigInt.zero()));
    this.set("maxDuration", Value.fromBigInt(BigInt.zero()));
    this.set("loanProvider", Value.fromString(""));
    this.set("status", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save LoanOffer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save LoanOffer entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("LoanOffer", id.toString(), this);
    }
  }

  static load(id: string): LoanOffer | null {
    return changetype<LoanOffer | null>(store.get("LoanOffer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get loanMaxAmount(): BigInt {
    let value = this.get("loanMaxAmount");
    return value!.toBigInt();
  }

  set loanMaxAmount(value: BigInt) {
    this.set("loanMaxAmount", Value.fromBigInt(value));
  }

  get loanMinAmount(): BigInt {
    let value = this.get("loanMinAmount");
    return value!.toBigInt();
  }

  set loanMinAmount(value: BigInt) {
    this.set("loanMinAmount", Value.fromBigInt(value));
  }

  get fee(): BigInt {
    let value = this.get("fee");
    return value!.toBigInt();
  }

  set fee(value: BigInt) {
    this.set("fee", Value.fromBigInt(value));
  }

  get superToken(): string {
    let value = this.get("superToken");
    return value!.toString();
  }

  set superToken(value: string) {
    this.set("superToken", Value.fromString(value));
  }

  get collateralShare(): BigInt {
    let value = this.get("collateralShare");
    return value!.toBigInt();
  }

  set collateralShare(value: BigInt) {
    this.set("collateralShare", Value.fromBigInt(value));
  }

  get maxDuration(): BigInt {
    let value = this.get("maxDuration");
    return value!.toBigInt();
  }

  set maxDuration(value: BigInt) {
    this.set("maxDuration", Value.fromBigInt(value));
  }

  get loanProvider(): string {
    let value = this.get("loanProvider");
    return value!.toString();
  }

  set loanProvider(value: string) {
    this.set("loanProvider", Value.fromString(value));
  }

  get status(): BigInt {
    let value = this.get("status");
    return value!.toBigInt();
  }

  set status(value: BigInt) {
    this.set("status", Value.fromBigInt(value));
  }
}

export class LoanDemand extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("loanAmount", Value.fromBigInt(BigInt.zero()));
    this.set("fee", Value.fromBigInt(BigInt.zero()));
    this.set("superToken", Value.fromString(""));
    this.set("collateralShare", Value.fromBigInt(BigInt.zero()));
    this.set("duration", Value.fromBigInt(BigInt.zero()));
    this.set("loanTaker", Value.fromString(""));
    this.set("status", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save LoanDemand entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save LoanDemand entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("LoanDemand", id.toString(), this);
    }
  }

  static load(id: string): LoanDemand | null {
    return changetype<LoanDemand | null>(store.get("LoanDemand", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get loanAmount(): BigInt {
    let value = this.get("loanAmount");
    return value!.toBigInt();
  }

  set loanAmount(value: BigInt) {
    this.set("loanAmount", Value.fromBigInt(value));
  }

  get fee(): BigInt {
    let value = this.get("fee");
    return value!.toBigInt();
  }

  set fee(value: BigInt) {
    this.set("fee", Value.fromBigInt(value));
  }

  get superToken(): string {
    let value = this.get("superToken");
    return value!.toString();
  }

  set superToken(value: string) {
    this.set("superToken", Value.fromString(value));
  }

  get collateralShare(): BigInt {
    let value = this.get("collateralShare");
    return value!.toBigInt();
  }

  set collateralShare(value: BigInt) {
    this.set("collateralShare", Value.fromBigInt(value));
  }

  get duration(): BigInt {
    let value = this.get("duration");
    return value!.toBigInt();
  }

  set duration(value: BigInt) {
    this.set("duration", Value.fromBigInt(value));
  }

  get loanTaker(): string {
    let value = this.get("loanTaker");
    return value!.toString();
  }

  set loanTaker(value: string) {
    this.set("loanTaker", Value.fromString(value));
  }

  get status(): BigInt {
    let value = this.get("status");
    return value!.toBigInt();
  }

  set status(value: BigInt) {
    this.set("status", Value.fromBigInt(value));
  }
}

export class LoanTraded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("loanTotalAmount", Value.fromBigInt(BigInt.zero()));
    this.set("collateral", Value.fromBigInt(BigInt.zero()));
    this.set("initTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("flowRate", Value.fromBigInt(BigInt.zero()));
    this.set("status", Value.fromBigInt(BigInt.zero()));
    this.set("collateralShare", Value.fromBigInt(BigInt.zero()));
    this.set("loanTaker", Value.fromString(""));
    this.set("loanProvider", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save LoanTraded entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save LoanTraded entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("LoanTraded", id.toString(), this);
    }
  }

  static load(id: string): LoanTraded | null {
    return changetype<LoanTraded | null>(store.get("LoanTraded", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get loanTotalAmount(): BigInt {
    let value = this.get("loanTotalAmount");
    return value!.toBigInt();
  }

  set loanTotalAmount(value: BigInt) {
    this.set("loanTotalAmount", Value.fromBigInt(value));
  }

  get collateral(): BigInt {
    let value = this.get("collateral");
    return value!.toBigInt();
  }

  set collateral(value: BigInt) {
    this.set("collateral", Value.fromBigInt(value));
  }

  get initTimestamp(): BigInt {
    let value = this.get("initTimestamp");
    return value!.toBigInt();
  }

  set initTimestamp(value: BigInt) {
    this.set("initTimestamp", Value.fromBigInt(value));
  }

  get flowRate(): BigInt {
    let value = this.get("flowRate");
    return value!.toBigInt();
  }

  set flowRate(value: BigInt) {
    this.set("flowRate", Value.fromBigInt(value));
  }

  get status(): BigInt {
    let value = this.get("status");
    return value!.toBigInt();
  }

  set status(value: BigInt) {
    this.set("status", Value.fromBigInt(value));
  }

  get collateralShare(): BigInt {
    let value = this.get("collateralShare");
    return value!.toBigInt();
  }

  set collateralShare(value: BigInt) {
    this.set("collateralShare", Value.fromBigInt(value));
  }

  get loanTaker(): string {
    let value = this.get("loanTaker");
    return value!.toString();
  }

  set loanTaker(value: string) {
    this.set("loanTaker", Value.fromString(value));
  }

  get loanProvider(): string {
    let value = this.get("loanProvider");
    return value!.toString();
  }

  set loanProvider(value: string) {
    this.set("loanProvider", Value.fromString(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save User entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get offersCreated(): Array<string> | null {
    let value = this.get("offersCreated");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set offersCreated(value: Array<string> | null) {
    if (!value) {
      this.unset("offersCreated");
    } else {
      this.set("offersCreated", Value.fromStringArray(<Array<string>>value));
    }
  }

  get demandsCreated(): Array<string> | null {
    let value = this.get("demandsCreated");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set demandsCreated(value: Array<string> | null) {
    if (!value) {
      this.unset("demandsCreated");
    } else {
      this.set("demandsCreated", Value.fromStringArray(<Array<string>>value));
    }
  }

  get loansTraded(): Array<string> | null {
    let value = this.get("loansTraded");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set loansTraded(value: Array<string> | null) {
    if (!value) {
      this.unset("loansTraded");
    } else {
      this.set("loansTraded", Value.fromStringArray(<Array<string>>value));
    }
  }
}
