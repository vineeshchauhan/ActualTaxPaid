var purchaseAndTaxApril = [
  {
      "itemno": 1,
      "type": "Fuel",
      "description": "Car Petrol",
      "price": 2000,
      "tax": 1000,
      "bill": "link",
      "comment": "Just a comment",
      "total": 1000
  },
  {
      "itemno": 2,
      "type": "Fuel",
      "description": "Car Petrol",
      "price": 2000,
      "tax": 1000,
      "bill": "link",
      "comment": "Just a comment",
      "total": 1000
  },
  {
      "itemno": 3,
      "type": "Fuel",
      "description": "Car Petrol",
      "price": 2000,
      "tax": 1000,
      "bill": "link",
      "comment": "Just a comment",
      "total": 1000
  },
  {
      "itemno": 4,
      "type": "Fuel",
      "description": "Car Petrol",
      "price": 2000,
      "tax": 1000,
      "bill": "link",
      "comment": "Just a comment",
      "total": 1000
  },
  {
      "itemno": 5,
      "type": "Fuel",
      "description": "Car Petrol",
      "price": 2000,
      "tax": 1000,
      "bill": "link",
      "comment": "Just a comment",
      "total": 1000
  },
  {
      "itemno": 6,
      "type": "Fuel",
      "description": "Car Petrol",
      "price": 2000,
      "tax": 1000,
      "bill": "link",
      "comment": "Just a comment",
      "total": 1000
  },
  {
      "itemno": 7,
      "type": "Fuel",
      "description": "Car Petrol",
      "price": 2000,
      "tax": 1000,
      "bill": "link",
      "comment": "Just a comment",
      "total": 1000
  },
  {
      "itemno": 8,
      "type": "Fuel",
      "description": "Car Petrol",
      "price": 2000,
      "tax": 1000,
      "bill": "link",
      "comment": "Just a comment",
      "total": 1000
  },
  {
      "itemno": 9,
      "type": "Fuel",
      "description": "Car Petrol",
      "price": 2000,
      "tax": 1000,
      "bill": "link",
      "comment": "Just a comment",
      "total": 1000
  },
  {
      "itemno": 10,
      "type": "Fuel",
      "description": "Car Petrol",
      "price": 2000,
      "tax": 1000,
      "bill": "link",
      "comment": "Just a comment",
      "total": 1000
  },
  {
      "itemno": 11,
      "type": "Fuel",
      "description": "Car Petrol",
      "price": 2000,
      "tax": 1000,
      "bill": "link",
      "comment": "Just a comment",
      "total": 1000
  },
  {
      "itemno": 12,
      "type": "Fuel",
      "description": "Car Petrol",
      "price": 2000,
      "tax": 1000,
      "bill": "link",
      "comment": "Just a comment",
      "total": 1000
  },
  {
      "itemno": 13,
      "type": "Fuel",
      "description": "Car Petrol",
      "price": 2000,
      "tax": 1000,
      "bill": "link",
      "comment": "Just a comment",
      "total": 1000
  },
  {
      "itemno": 14,
      "type": "Fuel",
      "description": "Car Petrol",
      "price": 2000,
      "tax": 1000,
      "bill": "link",
      "comment": "Just a comment",
      "total": 1000
  },
  {
      "itemno": 15,
      "type": "Fuel",
      "description": "Car Petrol",
      "price": 2000,
      "tax": 1000,
      "bill": "link",
      "comment": "Just a comment",
      "total": 1000
  },
  {
      "itemno": 16,
      "type": "Fuel",
      "description": "Car Petrol",
      "price": 2000,
      "tax": 1000,
      "bill": "link",
      "comment": "Just a comment",
      "total": 1000
  },
  {
      "itemno": 17,
      "type": "Fuel",
      "description": "Car Petrol",
      "price": 2000,
      "tax": 1000,
      "bill": "link",
      "comment": "Just a comment",
      "total": 1000
  },
  {
      "itemno": 18,
      "type": "Fuel",
      "description": "Car Petrol",
      "price": 2000,
      "tax": 1000,
      "bill": "link",
      "comment": "Just a comment",
      "total": 1000
  },
  {
      "itemno": 19,
      "type": "Fuel",
      "description": "Car Petrol",
      "price": 2000,
      "tax": 1000,
      "bill": "link",
      "comment": "Just a comment",
      "total": 1000
  },
  {
      "itemno": 20,
      "type": "Fuel",
      "description": "Car Petrol",
      "price": 2000,
      "tax": 1000,
      "bill": "link",
      "comment": "Just a comment",
      "total": 1000
  },
  {
      "itemno": 21,
      "type": "Fuel",
      "description": "Car Petrol",
      "price": 2000,
      "tax": 1000,
      "bill": "link",
      "comment": "Just a comment",
      "total": 1000
  },
  {
      "itemno": 22,
      "type": "Fuel",
      "description": "Car Petrol",
      "price": 2000,
      "tax": 1000,
      "bill": "link",
      "comment": "Just a comment",
      "total": 1000
  }
]
var salaryAndTax = [{
  "totalSalary" : "30,00,000",
  "directTax" : "6,00,000",
  "directTaxPerc" : "20%",
  "netSalary" : "24,00,000",
  "indirectTax" : getIndirectTax(),
  "indirectTaxPerc" : "10%",
  "totalTax" : "5,00,000",
  "totalTaxPerc" : "16.6%",
}];

function getIndirectTax(){
  let totalIndirectTax = 0;
  for(let i = 0; i < purchaseAndTaxApril.length ; i++){
    totalIndirectTax = totalIndirectTax + purchaseAndTaxApril[i].price;
  }
  return totalIndirectTax;
}