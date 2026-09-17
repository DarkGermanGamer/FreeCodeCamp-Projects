class BankAccount {
  static transactionTypes = {
    deposit: "deposit",
    withdraw: "withdraw"
  }
  
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  /**
   * Returns the current account balance
   * @returns {string}: Formatted string, displaying the current balance
   */
  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  /**
   * Deposits specified amount to the account
   * @param {int}: Amount to be deposited to the account
   * @returns {string}: Formatted string, displaying the result of the deposit
   */
  deposit(amount) {
    let message;

    if(amount > 0) {
      this.balance += amount;
      this.transactions.push({
        type: BankAccount.transactionTypes.deposit,
        amount: amount
      });

      message = `Successfully deposited $${amount}. New balance: $${this.balance}`;
    }
    else {
      message = `Deposit amount must be greater than zero.`;
    }

    return message;
  }

  /**
   * Returns a list of all deposits
   * @returns {string}: Formatted string, displaying all deposits to the account
   */
  listAllDeposits() {
    let depositMsg = 'Deposits: '

    for(let trans of this.transactions) {
      if(trans.type == BankAccount.transactionTypes.deposit) {
        depositMsg += `${trans.amount},`;
      }
    }

    return depositMsg.slice(0,-1);
  }

  /**
   * Returns a list of all withdrawls
   * @returns {string}: Formatted string, displaying all withdrawls from the account
   */
  listAllWithdrawals() {
    let withdrawalMsg = 'Withdrawals: '

    for(let trans of this.transactions) {
      if(trans.type == BankAccount.transactionTypes.withdraw) {
        withdrawalMsg += `${trans.amount},`;
      }
    }

    return withdrawalMsg.slice(0,-1);
  }

  /**
   * Withdraws specified amount from the account
   * @param {int}: Amount to be withdrawn from the account
   * @returns {string}: Formatted string, displaying the result of the withdrawl
   */
  withdraw(amount) {
    let message;

    if(amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push({
        type: BankAccount.transactionTypes.withdraw,
        amount: amount
      });

      message = `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    }
    else {
      message = `Insufficient balance or invalid amount.`;
    }

    return message;
  }
}

const myAccount = new BankAccount();
myAccount.deposit(255);
myAccount.withdraw(123);
myAccount.withdraw(58);
myAccount.deposit(42);
myAccount.deposit(32);

console.log(myAccount.checkBalance());
console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());
