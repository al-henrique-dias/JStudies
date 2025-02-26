console.log(`Hello world\nI like pizza`);//displays something at console
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
document.getElementById("submitUser").onclick = function(){//functions can return their content as events, no "return" reserved keyword needed (also, this function is nameless, function is a reserved keyword)
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

//arrays (work like array lists here)
const fruits = ["apple", "orange", "banana"];
//displaying array
console.log(fruits);//all items (displayed as an object)
console.log(fruits[0]);//first index starts on 0
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);//all elements past the last index are undefined
//or
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
//or
for(let fruit of fruits){
    console.log(fruit);
}
//array methods
console.log(fruits.length);//array total length
console.log(fruits.indexOf("banana"));//index of an element (returns -1 if element doesn't exist)
fruits.push("coconut")//adds element to next array index
console.log(fruits);
fruits.pop();//removes element from last array index
console.log(fruits);
fruits.unshift("mango");//adds element to first array index and moves onward the following ones
console.log(fruits);
fruits.shift();//removes element from first array index and moves backward the following ones
console.log(fruits);
fruits.sort();//sorts elements in ascending order
console.log(fruits);
fruits.reverse();//reverses array elements
console.log(fruits);
//spread operator (...) - expands an array into separate elements (unpacks array elements)
const numbers = [1, 2, 3, 4, 5];
console.log(numbers)//this is the array "packed" or "unspread"
console.log(...numbers);//yes, these 3 dots are the spread operator who "unpacked" or "spread" the array for use
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));
console.log([..."Bro Code"].join('-'));//you can use it to form other arrays and how they're displayed
let newFruits = [...fruits];//this is a shallow copy: different data structures (in this case, arrays) with identical values
console.log(newFruits);
let vegetables = ["carrots", "broccoli", "potatoes"];
let foods = [...newFruits, ...vegetables, "eggs", "milk"];//combine and expand on arrays
console.log(foods);
//rest parameters (...rest) - bundles separate elements (function data values) into an array (quite the opposite of spread operators, but as parameters)
function openFridge(...foods){//yes those 3 dots in the parameter are the rest parameters, they will bundle all data values into an array
    console.log(foods);
}
function getFood(...foods){
    return foods;
}
const food1 = "pizza";
const food2 = "burger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";
openFridge(food1, food2, food3, food5);
foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);
function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
console.log(`The total is ${sum(1, 2, 3, 4, 5)}`);
function avg(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}
console.log(`The average is ${avg(75, 100, 85, 90, 50)}`);
function combineStrings(...strings){
    return strings.join(" ");
}
console.log(combineStrings("Mr.", "Spongebob", "Squarepants", "III"));

