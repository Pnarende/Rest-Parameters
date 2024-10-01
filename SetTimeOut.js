//Syntax
//let timeOut=setTimeOut(fun(),delay,args1,args2)
setTimeout
function Hello(){
    console.log("Hello")
}
let timeout=setTimeout(Hello,10000);
console.log(timeout);
/*---------------------------------------------------*/
/*ASYNCHRONOUS FUNCTION*/
/*setTimerOut() function in asynchronous function doesnot stop other function execution.
*/
setTimeout(() => {
    console.log("this is the first message");
  }, 5000);
  setTimeout(() => {
    console.log("this is the second message");
  }, 3000);
  setTimeout(() => {
    console.log("this is the third message");
  }, 1000);
  
  // Output:
  
  // this is the third message
  // this is the second message
  // this is the first message
  /*----------------------------------------------------------*/
  function Hello(){
    console.log("Hello Message One......");
  }
  console.log(setTimeout(Hello,2000))
  console.log(setTimeout(Hello,3000))
  console.log(setTimeout(Hello,4000))
  console.log(setTimeout(Hello,10000))
  /*
Hello Message One......
Hello Message One......
Hello Message One......
Hello Message One......
*/

/*----------------------------------------------------*/
/*--------
OVERAL OUTPUT:
this is the third message
Hello Message One......
this is the second message
Hello Message One......
Hello Message One......
this is the first message
Hello Message One......
Hello Message One......---------------------*/
