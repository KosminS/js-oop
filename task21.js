class Wallet {
  #balance = 0;

  addMoney(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  spendMoney(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const wallet = new Wallet();

wallet.addMoney(1000);
wallet.spendMoney(350);
console.log(wallet.getBalance());