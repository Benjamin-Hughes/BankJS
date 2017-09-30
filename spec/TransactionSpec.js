
describe("Transaction", function() {
  var deposit;
  var withdrawl;
  var date = Date.now();
  var type = 'credit';

  beforeEach(function() {
    deposit = new Transaction(date, type);
  });

  it('Stores the transaction date', function() {
    expect(deposit.date).toEqual(date);
  });

  it('Has a type', function() {
    expect(deposit.type).toEqual('credit');
  });
});
