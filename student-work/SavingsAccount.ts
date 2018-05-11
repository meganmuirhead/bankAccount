import {BankAccount} from "./BankAccount";
import { TransactionOrigin} from "../common/enums/TransactionOrigin";
import { Transaction } from "../common/interfaces/Transaction";

export class SavingsAccount extends BankAccount {
    constructor(currentDate: Date) {
        super();
        this.balance = 10000;

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

//     if (currentDate => 30 && Tranactio) {}
// }

//
// let savings = new SavingsAccount(1/1/2018);
// savings.withdrawMoney(7, TransactionOrigin.BRANCH)
}