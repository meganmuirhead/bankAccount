import {BankAccount} from "./BankAccount";
import {TransactionOrigin} from "../common/enums/TransactionOrigin";

export class CheckingAccount extends BankAccount{

}

let checking = new CheckingAccount();
checking.withdrawMoney(1, '', TransactionOrigin.BRANCH);