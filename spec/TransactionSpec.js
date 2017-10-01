
describe("Transaction", function() {
  var deposit;
  var withdrawl;
  var date = Date.now();
  var type = 'credit';
  var amount = 100;
  var balance = amount;

  beforeEach(function() {
    deposit = new Transaction(date, type, amount, balance);
  });

  it('Stores the transaction date', function() {
    expect(deposit.date).toEqual(date);
  });

  it('Stores the transaction type', function() {
    expect(deposit.type).toEqual('credit');
  });

  it('Stores the transaction amount', function() {
    expect(deposit.amount).toEqual(100);
  });

  it('Strores the latest account balance', function() {
    expect(deposit.balance).toEqual(100);
  });
});
