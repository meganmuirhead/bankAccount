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

        this.currentDate.setDate(this.currentDate.getDate() + numberOfDays);
        let numberOfMonths = this.monthDiff(dateClone, this.currentDate);
        dateClone.setDate(1);

        for(let i = 0; i <= numberOfMonths; i++){
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
            this.accountHistory.push(trans)
            
        }
    }


    depositMoney(amount: number, description: string): Transaction {
        return undefined;
    }

    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
        return undefined;
    }
    interestRateCalculateor(): number{

        let interest: number, total: number, rate: number;
        rate = .01;
        interest = this.balance * rate / 12;

        return interest;
    }
}


