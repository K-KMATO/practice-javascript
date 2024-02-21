const userDetails = {}
userDetails.firstName = "Imran"
userDetails.middleName = "ahmad"
userDetails.lastName = "khan"
userDetails.age = 21
userDetails.email = "kmato197@gmail.com"
// console.log(userDetails.firstName)
// console.log(userDetails["middleName"])
// userDetails.userCity = "bhiwandi"
delete userDetails.firstName
for(const obj in userDetails){
  // console.log(obj,userDetails[obj])
}



let detail = ""
for(let x in userDetails){
  detail += userDetails[x]
  // console.log(typeof detail)
}
// console.log(detail)



//nested array and object

const myObj = {
  name:"kmato",
  age:21,
  course:[
    {
       subjet:"js",
       time:"3 hours",
       fees:3999
    },
    {
       subjet:"api devlopment",
       time:"5 hours",
       fees:5999
    },
    {
       subjet:"python",
       time:"2 hours",
       fees:999
    },
    
  ]
}

for(let i in myObj.course){
  // console.log(i,myObj.course)
  //  console.log(i,myObj)
  // console.log(myObj.course[i])
}



const person = {
  firstName: "imran",
  lastName: " khan",
  fullName : function(){
    return (this.firstName + this.lastName ).toUpperCase()
  }
}
// console.log(person.fullName())
// const x = Object.keys(person)
// const y = Object.value(person)
// console.log(x)
// console.log(y)


// const get = {
//   name :"imran",
//   age : 21,
//   language :"en",
//   get lang(){
//     return this.language
//   }
// }

const setObj ={
  name:"",
  set user(newName){
      this.name = newName
  }
}

setObj.user = "imran"
// console.log(setObj.name)



// access fullName as a function: person.fullName().
const newFunction ={
  fName:"imran",
  lName:"khan",
  fullName: function(){
    return this.fName + this.lName
  }
}
console.log(newFunction.fullName())

// access fullName as a property: person.fullName.

const anotherNewFunction ={
  firstName:"mato",
  lastName:"khan",
  get fullName (){
      return this.firstName + this.lastName
  }
}
console.log(anotherNewFunction.fullName)


// getter 
const newObject ={
  name:"kmato",
  language:"english",
  get lang(){
    return this.language.toUpperCase()
  }
}
console.log(newObject.lang)

//setter

const anotherObject ={
  name:"kmato",
  language:"",
  set setLang (lang){
    this.language = lang.toUpperCase()

  }
}

anotherObject.setLang = "eng"
console.log(anotherObject.language)