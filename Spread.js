function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
    console.log(sum(...numbers));
  // Expected output: 6
  
  console.log(sum.apply(null, numbers));
  // Expected output: 6
  /*-------------------------------------------*/
  function myFun(a,b,c){
    console.log("Spread Syntax..");
    return a*b*c;
  }
 let ans= myFun(10,20,30);
 console.log(ans);
  /**-------------------------------------------------- */
  function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction.apply(null, args);

/*-------------------------------------------------------------------- */
//spread replaces myFunction.apply(null, args) with myFunction(...args)
function myFunction(x, y, z) {}
const args1 = [0, 1, 2];
myFunction(...args);