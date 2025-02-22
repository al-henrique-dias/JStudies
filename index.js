//console.log(`Hello world\nI like pizza`);//displays something at console
//window.alert(`This is an alert\nI like pizza!`);//displays something at the user screen through browser (over everything)

/**
 * documente works like a class and has a lot of methods to work with
 * getElementById(elementId: String) returns an HTMLElement
 */
document.getElementById("title").textContent = "Hello world";
document.getElementById("text").textContent = "I like pizza";

/**
 * variables:
 * we declare them with let
 * JS relies in variable names, their type is determined by their current value (and each variable name is unique)
 */
let fullName = "Olata Ue"
let age = 21;
let price = 10.99;
let online = true
console.log(`Your name is ${fullName}\nname is a`, typeof fullName);
console.log(`You are ${age} years old\nage is a`, typeof age);//to format console text and display in-conde values, use `${}` (do not use "" or '')
console.log(`The price is $${price}\nprice is a`, typeof price);
console.log(`Online: ${online}\nThis statement is a`, typeof online);
document.getElementById("ex1").textContent = `My name is ${fullName}`;
document.getElementById("ex2").textContent = `I am ${age} years old`;
document.getElementById("ex3").textContent = `Online: ${online}`;

/*
 * tip for arithmetic operators: you can make exponents with x**y (x to the power of y)
 * it also works as operand assignment x **= y (x gets x to the power of y)
 * exponents are also priority for equations (over multiplications, divisions and modulo, but parenthesis beats all)
*/

//user input (browser prompts and page elements)
let username;
//username = window.prompt("What's your username?"); console.log(username);//goes over page, like alert. window prompts also always return Strings.
document.getElementById("submitUser").onclick = function(){//functions can return their content as events, no return keyword needed (also, this function is nameless, function is a keyword)
    //onclick is an element event that fires when the element is clicked upon (mouse left)
    username = document.getElementById("username").value;//value is the element's content
    console.log(`new user detected: ${username}`);
    document.getElementById("title").textContent = `Hello ${username}`;
}

//type conversion (test it)
let x;
x = Number(x);//NaN means Not a Number
console.log(x, typeof x);
let y;
y = String(y);
console.log(y, typeof y);
let z;
z = Boolean(z);//returns true: it has content or it's true, false: has no content or it's false
console.log(z, typeof z);

//constants
const PI = 3.14159;//we usually capitalize primitive datatypes consts
let r, c;//radius and circumference
//r = Number(window.prompt("Enter circle radius:"));//we must do this conversion, window prompts return Strings (as a lot of user input methods)
//c = 2*PI*r; console.log(c);
document.getElementById("submitRadius").onclick = () => {//nameless functions can be used with => (they are called arrow functions, more later)
    r = document.getElementById("radius").value;
    c = 2*PI*r;
    document.getElementById("circumference").textContent = `This circle circumference is ${c}\n`;
}

//a page that counts
const more = document.getElementById("more");
const reset = document.getElementById("reset");
const less = document.getElementById("less");
const counter = document.getElementById("counter");

let count = 0;

more.onclick = () => {
    count++;
    counter.textContent = count;
}
reset.onclick = () => {
    count = 0;
    counter.textContent = count;
}
less.onclick = () => {
    count--;
    counter.textContent = count;
}

//Math object
console.log(Math.PI);
x = 3.83;
y = 2;
z = -1;
console.log(Math.round(x));//rounds to nearest
console.log(Math.floor(x));//rounds to low
console.log(Math.ceil(x));//rounds to high
console.log(Math.trunc(x));//removes decimals
console.log(Math.pow(x, y));//x to the power of y
console.log(Math.sqrt(x));//square root
console.log(Math.log(x));//logarithm
console.log(Math.sin(x));//sin
console.log(Math.cos(x));//cosin
console.log(Math.tan(x));//tangent
console.log(Math.abs(z));//absolute/modulus (no positive or negative)
console.log(Math.max(x, y, z));//maximum value
console.log(Math.min(x, y, z));//minimum value
console.log(Math.random());//pseudo-random double value between 0 (inclusive) and 1 (exclusive)
//Random Number Generator
const max = 20;
const min = 1;
console.log(Math.floor(Math.random()*(max-min))+min);//with the next formula, you can chage the minimum and maximum random values
const randBtn = document.getElementById("randBtn");
const randNum = document.getElementById("randNum");

randBtn.onclick = () => {
    randNum.textContent = Math.round(Math.random()*(max-min))+min;
}

//if statements
const ageInput = document.getElementById("ageInput");
const ageSubmit = document.getElementById("ageSubmit");
const ageInspector = document.getElementById("ageInspect");

ageSubmit.onclick = () => {
    if(ageInput.value>=18){
        ageInspector.textContent = "Feel free to browse";
        console.log("YOU ARE OLD");
    }else if(ageInput.value<0){
        ageInspector.textContent = "Invalid age";
        console.log("WHAT?");
    }else if(ageInput.value==""){
        ageInspector.textContent = "Please, enter your age"
        console.log("nothing here");
    }else{
        ageInspector.textContent = "Sorry, I can't give credit, come back when you're a little\n...\nOLDER";
        console.log("WHAT A BABY");
    }
}
//verify checked state of HTML checkbox or radio button
const happyChecker = document.getElementById("happyChecker");
const happyBtn = document.getElementById("happyBtn");
const mehBtn = document.getElementById("mehBtn");
const sadBtn = document.getElementById("sadBtn");
const happySubmit = document.getElementById("happySubmit");
const happyResult = document.getElementById("happyResult");
const moodResult = document.getElementById("moodResult");

happySubmit.onclick = () => {
    if(happyChecker.checked)//.checked returns a true statement if the box is checked
        happyResult.textContent = "Heck yeah! Let's be happy!";
    else
        happyResult.textContent = "Oh, please! Let's be happy, check the button above!";
    if(happyBtn.checked)//for radio, you check on every button
        moodResult.textContent = "Go on with happiness!";
    else if(mehBtn.checked)
        moodResult.textContent = "You're almost there! Don't give up!";
    else if(sadBtn.checked)
        moodResult.textContent = "Don't worry, be happy!";
    else
        moodResult.textContent = "So, how does it make you feel?"
}

/**
 * ternary operator
 * assign a value based on a condition:
 * condition ? codeIfTrue : codeIfFalse;
 * asking "isThisTrue ? ifYesThen : ifNoThen;"
 */
age = 21;
console.log(age >= 18 ? "You're an adult" : "You're a minor");

//switch
let day = 1;

switch(day){//here it verifies cases where values are equal to the scope variable attributed value
    case 1 :
        console.log("It is sunday");
        break;//when a case is true, it will cascade execute all the other cases, break prevents that by exiting the iteration
    case 2 :
        console.log("It is monday");
        break;
    case 3 :
        console.log("It is tuesday");
        break;
    case 4 :
        console.log("It is wednesday");
        break;
    case 5 :
        console.log("It is thursday");
        break;
    case 6 :
        console.log("It is friday");
        break;
    case 7 :
        console.log("It is saturday");
        break;
    default ://if no case is true, default is executed
        console.log(`${day} it's not a day`);
}

let testScore = 92;
let letterGrade;

switch(true){//here it verifies if the case condition matches to the scope logic
    case testScore >= 90 :
        letterGrade = 'A';
        break;
    case testScore >= 80 :
        letterGrade = 'B';
        break;
    case testScore >= 70 :
        letterGrade = 'C';
        break;
    case testScore >= 60 :
        letterGrade = 'D';
        break;
    default :
        letterGrade = 'F';
}
console.log(letterGrade);

