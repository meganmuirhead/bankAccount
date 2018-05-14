import {BankAccount} from "./BankAccount";
import {TransactionOrigin} from "../common/enums/TransactionOrigin";
import { Transaction} from "../common/interfaces/Transaction";

export class CheckingAccount extends BankAccount{
    constructor(public currentDate: Date) {
        super();
        this.balance = 1000;
        this.accountHistory = [];
    }

    accountHolderBirthDate: Date;

    monthDiff(d1: Date, d2: Date): number {
        let months: number;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        return months <= 0 ? 0 : months;
    }

    advanceDate(numberOfDays: number) {
        let dateClone = new Date(this.currentDate.getTime());

        console.log(dateClone);

        this.currentDate.setDate(this.currentDate.getDate() + numberOfDays);
        let numberOfMonths = this.monthDiff(dateClone, this.currentDate);
        dateClone.setDate(1);

        for(let i = 0; i < numberOfMonths; i++){
            dateClone.setMonth(dateClone.getMonth() + 1);
            let interestTot = this.interestRateCalculateor();
            interestTot = Number.parseFloat(interestTot.toFixed(2))
            this.balance += interestTot;
            this.balance = Number.parseFloat(this.balance.toFixed(2));
            // trans is of type Transaction .. interface kind of blah
            let trans = {
                success: true,
                amount: interestTot, // amount will be positive for deposits and negative for withdrawals
                resultBalance: this.balance, // resultBalance will be unchanged from the previous balance when success is false
                transactionDate: dateClone,
                description: "Interest Payment",
                errorMessage: "" // errorMessage will be an empty string when success is true
            };
            this.accountHistory.push(trans);
        }

    }


    depositMoney(amount: number, description: string): Transaction {
        let checkingAccountTransaction = {
            success: true,
            amount: amount,
            resultBalance: this.balance + amount,
            transactionDate: this.currentDate,
            description: description,
            errorMessage: "" // errorMessage will be an empty string when success is true
        };
        this.balance = this.balance + amount;
        this.accountHistory.push(checkingAccountTransaction);
        return checkingAccountTransaction;
    }

    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
        let checkingWithdrawMoney = < Transaction > {
            amount: -amount,
            transactionDate: this.currentDate,
            description: description,
        };

        if(amount >= this.balance){
            checkingWithdrawMoney.success = false;
            checkingWithdrawMoney.resultBalance = this.balance;
            checkingWithdrawMoney.errorMessage = "Insuffient Funds";
            return checkingWithdrawMoney;
        }
        this.balance = this.balance - amount;
        checkingWithdrawMoney.success = true;
        checkingWithdrawMoney.resultBalance = this.balance;
        checkingWithdrawMoney.errorMessage= "";
        this.accountHistory.push(checkingWithdrawMoney);

        return checkingWithdrawMoney;
    }
    interestRateCalculateor(): number{

        let interest: number, total: number, rate: number;
        rate = .01;
        interest = this.balance * rate / 12;

        return interest;
    }
}


