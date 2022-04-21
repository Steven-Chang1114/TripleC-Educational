# JS

[Official Doc for JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Table of Content
1. [Intro](#intro)
2. [ES5 and ES6](#es5-and-es6)
3. [Syntax](#syntax)
    * [Variable declaration](#variable-declaration)
    * [Object](#object)
    * [Arrays](#arrays)
    * [Function](#function)
    * [Loop and if statement](#loop-and-if-statement)
4. [Asynchronous (Async) Programming](#asynchronous-programming)
    * [Promise](#promise)
    * [Fetch API](#fetch-api)
    * [Async Await](#async-await)
5. [DOM](#dom)
    * [Selectors](#selectors)
    * [Event listeners](#event-listeners)
6. [Babel](#babel)

## Intro
JavaScript is a scripting language and it is the primary language chosen to do frontend development mainly because the browser only works with JavaScript so it can work with the browsers APIs such as the [DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) which will be very important when we are doing our project.

## ES5 and ES6
ES5 (ECMAScript 2009) is the javaScript version that is released in 2009, and ES6 (ECMAScript 2015) is released in 2015. Compared with ES5, ES6 has a lot of new features that's being added on to the javaScript which divides the "old JS" with "new JS". Nowadays we are very encouraged to use the ES6 syntax over ES5, so in the following sections I will introduced both ES5 and ES6 syntax in order to let you know the difference.

In addition, even though ES5 is outdated, it is NOT deprecated. In other words, if you insist to code in ES5 style, it will still works, it's just not recommended.

## Syntax
There are 8 different data types in JS
| Data Types      | Description | Example   |
| :---        |    :----:   |          ---: |
| ```String```      | represents textual data       | ```'hello'```, ```"hello world!"``` etc   |
| ```Number```   | an integer or a floating-point number        | ```3```, ```3.234```, ```3e-2``` etc.      |
| ```BigInt``` (ES2020)     | an integer with arbitrary precision       | ```900719925124740999n``` , ```1n``` etc.  |
| ```Boolean```   | Any of two values: true or false      | ```true``` and ```false```     |
| ```undefined```     | a data type whose variable is not initialized       | ```let a;```  |
| ```null```   | denotes a null value        | ```let a = null;```      |
| ```Symbol``` (ES6)  | data type whose instances are unique and immutable       | ```let value = Symbol('hello'); ```  |
| ```Object ```  | key-value pairs of collection of data        | ```let student = { }; ``` |

### Variable declaration
There three ways declaring the variable:
```
var a = 1 //ES5
let b = 2
const c = 3
```
- ```var``` used to be the main way of declaring variables before 2015. ```var``` is function scoped when it is declared within a function.  This means that it is available and can be accessed only within that function.
- ```let``` is now preferred for variable declaration. It is very similar with ```var``` except ```let``` is block scoped, which means if you use ```let``` declaration inside the ```if else``` statement, you cannot access this variable outside of this statement.
- ```const``` is similar with ```let``` but it contains const value which means it is immutable. Same as ```let```, it is block scoped.

For the variable declaration, there is a concept called [***hoisting***](https://www.w3schools.com/js/js_hoisting.asp), but it's optional content. You can learn it in your own time

### Object
```Object``` is very similar as the ```dictionary``` in python. It is basically the key value pair and it is able to construct with values in different types such as
```
const obj = {
    name: "Steven",
    school: "UCSD", 
    age: 21
}
```
To access the object properties, you can do ```obj.name``` or ```obj["name"]``` to retrive ```"Steven"```

### Arrays
```array``` in JS is very similar as the the ```list``` in python. It is declared as below:
```
const array_name = [item1, item2, ...];     
```
and you can access each item using ```array_name[index]```, and ```array_name.length``` for the array length.

Array itself is actually type ```Object``` in JavaScript, which means it comes with many properties and methods described in the this [website](https://www.w3schools.com/jsref/jsref_obj_array.asp)

### Function

There are two ways of defining functions:
```
//ES5
function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}

//Equivalently in ES6
const myFunction = (p1,p2) => {
    return p1 * p2
}
```

The function declaration in ES6 is also called ***arrow function***. The main difference between arrow function and normal ES5 function is ```this``` keyword. To fully understand ```this```, you can watch [this video](https://www.youtube.com/watch?v=Pi3QC_fVaD0) or read [this article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this). In shorts, arrow function doesn't inherit the ```this``` keyword but normal function does.

### Loop and if statement
It's very similar with other C-like languages:
if statement
```
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
```
For loop
```
for (let i = 0; i < 5; i++) {
    //console.log is basically the printing method in JavaScript
    console.log(i);
}
```
For-in loop
```
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```
For-of loop
```
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"
```
While loop
```
while (condition) {
  // code block to be executed
}
```

## Asynchronous Programming
In easy words, asynchronous (async) operation means the operation that does not take place in real-time (it will run in the background and return to realtime when it receives the result) whereas synchronous operation is always execute in order. One example of asynchronous operation is making HTTP request.

Before we dive deep asynchronous programming, we first need to know JavaScript is a single-threaded language which means it has a synchronous nature. Therefore, in order to achieve the asynchronous functionality, we need to understand the JavaScript run time environment and the concept of ***Event loop*** and ***Callback queue*** which will be explained in [this video](https://www.youtube.com/watch?v=FVZ-A_Akros).
![](https://miro.medium.com/max/1024/1*4lHHyfEhVB0LnQ3HlhSs8g.png)

### Promise
```Promise```  is a special JavaScript object that links the “producing code” and the “consuming code” together. In terms of our analogy: this is the “subscription list”. The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes that result available to all of the subscribed code when it’s ready.

```Promise``` has three states:
- ```pending```: initial state, neither fulfilled nor rejected.
- ```fulfilled```: meaning that the operation was completed successfully.
- ```rejected```: meaning that the operation failed.

You can use ```.then(value)``` when the ```promise``` is successed and ```.catch(error)``` when ```promise``` failed

The entire ```promise``` workflow is illustrated in the below diagram:
![](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png)

The implementation is as follows
```
let myPromise = new Promise((myResolve, myReject) => {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise
    .then(value => { /* code if successful */ })
    .catch(err => {/* code if successful */});
```

```myPromise``` is also chainable
```
myPromise
    .then(handleResolvedA)
    .then(handleResolvedB)
    .then(handleResolvedC)
    .catch(handleRejectedAny);
```

We can insert our async code inside the Producing Code and wait until it gives us a response

### Fetch API
The Fetch API is used for accessing and manipulating parts of the HTTP pipeline, such as requests and responses.
```fetch()``` will return a ```promise``` that we can handle using ```.then()``` and ```.catch()``` as shown in the previous section

```
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
  .catch(err => console.log(err))
```
Here we are fetching a JSON file across the network and printing it to the console. The simplest use of ```fetch()``` takes one argument — the path to the resource you want to fetch — and does not directly return the JSON response body but instead returns a promise that resolves with a ```Response``` object.

The ```Response``` object, in turn, does not directly contain the actual JSON response body but is instead a representation of the entire HTTP response. So, to extract the JSON body content from the ```Response``` object, we use the ```json()``` method, which returns a ***second promise*** that resolves with the result of parsing the response body text as JSON.

Lastly, we use ```.catch(err)``` to handle the failing case such as network issue or ```CORS``` problem etc. You will receive a ```err``` object containing the error information such as the error message.

### Async Await
In ES6, there's a much more convenient way than using ```fetch()``` which we call it ```async await``` method. 

```async``` is a keyword that you need to define when you are declaring the function and then you can use ```await``` keyword inside this async function, which means this function will wait for a Promise to return and then continue executing when it receives the response (no matter if it is successed or not)

For example:
```
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    // setTimeout is a built in async function in JS and it will return the 
    // result after waiting certain amount of time (in this case 2000ms)
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}
```
Or in ES6:
```
const resolveAfter2Seconds = () => {
  return new Promise(resolve => {
    // setTimeout is a built in async function in JS and it will return the 
    // result after waiting certain amount of time (in this case 2000ms)
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

const asyncCall = async () => {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}
```


## DOM

DOM (Document Object Mode) is the data representation of the objects that comprise the structure and content of a document on the web.

There is a browser API that allows developer to use JS to get access and manipulate the HTML elements (DOM) that allows the webpage to be interactive.

![](https://www.w3schools.com/js/pic_htmltree.gif)
As the graph above is shown, the root of the DOM is ```document``` object.

### Selectors
There are mainly three ways of accessing the HTML elements:
```
const element1 = document.getElementById("idname");
const element2 = document.getElementsByClassName("classname");
const element3 = document.querySelector(".classname");
const element4 = document.querySelector("#idname");
const element5 = document.querySelector("h1");
```
The above code is corresponding to the following HTML code:
```
<!DOCTYPE html>
<html>
    <body style="background-color:black;">
    
        <h1>Tutorials</h1>
        <p class="classname">This is first paragraph.</p>
        <button id="idname">Click me</button>
    
    </body>
</html>
```
The result is ```element1``` and ```element4``` both points to ```<button id="idname">Click me</button>```, ```element2``` and ```element3``` points to ```<p class="classname">This is first paragraph.</p>```, and lastly ```element5``` points to ```<h1>Tutorials</h1>```.

To know all the selectors, visit [this document](https://blog.bitsrc.io/dom-selectors-explained-70260049aaf0)

### Event listeners

After selecting the corresponding elements, we can add event listeners to enable the user interaction. The syntax is as follows:
```
element.addEventListener(event, callbackFunction, useCapture);
```
For example, with the above HTML code, we can do
```
const button = document.getElementById("idname");

const btnOnPressed = () => {
    console.log("CLICKED!")
}

button.addEventListener("click", btnOnPressed , false);
```
Now if you click the button on the webpage, it will print ```CLICKED``` on the console everytime you click the button. We will explain each arguments below

- ```click``` is one of the events in event listeners, to see the full list of events, go to [this website](https://www.w3schools.com/jsref/dom_obj_event.asp)
- ```btnOnPressed``` is the callback function, which means this function will be triggered when the event (```click``` in this case) is triggered, and it will automtically pass a ```event``` object. More details [here](https://www.w3schools.com/jsref/dom_obj_event.asp)
- ```false``` means ```useCapture=false```, and ```useCapture``` is false by default, which means the event will use the bubbling propagation, and when the value is set to true, the event uses the capturing propagation. 
To fully understand this, you need to know the concept of event propagation: ***Event Bubbling*** and ***Event Capturing***. Event propagation is a way of defining the element order when an event occurs. If you have a ```<p>``` element inside a ```<div>``` element, and the user clicks on the ```<p>``` element, which element's "click" event should be handled first?
    * ***Event Bubbling***: the inner most element's event is handled first and then the outer: the ```<p>``` element's click event is handled first, then the ```<div>``` element's click event.
    * ***Event Capturing***: the outer most element's event is handled first and then the inner: the ```<div>``` element's click event will be handled first, then the ```<p>``` element's click event.

In addition, you can write the same function in short
```
const button = document.getElementById("idname");

button.addEventListener("click", () => {
    console.log("CLICKED!")
});
```

If you want to know more about what you can do with DOM (such as manipluate the HTML element or change the style using CSS), check out [this website](https://www.w3schools.com/js/js_htmldom.asp)

## Babel

[Official Doc](https://babeljs.io/)

Even though new version of JS will be released in almost every year that brings new features and stronger syntax, the old browser might not able to execute the new version of JS. Therefore it's time for Babel to comes into play.

Babel is a transcompiler that converts ECMAScript 2015+ (ES6+) code into a backwards compatible version of JavaScript that can be run by older JavaScript engines. You are not required to know the detail of Babel, you just need to know it exists and it's essential for front-end engineering.

However if you want to learn more detail about Babel, [this video](https://www.youtube.com/watch?v=C2PDAGCrk_g) is a good starting point

## Tutorial (Optional)

[Tutorial (JS)](https://www.youtube.com/watch?v=PkZNo7MFNFg)

[JS Advanced (Highly recommended to watch if you want to do frontend dev as a profession)](https://www.youtube.com/watch?v=Bv_5Zv5c-Ts)

[Tutorial (DOM)](https://www.youtube.com/watch?v=y17RuWkWdn8)
