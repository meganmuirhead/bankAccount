import {BankAccount} from "./BankAccount";
import {TransactionOrigin} from "../common/enums/TransactionOrigin";
import { Transaction} from "../common/interfaces/Transaction";

export class CheckingAccount extends BankAccount{
    constructor(public currentDate: Date) {
        super();
        this.balance = 1000;
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
    }


    depositMoney(amount: number, description: string): Transaction {
        return undefined;
    }

    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
        return undefined;
    }
    interestRateCalculateor(){

        let interest, total, rate;
        rate = .01;
        interest = this.balance * rate / 12;

        total = this.balance + interest;
        return total;
    }
}


