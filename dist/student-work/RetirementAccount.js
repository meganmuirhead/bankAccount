"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BankAccount_1 = require("./BankAccount");
class RetirementAccount extends BankAccount_1.BankAccount {
    constructor(currentDate) {
        super();
        this.balance = 100000;
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
        console.log(dateClone);
        this.currentDate.setDate(this.currentDate.getDate() + numberOfDays);
        console.log(this.currentDate);
        let numberOfMonths = this.monthDiff(dateClone, this.currentDate);
        console.log(numberOfMonths);
        dateClone.setDate(1);
        for (let i = 0; i < numberOfMonths; i++) {
            console.log(i);
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
            console.log(trans);
        }
        console.log(this.balance);
        console.log("history length:", this.accountHistory.length);
    }
    interestRateCalculateor() {
        let interest, total, rate;
        rate = .03;
        interest = this.balance * rate / 12;
        return interest;
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