import {BankAccount} from "./BankAccount";
import {TransactionOrigin} from "../common/enums/TransactionOrigin";
import { Transaction} from "../common/interfaces/Transaction";

export class CheckingAccount extends BankAccount{
    constructor(public currentDate: Date) {
        super();
        this.balance = 1000;
    }

    accountHolderBirthDate: Date;

    advanceDate(numberOfDays: number) {
    }

    depositMoney(amount: number, description: string): Transaction {
        return undefined;
    }

    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
        return undefined;
    }

}


