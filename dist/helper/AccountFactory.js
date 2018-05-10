"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CheckingAccount_1 = require("../student-work/CheckingAccount");
const SavingsAccount_1 = require("../student-work/SavingsAccount");
const RetirementAccount_1 = require("../student-work/RetirementAccount");
class AccountFactory {
    static getCheckingAccountObject(currentDate) {
        return new CheckingAccount_1.CheckingAccount(currentDate);
    }
    static getSavingsAccountObject(currentDate) {
        return new SavingsAccount_1.SavingsAccount(currentDate);
    }
    //static doesn't belong to the instance of the class, it belongs to the "cookie cutter"
    // let newAccount = AccountFactory.getCheckingAccountObject(new Date());
    // Math.random
    static getRetirementAccountObject(currentDate, accountHolderBirthDate) {
        return new RetirementAccount_1.RetirementAccount(currentDate);
    }
}
exports.AccountFactory = AccountFactory;
// let myNewAccountFactory = new AccountFactory();
//# sourceMappingURL=AccountFactory.js.map