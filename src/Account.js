function Account(name) {
  this.name = name;
  this.balance = 0;
}

Account.prototype = {
  owner: function() {
    return this.name;
  },
  addFunds: function(amount) {
    this.balance += amount;
  },
  withdrawFunds: function(amount) {
    this.balance -= amount;
  },

};
