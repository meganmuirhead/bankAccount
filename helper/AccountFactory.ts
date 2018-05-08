import {Account} from "../common/interfaces/Account";
import { CheckingAccount } from '../student-work/CheckingAccount'
import {SavingsAccount} from "../student-work/SavingsAccount";
import {RetirementAccount} from "../student-work/RetirementAccount";


export class AccountFactory {

    static getCheckingAccountObject(currentDate: Date): Account {
        return new CheckingAccount;
    }

    static getSavingsAccountObject(currentDate: Date): Account {
        return new SavingsAccount();
    }
//static doesn't belong to the instance of the class, it belongs to the "cookie cutter"

    // let newAccount = AccountFactory.getCheckingAccountObject(new Date());
    // Math.random


    static getRetirementAccountObject(currentDate: Date, accountHolderBirthDate: Date): Account {
        return new RetirementAccount();
    }

}


// let myNewAccountFactory = new AccountFactory();

