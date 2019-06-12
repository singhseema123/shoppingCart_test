
//Unit Tests
describe('addCart', function() {
  it('should return the sum of two whole numbers', function() {
    expect(addCart(2, 4)).to.equal(6);
  });

  it('should return the sum of two decimal numbers', function() {
    expect(addCart(2.5, 1.5)).to.equal(4);
  });
});

//Functional Tests
describe('price click', function () {

  beforeEach(function () {
    total = 0;
  });

  it('should add a price on click of Yahtzee', function () {

    $('.add-to-cart').trigger('click');
    expect($('.add-to-cart').attr('data-price')).to.equal('7.99'); 
  });

  it('should have the Yahtzee passed as Name', function () {

    $('.add-to-cart').trigger('click');
    expect($('.add-to-cart').attr('data-name')).to.equal('Yahtzee');
  });

});