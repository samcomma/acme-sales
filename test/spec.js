const expect = require('chai').expect;
const acme = require('../acme')
const { customerMap, salesMap, customerSalesMap } = acme;


const customers = [
  { id: 1, name: 'moe' },
  { id: 2, name: 'larry' },
  { id: 3, name: 'curly' }
];

const sales = [
  { customerId: 1, total: 2 },
  { customerId: 1, total: 3 },
  { customerId: 2, total: 8 },
];


describe('acme assignment', ()=> {
  describe('customerMap', ()=> {
    it('returns customer map', ()=> {
      expect(customerMap(customers)).to.eql({
        1: 'moe',
        2: 'larry',
        3: 'curly'
      });
    });
  });
  describe('salesMap', ()=> {
    it('returns sales map', ()=> {
      expect(salesMap(sales)).to.eql({
        1: 5,
        2: 8,
      });
    });
  });
  describe('customerSalesMap', ()=> {
    it('returns customer Sales map', ()=> {
      expect(customerSalesMap(customers, sales)).to.eql({
        moe : 5,
        larry: 8,
        curly: 0
      });
    });
  });
});