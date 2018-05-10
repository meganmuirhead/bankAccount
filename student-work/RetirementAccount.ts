import { BankAccount } from "./BankAccount";
import { Transaction} from "../common/interfaces/Transaction";
import { TransactionOrigin } from "../common/enums/TransactionOrigin";

export class RetirementAccount extends BankAccount{
    constructor(currentDate: Date) {
        super();
        this.balance = 100000;

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