//Random password generator (exercise for functions and random numbers)
console.log("");//line separator
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%¨&*()_+"

    let allowedChars = "";
    let password = "";

    allowedChars += (includeLowercase) ? lowercaseChars : "";//reads if(includeLowercase) ? then allowedChars += lowercaseChars, else : allowedChars += ""
    allowedChars += (includeUppercase) ? uppercaseChars : "";
    allowedChars += (includeNumbers) ? numberChars : "";
    allowedChars += (includeSymbols) ? symbolChars : "";

    if(length <= 0)
        return `(password length must be at least 1)`;
    if(allowedChars.length === 0){
        return `(at least 1 set of character must be selected)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomIndex];
    }

    return password;

}

const passLength = 10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(
    passLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
);
console.log(`Generated password: ${password}`);

/**
 * callback - a function that is passed as and argument to another function
 * used to handle asynchronous operations such as:
 * - reading a file
 * - network requests
 * - interactiong with databases
 * 
 * "Hey, when you're done, call this next."
 */
function hello(callback){
    console.log("hello");
    callback();//this garantees that other functions (callback) will be called only during or after this function (hello)
}
function wait(){
    console.log("wait!");
}
function leave(){
    console.log("please,leave");
}
function goodbye(){
    console.log("goodbye");
}
hello(wait);

function soma(callback, x, y){
    let result = x + y;//do this first
    callback(result);//then call this next with the
}
soma(console.log, 3, 5);//first calculated and then called the function that displayed
function displayPage(result){
    document.getElementById("myTitle").textContent = result;
}
soma(displayPage, 1, 2);

//.forEach() - method used to iterate over the elements of an array and apply a specified callback function to each element
//const numbers = [1, 2, 3, 4, 5];//already declared
console.log('');//blank space for conveniesce
function display(element){
    console.log(element);
}
numbers.forEach(display);//forEach() returns nothing, it just performs an action for each element of an array
function doubleE(element, index, array){
    array[index] = element * 2;
}
function singleE(element, index, array){
    array[index] = element / 2;
}
numbers.forEach(doubleE);//this uses a callback where element, index and array are provided as parameters: forEach(callback: (element, index, array))
numbers.forEach(display);//notice that it changes the array elements
numbers.forEach(singleE);
numbers.forEach(display);

//const fruits = [orange, banana, apple];//alerady declared
fruits.forEach(display);
function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}
function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}
function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
fruits.forEach(upperCase);
fruits.forEach(display);
fruits.forEach(lowerCase);
fruits.forEach(display);
fruits.forEach(capitalize);
fruits.forEach(display);

/**
 * .map() - method used to iterate over the elements of an array and apply a specified callback function to each element,
 * then returs a new array!
*/
//const numbers = [2, 4, 6, 8, 10];//already declared
console.log(`numbers\n${numbers}`);
function square(element){
    return Math.pow(element, 2);//we use return here so the map function can also return the new array
}
function cube(element){
    return Math.pow(element, 3);
}
const squares = numbers.map(square);//returns new array
console.log(`squares\n${squares}`);
const cubes = numbers.map(cube);
console.log(`cubes\n${cubes}`);

const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
function upperCaseR(element){
    return element.toUpperCase();
}
function lowerCaseR(element){
    return element.toLowerCase();
}
console.log(students);
console.log(students.map(upperCaseR));
console.log(students.map(lowerCaseR));

const dates = ["2024-1-10", "2025-2-24", "2026-3-30"];
console.log(dates);
function formatDates(element){
    const parts = element.split('-');
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}
const brazilDates = dates.map(formatDates);
console.log(brazilDates);

//.filter() - returns the elements of an array that meet the condition specified in a callback function (creates a new array by filtering out elements)
//const numbers = [1, 2, 3, 4, 5];//already declared
console.log(numbers, numbers.push(6, 7));
function isEven(element){
    return element % 2 === 0;//returns a boolean, it is the filtering condition (true ? return : don't return)
}
function isOdd(element){
    return element % 2 !== 0;
}
const evenNums = numbers.filter(isEven);//if the elements of the array meet the filter callback function condition (true), they are return as elements to a new array
console.log(evenNums);
const oddNums = numbers.filter(isOdd);
console.log(oddNums);

const ages = [15, 17, 18, 18, 19, 20, 60];
console.log(ages);
function isAdult(element){
    return element >= 18;
}
function isKid(element){
    return element < 18;
}
console.log(ages.filter(isAdult));
console.log(ages.filter(isKid));

const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
function getShortWords(element){
    return element.length <= 6;
}
function getLongWords(element){
    return element.length > 6;

}
console.log(words.filter(getShortWords));
console.log(words.filter(getLongWords));

/** 
 * .reduce() - reduce the elements of an array to a single value
 * Calls the specified callback function for all the elements in an array
 * The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */
const prices = [5, 30, 10, 25, 15, 20];
function sum(previous, next){//the iterations are based on the accumulation of the returned values of this callback into the 'previous' parameter  
    return previous + next;
}
const total = prices.reduce(sum);
console.log(`R$${total.toFixed(2)}`);

const grades = [75, 50, 90, 80, 65, 95];
function getMax(accumulator, element){//for better explaining, all the accumulation gets into the 'accumulator' parameter (previously called 'previous')
    return Math.max(accumulator, element);//the function will do what it must and it's returned value will be stored at reduce and pass it as 'accumulator' in the next iteration
}
function getMin(accumulator, next){
    return Math.min(accumulator, next);
}
console.log(grades.reduce(getMax));
console.log(grades.reduce(getMin));

//function expressions - define functions as values or variables
const hi = function(){//you can define a function as a variable
    console.log("hi");
}
hi();//and then call it
setTimeout(function(){//you can use a function as a argument for a parameter
    console.log("is anyone there?");
}, 3000);//btw, this is setTimeout, a function that waits the specified amount of time (ms) to then call a callback fn
//const numbers = [1, 2, 3, 4, 5, 6];//already declared
numbers.pop();
console.log(numbers);
console.log(numbers.map(function (element){//you also don't need to name the function
    return Math.pow(element, 2);//squared
}));
console.log(numbers.map(function (element){
    return Math.pow(element, 3);//cubed
}));
console.log(numbers.filter(function (element){
    return element % 2 === 0;//even numbers
}));
console.log(numbers.filter(function (element){
    return element % 2 !== 0;//odd numbers
}));
console.log(numbers.reduce(function (accumulator, next){
    return accumulator + next;//total sum
}));
//arrow functions are a concise way to write function expressions that you use oly once
const heyThere = (name) => console.log(`Hey there, ${name}`);//you don't need brackets for just one line of code (like some other statements)
const salutations = (name, age) => {
    console.log(`Salutations ${name}!`);
    console.log(`You are ${age} years old`);
}
heyThere("Bro");
salutations("bro", 21);
setTimeout(() => console.log("have you forgot me? ;-;"), 5000);
console.log(numbers.map((element) => Math.pow(element, 2)));//squared
//notice that you haven't used the "return" reserved keyword here
console.log(numbers.map((element) => Math.pow(element, 3)));//cubed
console.log(numbers.filter((element) => element % 2 === 0));//even numbers
console.log(numbers.filter((element) => element % 2 !== 0));//odd numbers
console.log(numbers.reduce((accumulator, next) => accumulator + next));//total sum

/**
 * object - collection of related properties and/or methods
 * they can represent real world objects (people, products, places, anything)
 * structure:
 *  object = {
 *      key: velue,
 *      function()
 *  }
 */
const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: () => console.log("Hi! I'm Spongebob!"),
    eat: () => console.log("I'm eating a Krabby Patty"),
}
const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => console.log("No, this is Patrick!"),
    eat: () => console.log("I'm eating garbage!"),
}
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();
//this (reserved keyword) - reference to the object where "this" is used (the object depends on the immediate context)
const person = {
    name: "Spongebob",
    favFood: "burger",
    sayHello: function (){console.log(`Hi! I am ${this.name}`);},//"this" cannot be used on arrow functions
    eat: function (){console.log(`${this.name} is eating ${this.favFood}`);},//this is at the object context
} 
console.log(this);//this displays the window object (all of it's properties), because it's the context "this" is inserted
person.sayHello();
person.eat();
//constructors - special method for defining the porperties and methods of objects
function Car(make, model, year, color){//pay attention to capitalization
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){console.log(`YOu drive the ${this.model}`)};
}//this function generates an object when using the reserved keyword "new"
const car1 = new Car("Ford", "Mustang", 2023, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
const car3 = new Car("Dodge", "Charger", 2024, "silver");
console.log(car1);
console.log(car2);
console.log(car3);
car1.drive();
car2.drive();
car3.drive();

/**
 * class - provides a more structured and cleaner way to work with objectscompared to traditional constructor methods
 * includes "static" reserved keyword, encapsulation and inheritance (kinda OOP here)
*/
class Product{//attention to capitalization
    constructor(name, price){//for creating the constructor, use the "constructor" reserved keyword
        this.name = name;
        this.price = price;
    }

    displayProduct(){//inside class declaration, you don't need to use the "function" reserved keyword to declare a function
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("shirt", 19.99);
const product2 = new Product("pants", 22.50);
const product3 = new Product("underwear", 100.00);

product1.displayProduct();
console.log(`Total price (with tax): $${product1.calculateTotal(salesTax).toFixed(2)}`);
product2.displayProduct();
console.log(`Total price (with tax): $${product2.calculateTotal(salesTax).toFixed(2)}`);
product3.displayProduct();
console.log(`Total price (with tax): $${product3.calculateTotal(salesTax).toFixed(2)}`);
/**
 * static (reserved keyword) - defines properties or methods that belong to a class itself rather than the objects created from that class
 * (class owns anything static, objects don't)
*/
class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return 2 * radius;
    }
    static getCircumference(radius){
        return 2 * (this.PI * radius);
    }
    static getArea(radius){
        return this.PI * (radius ** 2);
    }

    PI = 4;//does nothing
}

console.log(MathUtil.PI);//I don't need a object to display this, thants to "static"
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));

class User{
    
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;//the objects can access static class elements through calling the class itself
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`)
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
console.log(user1.userCount, User.userCount);//the object doesn't have access to static class elements, the class has to called
user1.sayHello();
user2.sayHello();
user3.sayHello();
//User.sayHello();//the class itself also can't operate non-static elements without a object
//user1.getUserCount();//the same rules applies to methods
User.getUserCount();
//Inheritance - allows a new class to inherit properties and methods from an existing class (parent>>child) (a parent class can also be known as superclass)
class Animal{
    
