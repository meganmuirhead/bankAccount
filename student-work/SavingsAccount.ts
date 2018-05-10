import {BankAccount} from "./BankAccount";
import { TransactionOrigin} from "../common/enums/TransactionOrigin";

export class SavingsAccount extends BankAccount {
    constructor(currentDate: Date) {
        super();
        this.balance = 10000;

    }

//     if (currentDate => 30 && Tranactio) {}
// }

//
// let savings = new SavingsAccount(1/1/2018);
// savings.withdrawMoney(7, TransactionOrigin.BRANCH)
}