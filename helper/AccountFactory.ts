import {Account} from "../common/interfaces/Account";

export class AccountFactory {

    static getCheckingAccountObject(currentDate: Date): Account {
        throw new Error("You need to implement this :)");
    }

    static getSavingsAccountObject(currentDate: Date): Account {
        throw new Error("You need to implement this :)");
    }
//static doesn't belong to the instance of the class, it belongs to the "cookie cutter"

    // let newAccount = AccountFactory.getCheckingAccountObject(new Date());
    // Math.random


    static getRetirementAccountObject(currentDate: Date, accountHolderBirthDate: Date): Account {
        throw new Error("You need to implement this :)");
    }

}


// let myNewAccountFactory = new AccountFactory();

