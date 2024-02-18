const obj = {
  userName: "Imran",
  userAge: 21,
  userAddress: "Bhiwandi"
}

for(const key in obj){
  // console.log(`value of key is ${obj[key]}`)
}
  
const newArray= [1,2,3,4,5,6,7,8,9,10]
for(let index = 0; index < newArray.length; index++){
  // console.log(`the value of ${index} index is`);
  const value = newArray[index]
  // console.log(value)
}

const newObj ={
  userName:"kmato",
  userAge:21,
  userAddress:"bhiwandi",
  userEmail:"kmato@gmail.com"
}

for( const key in newObj){
  // console.log(key)
  // console.log(newObj[key])
}

for(let i = 1; i<=10; i++){
  for(let j= 1; j<=10; j++){
    // console.log(`${i} x ${j} = ${i*j}`)
  }
}




let oldArray = ["KHAN","IMRAN","KHAN","MATO"]
for(let index = 0; index < oldArray.length; index++){
  // console.log(index)
  let newArr = oldArray[index]
  // console.log(newArr)
}

let oldObj ={
  firstName:"Imran",
  middleName:"Ahmad",
  lastName:"Khan"
}
for(let key in oldObj){
  let newObject = oldObj[key]
  // console.log(newObject)
}


//break function practice

const diffObject = [1,2,3,4,5,6,7,8,9,10];


for( let index = 0; index < diffObject.length; index++){
  //  diffObject[index]
  if(index == 4){
    // console.log('FIVE IS LUCKY NUMBER')
    break;
  }
  // console.log(diffObject[index])
}


// contive function practice
for(let index = 0; index < diffObject.length; index++){
  if(index == 4){
    // console.log("five is detected")
    continue;
  }
  // console.log(diffObject[index])
}

// arrow function with implicit return 
const addNumber = (num1,num2) => (num1 + num2)
// console.log(addNumber(4,5))


// use case of .this keyword

const allObj = {
  name:"kmato",
  email:"kmato197",
  age:21,
  welcomeMessage: function (){
          // console.log(`here the userName: ${this.name} and user email: ${this.email} and user age: ${this.age}`)
  }
}
allObj.welcomeMessage()


function user(){
  let name = "imran"
  console.log(this.name)//it will show the undefined 
  console.log(name)//it will give the proper value in the return
};
// user()


const objUser = {
  userName : "hellbound",
  userEmail : "bhiwandi@gmail.com",
  userAge : 21,
  userDetail : function(){
    console.log(`user name is ${this.userName} user address is ${this.userEmail} user age is ${this.userAge}`)
  }
}
// objUser.userDetail()


const i = 10
const j = 20
//if statement
if(i < j){//condition checking (true)
  //  console.log(`${i} is less than ${j}`)
}

// if else statement 

if(i>=j){ //condition checking (false)
 console.log(`${i} is greater than ${j} but equal to ${j}`);
}else{
//  console.log(`condition false `);
}

//if else-if with for loop
for(let i = 1; i <= 12; i++){
  console.log(i)
  if(i == 1){
    console.log("january")
  }else if(i == 2){
    console.log("february")
  }
  else if(i == 3){
    console.log("march")
  }
  else if(i == 4){
    console.log("april")
  }
  else if(i == 5){
    console.log("may")
  }
  else if(i == 6){
    console.log("jun")
  }
  else if(i == 7){
    console.log("july")
  }
  else if(i == 8){
    console.log("august")
  }
  else if(i == 9){
    console.log("september")
  }
  else if(i == 10){
    console.log("october")
  }
  else if(i == 11){
    console.log("november")
  }
  else if(i == 12){
    console.log("december")
  }
  else{
    console.log("Currently month is not available in this calender")
  }
}

//switch statement with for loop




//  for(let i = 1; i <= 7; i++)
 {  
switch (i) {
  case 1:
    console.log("sunday")
    break;
  case 2:
     console.log("monday")
    break;
  case 3: 
  console.log("tuesday")
    break;
  case 4: 
  console.log("wednusday")
    break;
  case 5: 
  console.log("thursday")
    break;
  case 6: 
  console.log("friday")
    break;
  case 7: 
  console.log("saturday")
    break;
 
  default:
   console.log("value are not added")
    break;

  }

  }