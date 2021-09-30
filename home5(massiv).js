const listShop = [
  { name: 'Макароны', sum: 2, purchase: false },
  { name: 'Каша', sum: 1, purchase: true },
  { name: 'Хлеб', sum: 3, purchase: true },
  { name: 'Яйца', sum: 10, purchase: false },
  { name: 'Яблоко', sum: 5, purchase: false }
];
 const listShopSort = [...listShop];
 listShopSort.sort ((a,b) => {
   if (a.purchase === true && b.purchase === false){
     return 1;
   }
   else if (a.purchase === false && b.purchase === true){
     return -1;
   }
   return 0;
 })

 console.log(listShopSort);



 let addProduct = (name = '', sum = 0, arr = []) => {
  let res = [...arr];
  if (res.find(item => item.name === name)) {
      for (let i = 0; i < res.length; i++) 
          if (name === res[i].name) {
              res[i].sum += sum;
          }
  } else {
      res.push({
              name,
              sum,
              purchase: false,
      }) 
  }

  return res; 
}

const newList = [...listShop];                   

console.log(addProduct('Каша', 2, newList));       

console.log(addProduct('Молоко', 2, newList));   



const purchaseProduct = (arr = [], name = '') => {
  let res = [...arr];
  for (let i = 0; i < res.length; i++) {
      if (name === res[i].name) {
          res[i].purchase = true;
      }
  }

  return res;
}

console.log(purchaseProduct(listShop, 'Яблоко'));     
              
