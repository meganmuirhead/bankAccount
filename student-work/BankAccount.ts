import { Account } from "../common/interfaces/Account";
import { Transaction } from "../common/interfaces/Transaction";
import {TransactionOrigin } from "../common/enums/TransactionOrigin";

export class BankAccount implements Account {
    currentDate: Date;
    balance: number;
    accountHistory: Transaction[];
    accountHolderBirthDate?: Date;
    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
        throw new Error("Method not implemented.");
    }
    depositMoney(amount: number, description: string): Transaction {
        throw new Error("Method not implemented.");
    }
    advanceDate(numberOfDays: number) {
        throw new Error("Method not implemented.");
    }
}