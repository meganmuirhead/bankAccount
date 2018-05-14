import {BankAccount} from "./BankAccount";
import { TransactionOrigin} from "../common/enums/TransactionOrigin";
import { Transaction } from "../common/interfaces/Transaction";

export class SavingsAccount extends BankAccount {
    constructor(currentDate: Date) {
        super();
        this.balance = 10000;
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
        console.log(this.currentDate);
        let numberOfMonths = this.monthDiff(dateClone, this.currentDate);
        console.log(numberOfMonths);
        dateClone.setDate(1);

        for(let i = 0; i < numberOfMonths; i++){
            console.log(i)
            dateClone.setMonth(dateClone.getMonth() + 1);
            let interestTot = this.interestRateCalculateor();
            this.balance += interestTot;
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
            console.log(trans);
        }
        console.log(this.balance);
        console.log("history length:", this.accountHistory.length);
    }


    withdrawWithInsufficaientFunds() {
        if (this.balance <= this.balance) {
            throw new Error('Insufficient funds');
        }
    }
    interestRateCalculateor(): number{

        let interest: number, total: number, rate: number;
        rate = .02;
        interest = this.balance * rate / 12;

        return interest;
    }

    depositMoney(amount: number, description: string): Transaction {
        return undefined;
    }

    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
        return undefined;
    }

//     if (currentDate => 30 && Tranactio) {}
// }

//
// let savings = new SavingsAccount(1/1/2018);
// savings.withdrawMoney(7, TransactionOrigin.BRANCH)
}