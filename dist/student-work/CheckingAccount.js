"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BankAccount_1 = require("./BankAccount");
class CheckingAccount extends BankAccount_1.BankAccount {
    constructor(currentDate) {
        super();
        this.currentDate = currentDate;
        this.balance = 1000;
    }
    monthDiff(d1, d2) {
        let months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        return months <= 0 ? 0 : months;
    }
    advanceDate(numberOfDays) {
        let dateClone = new Date(this.currentDate.getTime());
        this.currentDate.setDate(this.currentDate.getDate() + numberOfDays);
        let numberOfMonths = this.monthDiff(dateClone, this.currentDate);
    }
    depositMoney(amount, description) {
        return undefined;
    }
    withdrawMoney(amount, description, transactionOrigin) {
        return undefined;
    }
    interestRateCalculateor() {
        let interest, total, rate;
        rate = .01;
        interest = this.balance * rate / 12;
        total = this.balance + interest;
        return total;
    }
}
exports.CheckingAccount = CheckingAccount;
//# sourceMappingURL=CheckingAccount.js.map