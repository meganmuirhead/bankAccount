"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BankAccount_1 = require("./BankAccount");
class SavingsAccount extends BankAccount_1.BankAccount {
    constructor(currentDate) {
        super();
        this.currentDate = currentDate;
        this.balance = 10000;
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
    withdrawWithInsufficaientFunds() {
        if (this.balance <= this.balance) {
            throw new Error('Insufficient funds');
        }
    }
    depositMoney(amount, description) {
        let savingAccountTransaction = {
            success: true,
            amount: amount,
            resultBalance: this.balance + amount,
            transactionDate: this.currentDate,
            description: description,
            errorMessage: "" // errorMessage will be an empty string when success is true
        };
        this.balance = this.balance + amount;
        this.accountHistory.push(savingAccountTransaction);
        return savingAccountTransaction;
    }
    withdrawMoney(amount, description, transactionOrigin) {
        let savingWithdrawMoney = {
            amount: -amount,
            transactionDate: this.currentDate,
            description: description,
        };
        if (amount >= this.balance) {
            savingWithdrawMoney.success = false;
            savingWithdrawMoney.resultBalance = this.balance;
            savingWithdrawMoney.errorMessage = "Insuffient Funds";
            return savingWithdrawMoney;
        }
        this.balance = this.balance - amount;
        savingWithdrawMoney.success = true;
        savingWithdrawMoney.resultBalance = this.balance;
        savingWithdrawMoney.errorMessage = "";
        this.accountHistory.push(savingWithdrawMoney);
        return savingWithdrawMoney;
    }
    interestRateCalculator() {
        let interest, total, rate;
        rate = .02;
        interest = this.balance * rate / 12;
        return interest;
    }
}
exports.SavingsAccount = SavingsAccount;
//# sourceMappingURL=SavingsAccount.js.map