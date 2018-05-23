import { BankAccount } from "./BankAccount";
import { Transaction} from "../common/interfaces/Transaction";
import { TransactionOrigin } from "../common/enums/TransactionOrigin";
import * as moment from "moment";

export class RetirementAccount extends BankAccount{
    constructor(public currentDate: Date, public accountHolderBirthDate: Date) {
        super();
        this.balance = 100000;
        this.accountHistory = [];
    }

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

        for(let i = 0; i < numberOfMonths; i++){
            dateClone.setMonth(dateClone.getMonth() + 1);
            let interestTot = this.interestRateCalculator();
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
    interestRateCalculator(): number{

        let interest: number, total: number, rate: number;
        rate = .03;
        interest = this.balance * rate / 12;

        return interest;
    }
    depositMoney(amount: number, description: string): Transaction {
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
//todo check for age over or under 60
    //todo add fee if they are under 60, 60 no fee, 59 gets the fee

    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
        let retirementWithdraw = < Transaction > {
            amount: -amount,
            transactionDate: this.currentDate,
            description: description
        };
        if (amount > this.balance){
            retirementWithdraw.success = false;
            retirementWithdraw.resultBalance = this.balance;
            retirementWithdraw.errorMessage = "Insuffient Funds";
            return retirementWithdraw;
        }
        if (!this.isOverSixty()){
            amount = amount + (amount * .1);
        }
        this.balance = this.balance - amount;
        retirementWithdraw.success = true;
        retirementWithdraw.resultBalance = this.balance;
        retirementWithdraw.errorMessage = "";
        this.accountHistory.push(retirementWithdraw);
        return retirementWithdraw;
    }
    isOverSixty(): boolean{
        let duration = moment.duration(moment(this.currentDate).diff(this.accountHolderBirthDate));
        console.log(duration.asYears());
        if (duration.asYears() < 60) {
            return false;
        }
     return true;
    }

}