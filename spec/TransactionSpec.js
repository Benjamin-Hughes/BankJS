
describe("Transaction", function() {
  var deposit;
  var withdrawl;
  var date = Date.now();

  beforeEach(function() {
    deposit = new Transaction(date);
  });

  it('Stores the transaction date', function() {
    expect(deposit.date).toEqual(date);
  });
});
