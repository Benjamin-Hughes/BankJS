var Transaction = (function() {
  function aTransaction(date, type, amount, balance) {
    this.date = date;
    this.type = type;
    this.amount = amount;
    this.balance = balance;
  }
  return aTransaction;
}());
