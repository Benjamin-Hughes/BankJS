

describe('Account', function() {
var myAccount;

  beforeEach(function() {
    myAccount = new Account('Ben');
  });

  it('Has an owner', function() {
    expect(myAccount.owner()).toEqual('Ben');
  });

  it('Allows the user to deposit money', function() {
    myAccount.addFunds(100);
    expect(myAccount.balance).toEqual(100);
  });

  it('Allows the user to withdraw money', function() {
    myAccount.addFunds(100);
    myAccount.withdrawFunds(50);
    expect(myAccount.balance).toEqual(50);
  });

  it('Stores a history of transactions', function() {
    // myAccount.addFunds(100);
    // expect(myAccount.transactions).toBeGreaterThan(0);
    pending('Awaiting transaction object implimentation');
  });
});
