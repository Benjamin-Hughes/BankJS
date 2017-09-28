

describe('Account', function() {
var myAccount;

  beforeEach(function() {
    myAccount = new Account('Ben');
  });

  it('Has an owner', function() {
    expect(myAccount.owner()).toEqual('Ben');
  });
});
