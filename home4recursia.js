/*function degree(x,n) {
    return (n === 1) ? x : (x * degree(x, n - 1));
};
alert(degree(2,4));*/


/*function gcd (x,y) {
if (y > x) return gcd(y,x); 

 if (!y) return x;
    return gcd(y, x % y);
}
console.log (gcd(8,40));*/


/*function maxNumber(n){
    if(n === 0){ 
        return 0;
    }
    else{
      let remaind = n % 10
      return Math.max(remaind, maxNumber((n-remaind)*1e-1));
    }
  }
  console.log(maxNumber(427160));*/


  /*function simpleNumber (n){
    if (n === 1) {
      return false;
    } 
    else if (n === 2) {
      return true;
    } else {
      for (let x = 2; x < n; x++) {
        if (n % x === 0) {
          return false;
        }
      }
    return true;
    }
  }
console.log(simpleNumber(7));*/


function fact(num)
 {
    let b = 2;
 let factors =1;
 if(num===b){
      return b;
    }
    while (num > b){
      if(num % b == 0)
   {
   factors +=','+b;
   }
 b++;
   }
   factors +=','+num;
   return factors;
 }
 console.log(fact(18))


/*function fibonacci(n) {
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

alert( fibonacci(4) ); */




