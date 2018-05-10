import { Account } from "../common/interfaces/Account";
import { Transaction } from "../common/interfaces/Transaction";
import {TransactionOrigin } from "../common/enums/TransactionOrigin";

export abstract class BankAccount implements Account {
    currentDate: Date;
    balance: number;
    accountHistory: Transaction[];
    accountHolderBirthDate?: Date;

    abstract advanceDate(numberOfDays: number);

    abstract depositMoney(amount: number, description: string): Transaction;

    abstract withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction;

}