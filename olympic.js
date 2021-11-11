if(5 > 3){
    console.log("FIVE IS GREATER THAN THREE")
}

string = "cat"
if(string.length === 3){
    console.log("LENGTH OF CAT IS THREE")
}

if("CAT" === "DOG"){
    console.log("CAT EQUALS DOG")}
    
else if ("CAT" !== "DOG"){
    console.log("NOT THE SAME")
}

var person = {
    name: "Bobby",
    age: 12
  }
  
if (person.age >= 18){
    console.log("is allowed to go to the movie")
    } else {
    console.log("is not allowed to go to the movie")
  }
  
if (person.name[0] == "B"){
    console.log("is allowed to go to the movie")
  }
  
if (person.name[0] == "B" && person.age >= 18) {
    console.log("is allowed to go to the movie")
  } else {
    console.log("is not allowed to go to the movie")
  }
  
  
if (1 === "1") {
    console.log("strict")
  } else if (1 == "1"){
    console.log("loose")
  } else {
    console.log("not equal at all")
  }
  
if (1 <= 2 && 2 == 4){
    console.log("yes")
  } else {
    console.log("no")
  }
  
if (typeof dog === "string"){
    console.log("string")
  } else {
    console.log("not a string")
  }
  
if (typeof true === "boolean"){
    console.log("boolean")
  } else {
    console.log("not boolean")
  } 
  
if (typeof myVar != "undefined"){
    console.log("defined")
  } else {
    console.log("undefined")
  }
  
if ("s" > 12){
    console.log("s is greater than 12")
  } else {
    console.log("not sure")
  }
  
var myNum = 15
  if (myNum % 2 == 0){
    console.log("even")
  } else {
    console.log("odd")
  }