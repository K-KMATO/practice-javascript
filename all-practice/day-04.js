//iife (immediatly invoked function expression)

//named iife function
(function newFunction(){
  console.log("Named:iife Function are created")
})();
// without named iife function 
(function(){
  console.log("Withoud:named iife function are created")
})();
//with arrow iife function
(()=>{
  console.log("iife Function are created with arrow")
})();
//iife function are created with function parameter
((gamer)=>{
  console.log(gamer)
})("welcome to gamer World")

// javascript getter and setter
const obj ={cunter:0}
Object.defineProperty(obj,"reset",{
  get : function() {this.cunter = 0}
});
Object.defineProperty(obj, "increment",{
  get : function() {this.cunter++}
});
Object.defineProperty(obj, "decrement",{
 get: function() {this.cunter--}
});
Object.defineProperty(obj, "add",{
  set : function(value) {this.cunter += value}
});
Object.defineProperty(obj,"substact",{
  set:function(value) {this.cunter -= value}
});
obj.reset;
obj.add=5;
obj.substract= 1;
obj.increment;
obj.decrement;
console.log(obj.cunter)


const anotherOject= [1,9,8,4,5,6]
console.log(anotherOject.slice())

console.log(anotherOject.splice(0,3))
console.log(anotherOject)
console.log(anotherOject.slice(0))

//getter
const newUser={
  name:"kmato",
  language:"eng",
  get lang(){
    return this.language.toUpperCase()
  }
}
console.log(newUser.lang)

// setter
const oldUser={
  name:"imran",
  language:"",
  set setLang(lang){
    this.language = lang.toUpperCase()
  }
}
oldUser.setLang="eng"
console.log(oldUser.language)

//scoping
let a =10
const b = 20
var c = 30
function globalVar(){
  console.log(a,b,c)
}
globalVar()

function localVar(){
    let d = 20
    const e = 30
    var f = 40

}
// console.log(d,e,f)
                   //local variable not possible to access outside of the block
// varibale()



function newFunction(){
  let user = "kmato"
  function otherFunction(){
    let otherUser = "imran"
    console.log(user)//it will show the output of user
    console.log(otherUser)// it will show the output of otherUser
  }
  // console.log(otherUser)//it will show the error becouse function of block
  otherFunction()
}
newFunction()


console.log(addNum(9))//it is possible in case of function 
function addNum(value){
  return value +1
}
addNum()

// console.log(addNumber(9))//it will be show the error because functin are holding constant variable value
const addNumber = function addAnotherNum(value){
  return value +1
}
console.log(addNumber(7))//it will be executed 


