/*Rest parameters allows a function to accept multiplenumber/Indefinite number of arguments....
*/
function  restParameters1(...parameter){
    console.log("Rest Parameters-1....Example....");
    let sum=0;
    for(let  i  of parameter){
        sum=sum+i;
    }
    console.log(sum)

}
console.log(restParameters1(10,20,30,40));
// Output:
// Rest Parameters-1....Example....
// 100
// undefined


function  restParameters2(a,b,...parameters){
    console.log("Rest Parameters Example-2....Example.....");
    console.log("a",a);
    console.log("b",b);
    console.log("Rest Parameters.:",parameters);
    
}
console.log(restParameters2("One","Two","Three","Four","Five","Six"));
  // Console Output:
  // a, one
  // b, two
  // manyMoreArgs, ["three", "four", "five", "six"]
  