    alive = true;

    constructor(name){
        this.name = name;
    }

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }

}
class Bird extends Animal{
    name = this.name === undefined ? "bird" : this.name;
    fly(){//each child
        console.log(`This ${this.name} is flying`);
    }
}
class Mammal extends Animal{
    name = this.name === undefined ? "mammal" : this.name;
    run(){//can have
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal{
    name = this.name === undefined ? "fish" : this.name;
    swim(){//it's unique properties
        console.log(`This ${this.name} is swimming`);
    }
}

const hawk = new Bird("hawk");
const sloth = new Mammal("sloth");
const pirarucu = new Fish();

sloth.alive = false;//the child classes have access to all parent class properties

console.log(pirarucu.alive ? `the ${pirarucu.name} is alive` : `the ${pirarucu.name} is dead`);
pirarucu.eat();
pirarucu.sleep();
pirarucu.swim();
console.log(sloth.alive ? `the ${sloth.name} is alive` : `the ${sloth.name} is dead`);
sloth.eat();
sloth.sleep();
sloth.run();
console.log(hawk.alive ? `the ${hawk.name} is alive` : `the ${hawk.name} is dead`);
hawk.eat();
hawk.sleep();
hawk.fly();
/**
 * super (reserved keyword) - used in class objects to call the constructor or acces the properties and methods of a superclass (parent)
 * "this" - this object
 * super - the parent
 */
class Animalbr{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    mover(velocidade){
        console.log(`Este ${this.nome}, se move na velocidade de ${velocidade}km/h`);
    }
}
class Passaro extends Animalbr{
    constructor(nome, idade, veloVoo){//this is equivalent to override the parent constructor
        super(nome, idade);//this is mandatory when creating a contructor for a child class, it calls the constructor of the parent class
        this.veloVoo = veloVoo;
    }

    voar(){
        console.log(`Este ${this.nome} consegue voar`);
        super.mover(this.veloVoo);//this calls a parent method inside a child method
    }
}
class Mamifero extends Animalbr{
    constructor(nome, idade, veloCorre){
        super(nome, idade);
        this.veloCorre = veloCorre;
    }
    
    mover(velocidade){//this overrides the parent method, becoming priority upon calling
        console.log(`Este ${this.nome} consegue correr`);
        super.mover(velocidade);
    }
}
class Peixe extends Animalbr{
    constructor(nome, idade, veloNado){
        super(nome, idade);
        this.veloNado = veloNado;
    }

    mover(){//this overrides, but does not overloads the parent method, just becomes priority upon calling (if the parent signature is called, the parameters are ignored)
        console.log(`Este ${this.nome} consegue nadar`);
        super.mover(this.veloNado);
    }
}

const aguia = new Passaro("águia", 2, 50);
const preguica = new Mamifero("preguiça", 3, 1);
const pintado = new Peixe("pintado", 1, 11);

console.log(aguia.nome, aguia.idade, aguia.veloVoo);
aguia.voar();
console.log(preguica.nome, preguica.idade, preguica.veloCorre);
preguica.mover(preguica.veloCorre);
console.log(pintado.nome, pintado.idade, pintado.veloNado);
pintado.mover();
pintado.mover(pintado.veloNado);