"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BankAccount_1 = require("./BankAccount");
class RetirementAccount extends BankAccount_1.BankAccount {
    constructor(currentDate) {
        super();
        this.currentDate = currentDate;
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
        this.currentDate.setDate(this.currentDate.getDate() + numberOfDays);
        let numberOfMonths = this.monthDiff(dateClone, this.currentDate);
        dateClone.setDate(1);
        for (let i = 0; i < numberOfMonths; i++) {
            dateClone.setMonth(dateClone.getMonth() + 1);
            let interestTot = this.interestRateCalculator();
            interestTot = Number.parseFloat(interestTot.toFixed(2));
            this.balance += interestTot;
            this.balance = Number.parseFloat(this.balance.toFixed(2));
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
    interestRateCalculator() {
        let interest, total, rate;
        rate = .03;
        interest = this.balance * rate / 12;
        return interest;
    }
    depositMoney(amount, description) {
        let retirementAccountTransaction = {
            success: true,
            amount: amount,
            resultBalance: this.balance + amount,
            transactionDate: this.currentDate,
            description: description,
            errorMessage: "" // errorMessage will be an empty string when success is true
        };
        this.balance = this.balance + amount;
        this.accountHistory.push(retirementAccountTransaction);
        return retirementAccountTransaction;
    }
    withdrawMoney(amount, description, transactionOrigin) {
        let retirementWithdraw = {
            amount: -amount,
            transactionDate: this.currentDate,
            description: description
        };
        if (amount > this.balance) {
            retirementWithdraw.success = false;
            retirementWithdraw.resultBalance = this.balance;
            retirementWithdraw.errorMessage = "Insuffient Funds";
            return retirementWithdraw;
        }
        this.balance = this.balance - amount;
        retirementWithdraw.success = true;
        retirementWithdraw.resultBalance = this.balance;
        retirementWithdraw.errorMessage = "";
        this.accountHistory.push(retirementWithdraw);
        return retirementWithdraw;
    }
}
exports.RetirementAccount = RetirementAccount;
//# sourceMappingURL=RetirementAccount.js.map