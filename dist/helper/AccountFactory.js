"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccountFactory {
    static getCheckingAccountObject(currentDate) {
        throw new Error("You need to implement this :)");
    }
    static getSavingsAccountObject(currentDate) {
        throw new Error("You need to implement this :)");
    }
    //static doesn't belong to the instance of the class, it belongs to the "cookie cutter"
    // let newAccount = AccountFactory.getCheckingAccountObject(new Date());
    // Math.random
    static getRetirementAccountObject(currentDate, accountHolderBirthDate) {
        throw new Error("You need to implement this :)");
    }
}
exports.AccountFactory = AccountFactory;
// let myNewAccountFactory = new AccountFactory();
//# sourceMappingURL=AccountFactory.js.map