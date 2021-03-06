"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BankAccount_1 = require("./BankAccount");
const TransactionOrigin_1 = require("../common/enums/TransactionOrigin");
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
        if (this.checkWebAndPhone()) {
            savingWithdrawMoney.success = false;
            savingWithdrawMoney.resultBalance = this.balance;
            // console.log(this.balance);
            savingWithdrawMoney.errorMessage = "Can't transfer more than six times via phone/web per month.";
            return savingWithdrawMoney;
        }
        this.balance = this.balance - amount;
        savingWithdrawMoney.success = true;
        savingWithdrawMoney.resultBalance = this.balance;
        savingWithdrawMoney.errorMessage = "";
        savingWithdrawMoney.transactionOrigin = transactionOrigin;
        this.accountHistory.push(savingWithdrawMoney);
        // console.log(this.balance);
        return savingWithdrawMoney;
    }
    checkWebAndPhone() {
        // console.log("checking web and phone");
        //todo right now counter is being reset to zero
        //todo set counter as a property
        //todo need to reset counter for each calendar month
        let counter = 0;
        for (var i = 0; i < this.accountHistory.length; i++) {
            let transaction = this.accountHistory[i];
            // console.log(transaction.transactionDate, transaction.transactionOrigin);
            if (transaction.transactionOrigin === TransactionOrigin_1.TransactionOrigin.WEB ||
                transaction.transactionOrigin === TransactionOrigin_1.TransactionOrigin.PHONE) {
                if (this.currentDate.getMonth() === transaction.transactionDate.getMonth() &&
                    this.currentDate.getFullYear() === transaction.transactionDate.getFullYear()) {
                    // console.log("encomenting counter");
                    counter++;
                }
            }
        }
        // console.log(counter);
        if (counter <= 6) {
            // console.log("returning false");
            return false;
        }
        // console.log("returning true");
        return true;
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