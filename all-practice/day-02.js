const newObj = [ 1,2,3,4,5,6,7,8,9]
for(let index = 0; index < newObj.length; index++){
  // console.log(newObj[index])
}

const newArr = { 
  name:"kmato",
  email:"kmato@gmail.com",
  age:21
}
for(let key in newArr){
  // console.log(key)
  // console.log(newArr[key])
}

function newObject(){
  for(let i = 1; i <= 10; i++){
   if( i == 4){
    // console.log(i + ""+ " is lucky number:")
    break;
   }
  //  console.log(i)
  }
}
// newObject()



const user = [ 1,2,3,4,5,6,7,8,9,10]

for(const obj of user){
  if(obj == 4){
    // console.log(obj + "is detected")
    continue;
  }
  // console.log(obj)
  
}

const newUser = user.reduce((acc,val1) =>{
 
 return acc + val1
},0);

// console.log(newUser)

const objReduce = [1,2,3,4,5,6]
const newReduce = objReduce.reduce((accumulated, currentValue) => {
  // console.log(`accumulated value is ${accumulated} and current value is${currentValue}`)
  return accumulated * currentValue

},1)
// console.log(newReduce)

const barTender = [ 5,6,7,8,]
const newBarTender = barTender.reduce((a , b) =>{
  // console.log("value of accumulated is" + a)
  // console.log("value of currentValue is" + b)
  return a + b
},4)
// console.log(newBarTender)


let i = 1;

do{
  // console.log(i);
  if(i == 4){
    // console.log("4 is detected")
    break;
  }
  i++;
} while(i<=10);


let j = 0
while(j < 10){
  j++
  
  if(j == 5){
    // console.log("5 is lucky number");
    continue;
  }
  // console.log(j);
 
}

const randomNum = [4,5,6,6,4,32,7,76,35,676,]
for(const value of randomNum){
  // console.log(value)
}


const objRandomNum ={
  a:1,
  b:2,
  c:3,
  d:4,
  e:5,
}

// for(const key in objRandomNum){
//   
//   console.log(key,objRandomNum[key])
// }

// for(const key of Object.keys(objRandomNum)){
//   console.log(key,objRandomNum[key])
// }

// for(const value of Object.values (objRandomNum)){
//   console.log(value)
// }

// for(const [key,value] of Object.entries(objRandomNum)){
//   console.log(key,value)
// }

const greeting = "hello kmato"
for(const greet of greeting){
  // console.log(greet)
}

const myMap = new Map()
myMap.set('IN','INDIA')
myMap.set('USA','UNITED STATE OF AMERICA')
myMap.set('KOR','KORIA')
myMap.set('JPN','JAPAN')
for(const [key,value] of myMap){
    // console.log(key,value)
}


const map = new Map()
map.set('name','kmato')
map.set('userId','kmato@197')
map.set('age','21')
map.set('address','bhiwandi')

for(const [key,value] of map){
  // console.log(key,value)
}



const foreachArray = ['javascript','python','cpp','ruby','html']

foreachArray.forEach(function(item){
  console.log(item)
})

foreachArray.forEach((item) =>{
  console.log(item)
})


const heroName = {
  1:"ironMan",
  2:"spiderMan",
  3:"thor",
  4:"hulk",
  5:"antMan",
  6:"hellBound",
}
for(const [key,value] of Object.entries (heroName) ){
  console.log(key,value)
}