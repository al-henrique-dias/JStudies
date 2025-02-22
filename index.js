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

