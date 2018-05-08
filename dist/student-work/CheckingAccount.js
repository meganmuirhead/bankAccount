"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BankAccount_1 = require("./BankAccount");
const TransactionOrigin_1 = require("../common/enums/TransactionOrigin");
class CheckingAccount extends BankAccount_1.BankAccount {
}
exports.CheckingAccount = CheckingAccount;
let checking = new CheckingAccount();
checking.withdrawMoney(1, '', TransactionOrigin_1.TransactionOrigin.BRANCH);
//# sourceMappingURL=CheckingAccount.js.map