"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BankAccount_1 = require("./BankAccount");
class RetirementAccount extends BankAccount_1.BankAccount {
    constructor(currentDate) {
        super();
        this.balance = 100000;
    }
    advanceDate(numberOfDays) {
    }
    depositMoney(amount, description) {
        return undefined;
    }
    withdrawMoney(amount, description, transactionOrigin) {
        return undefined;
    }
}
exports.RetirementAccount = RetirementAccount;
//# sourceMappingURL=RetirementAccount.js.map