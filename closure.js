/*It is a special feature in which inner function has access to
outer variable even after outerfunction has executed...
*/
function Fun1(){
    const name="Hello Narender";
    function Fun2(){
        console.log(name);
    }return Fun2;
}
/*-----------------------------------------*/
const myFun=Fun1();
console.log(myFun())

function  sum1(x){
    function sum2(y){
        return x+y;
    }return sum2;
}
const result=sum1(3);
console.log(result(2))
/*---------
OUTPUT:
Hello Narender
5
------------------------------*/
