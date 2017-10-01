var Transaction = (function() {
  function aTransaction(date, type, amount) {
    this.date = date;
    this.type = type;
    this.amount = amount;
  }
  return aTransaction;
}());
