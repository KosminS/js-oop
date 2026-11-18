class BankAccount {
  #balance;

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
    }
  }

  showBalance() {
    console.log(this.owner, this.#balance);
  }
}

const account = new BankAccount("Софія", 1000);
account.deposit(500);
account.withdraw(300);
account.showBalance();