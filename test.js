console.log('Hello world');
//let age = 28;

//let age = prompt("enter your age: ")
//let name = prompt("Enter your name: ")
//let lastName = prompt("Enter your last name: ")
//console.log (name)
//console.log (age)
//console.log (lastName)
//document.write ( "<h1" +name + "</h1>");


function getAge (){
    let age = prompt ("Enter your age: ");
    console.log (age);
    alert("I need variables to process your age. Your age is : " + age)};
    function getName (){

    let firstName = prompt ("Enter your first name: ");
    alert(firstName + " is my first name.");
    console.log (firstName)};

    function getInfo(){
    getAge();
    getName();    
    }

//multiply by three
function multiplyThree(x,y){
    let result=number*3;
    console.log(result);
    return result; 
}

multiplyThree (5);
multiplyThree(3);

document.write(` <p> <b> Result: </b> ${multiplyThree(5)} </p>`);