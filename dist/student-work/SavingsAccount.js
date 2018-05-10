"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BankAccount_1 = require("./BankAccount");
class SavingsAccount extends BankAccount_1.BankAccount {
    constructor(currentDate) {
        super();
        this.balance = 10000;
    }
}
exports.SavingsAccount = SavingsAccount;
//# sourceMappingURL=SavingsAccount.js.map