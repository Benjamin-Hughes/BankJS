var Account = (function() {
  function AnAccount(name) {
    this.name = name;
    this.balance = 0;
    this.transactions = [];
    this.createTransaction = function() {
      var transaction = new Transaction(createDate());
      this.transactions.push(transaction);
    };
    function createDate() {
      var rawDate = new Date();
      var date = rawDate.toUTCString();
      return date;
    }
  }

  AnAccount.prototype = {
    owner: function() {
      return this.name;
    },
    addFunds: function(amount) {
      this.balance += amount;
      this.createTransaction();
    },
    withdrawFunds: function(amount) {
      this.balance -= amount;
      this.createTransaction();
    },

  };

  return AnAccount;
}());
