function Account(name) {
  this.name = name;
  this.balance = 0;
  this.transactions = [];
}

Account.prototype = {
  owner: function() {
    return this.name;
  },
  addFunds: function(amount) {
    this.balance += amount;
    var transaction = new Transaction(Date.now());
    this.transactions.push(transaction);
  },
  withdrawFunds: function(amount) {
    this.balance -= amount;
  },

};
