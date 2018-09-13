const customerMap = (customers)=> {
  return customers.reduce((memo, customer)=> {
    memo[customer.id] = customer.name
    return memo
  }, {})
}
  
const salesMap = (sales)=> {
  return sales.reduce((memo, sale)=> {
    if(typeof memo[sale.customerId] === 'undefined') {
      memo[sale.customerId] = 0;
    }
  memo[sale.customerId] += sale.total
  return memo
  }, {})
}


const customerSalesMap = (customers, sales)=> {
  const _customerMap = customerMap(customers);
  const _salesMap = salesMap(sales);

  return Object.keys(_customerMap).reduce((memo, customerId)=> {
    memo[_customerMap[customerId]] = _salesMap[customerId] || 0
    return memo
  }, {})
}
    




module.exports = {
  customerMap,
  salesMap,
  customerSalesMap
}