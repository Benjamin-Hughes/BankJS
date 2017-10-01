var Account = (function() {
  function AnAccount(name) {
    this.name = name;
    this.balance = 0;
    this.transactions = [];
  }

  AnAccount.prototype = {
    owner: function() {
      return this.name;
    },
    addFunds: function(amount) {
      this.balance += amount;
      var transaction = new Transaction(this.createDate);
      console.log(transaction);
      this.transactions.push(transaction);
    },
    withdrawFunds: function(amount) {
      this.balance -= amount;
    },
    createDate: function() {
      var rawDate = new Date();
      var date = rawDate.toUTCString();
    },

  };

  return AnAccount;
}());
