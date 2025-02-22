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

