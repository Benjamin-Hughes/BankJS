function Account(name) {
  this.name = name;
}

Account.prototype = {
  owner: function() {
    return this.name;
  },

};
