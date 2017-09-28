

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
});
