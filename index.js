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

//String methods (text manipulation)
username = "BroCode  ";
console.log(username);
console.log(username.charAt(1));//get character at index
console.log(username.indexOf('o'));//get index of first character occurence
console.log(username.lastIndexOf('o'));//get index of last character occurence
console.log(username.length);//get string lenght of characters
console.log(username.trim());//removes initial or final whitespaces
console.log(username.toUpperCase());//makes all of the characters uppercase (capital letters)
console.log(username.toLowerCase());//makes all of the characters lowercase
console.log(username.repeat(3));//repeats the String content
console.log(username.startsWith(' '));//verifies if it starts with that character (returns boolean)
console.log(username.endsWith(' '));//verifies if it ends with that character (returns boolean)
console.log(username.replace('o', 'a'));//replaces the first String occurence with the second parameter
console.log(username.replaceAll('o', "uh"));//replaces all of the Strings occurence with the second parameter
console.log(username.padStart(15, 'AAAAAA'));//pads the String start with the given String, 'till it reaches the specified size (if the padding exceeds the specified size, it is trimmed, but the given string is not)
console.log(username.padEnd(15, 'AAAAAA'));//pads the String end with the given String, 'till it reaches the specified size (if the padding exceeds the specified size, it is trimmed, but the given string is not)
console.log(`${username.slice(0, 3)}\n${username.slice(3)}`);//String slicing (creates substring from a portion of another String)

//method chaining (calling methods in one continuous line of code)(applying methods to results of methods)
username = " BroCodE  ";
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLocaleLowerCase();
console.log(username);

/**
 * strict operator
 * == comparison (compares values)
 * === strict comparison (compares values and datatypes)
 * != inequality operator
 * !== strict inequality operator
*/
//const PI = 3.14159;
//PI=="3.14159" -> same value? : true
if(PI==="3.14159")//(same value? : true)^(same datatype? : false) : false
    //overall it's false bc the datatypes are different
    console.log("That is Pi");
else
    console.log("That's not Pi");//so this is called
/**
 * strict inequality operator is the negation of the strict equality operator
 * so the following two lines give the same result:
 * x !== y;
 * !(x===y)
 */
//PI!="3.14159" -> not(same value? : true) : false
if(PI!=="3.14159")//not((same value? : true)^(same datatype : false)? : false) : true
    //overall it's true bc the datatypes are different
    console.log("That's not Pi");
else
    console.log("That is Pi");//so this is called

/*commenting this bc it's annoying
//some loops
//while loop
username = "";
while(username==="" || username===null){//if param is true, enter the loop and exit only when it's false
    username = window.prompt("input something here");
}
do{//first do this,
    console.log("you again?");//notice this is displayed, even if the conditions match with the following while param
    if(username!=="" || username!==null){
        break;//exits the loop
    }
    username = window.prompt("input something here");//this will not happen, the loop has been broken
}while(username==="" || username===null)//then, if param is true, enter the loop and exit only when it's false
console.log("haha");
window.scrollTo({//this is a options parameter, and gets a options object (very similar to json, may I say) and each attribute is optional as parameter
    top: document.body.scrollHeight,
    behavior: "smooth",
});//I've added this scrollTo() just to not waste time getting to the bottom of the page after the window.prompt()
//for loop (loops for a limited amount of times defined by an index)
for(let i = 1; i<20; i++){//for i==0: while i<3: do this, then step: i++
    if(i==13){
        console.log("skipping 13th hello...");
        continue;//skips the rest of the iteration to the next one
    }
    console.log(i, "Hello");//this
}

//number guessing game using loop
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum-minNum))+minNum
let attempt = 0;
let guess;
let running = true;
do{
    attempt++;
    guess = Number(window.prompt(`Guess a value between ${minNum} and ${maxNum}`));
    console.log(attempt, guess);
    if(guess<minNum || guess>maxNum || isNaN(guess))
        window.alert("please enter a valid number");
    else{
        switch(true){
            case guess<answer :
                window.alert("TOO LOW, TRY AGAIN!");
                break;
            case guess>answer :
                window.alert("TOO HIGH, TRY AGAIN!");
                break;
            default :
                window.alert(`CORRECT! The answer was ${answer}. It took you ${attempt} attempts, check logs at console!`);
                running = false;
        }
    }
}while(running)
*/

//functions
function happyBirthday(username, age){
    console.log(`
        Happy birthday to you!\n
        Happy birthday to you!\n
        Happy birthday dear ${username}!\n
        Happy birthday to you!\n
        ${age} years old is 1 year older than last year!
    `);
}
happyBirthday("Olata", 21);
happyBirthday("Spongebob", 30);

function add(x, y){
    return x+y;
}
function subtract(x, y){
    return x-y;
}
function multiply(x, y){
    return x*y;
}
function divide(x, y){
    return x/y;
}
console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));

function isEven(number){
    return (number % 2) === 0 ? true : false;
}
console.log(isEven(13));

//variable scope (local vs global)
let num = 3;//global
function fn1(){
    let x = 1;//local
    console.log(x);
    console.log(num);
}
fn1();
function fn2(){
    let x = 2;//local
    let num = 4;//local variables have priority within their functions
    console.log(x);
    console.log(num);
}
fn2();

//temperature converter
const tempInput = document.getElementById("tempInput");
const tempType = document.getElementById("tempType");
const toFRadio = document.getElementById("toF");
const toCRadio = document.getElementById("toC");
let temp;

function setTempType(){
    switch(true){
        case toFRadio.checked :
            tempType.textContent = "ºC"
            tempType.style = "color: blue";
            break;
        case toCRadio.checked :
            tempType.textContent = "ºF"
            tempType.style = "color: blue";
            break;
    }
}
function convert(){

    switch(true){
        case toFRadio.checked :
            temp = Number(tempInput.value);
            temp = ((temp * 9) / 5) + 32;
            tempInput.value = Number(temp.toFixed(1));
            tempType.textContent = "ºF";
            tempType.style = "color: red";
            break;
        case toCRadio.checked :
            temp = Number(tempInput.value);
            temp = (temp - 32) * (5 / 9);
            tempInput.value = Number(temp.toFixed(1));
            tempType.textContent = "ºC"
            tempType.style = "color: red";
            break;
    }

}

