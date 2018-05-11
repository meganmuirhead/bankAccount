"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BankAccount_1 = require("./BankAccount");
class CheckingAccount extends BankAccount_1.BankAccount {
    constructor(currentDate) {
        super();
        this.currentDate = currentDate;
        this.balance = 1000;
        this.accountHistory = [];
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
        dateClone.setDate(1);
        for (let i = 0; i <= numberOfMonths; i++) {
            dateClone.setMonth(dateClone.getMonth() + 1);
            let interestTot = this.interestRateCalculateor();
            this.balance += interestTot;
            // trans is of type Transaction .. interface kind of blah
            let trans = {
                success: true,
                amount: interestTot,
                resultBalance: this.balance,
                transactionDate: dateClone,
                description: "Interest Payment",
                errorMessage: "" // errorMessage will be an empty string when success is true
            };
            this.accountHistory.push(trans);
        }
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
        return interest;
    }
}
exports.CheckingAccount = CheckingAccount;
//# sourceMappingURL=CheckingAccount.js.map