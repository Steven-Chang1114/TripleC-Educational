# HTML & CSS & JS

[Official Doc for HTML](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)

[Official Doc for CSS](https://www.w3schools.com/css/)

[Official Doc for JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Table of Content
1. [Intro](#intro)
2. [Material](#material)
    * [HTML](#html-1)
        * [Tags](#tags)
        * [Attribute](#attribute)
    * [CSS](#css-1)
        * [Styles and Attributes](#styles-and-attributes)
        * [Layout](#layout)
        * [Types of CSS](#types-of-css)
    * [JS](#js-1)
        * [ES5 and ES6](#es5-and-es6)
        * [Syntax](#syntax)
        * [Asynchronous (Async) Programming](#asynchronous-programming)
        * [DOM](#dom)
3. [Basic workflow](#work-flow)

## Intro
### HTML
HTML (HyperText Markup Language), is the markup language for encoding Web pages. It allows web users to create and structure contents for their website.

### CSS
CSS (Cascading Style Sheets) allows user to style their webpage to make it looks better. Often it is heavily involves with UI/UX design to make the webpage interactive and user friendly.
### JS
JavaScript is a scripting language and it is the primary language chosen to do frontend development mainly because the browser only works with JavaScript so it can work with the browsers APIs such as the [DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) which will be very important when we are doing our project.

## Material

Since it actually covers A LOT OF materials and it is definately not enough (personally it tooks me more than 60+ hours for learning javaScript to a level that can help me to crack the tech interview) to teach everything in one week and we are very rush in time, so I will very briefly explain the syntax of each language and I will attatch a more detailed tutorial video so you can check it out in your own time (Those videos will be very long and it is ***NOT intended to finish it*** for the purpose of this educational project, I put them there is only for people who want to dive deeper into those catagories ***IN THEIR OWN TIME***). In the end of this week, I'm expecting everyone can create a very simple webapp which I will introduce in later section that is made by vanilla javascript.

### HTML

Usually when doing the web dev, the root html file is called ```index.html```, and this is the typical format (boilerplate) for every html file
```
<!DOCTYPE html>
<html>

    <head>
        <title>
        </title>
    </head>
    
    <body>
    </body>
    
</html>
```

#### Tags

the ```</>``` notation is called ```html element``` with ```<>``` as the opening tag and ```</>``` as the closing tag. For example ```<h1></h1>``` means the header tag and you can do ```<h1>This is the headline</h1>``` As one complete html element. 

The elements used in the above code example is explained below:

- ```<!DOCTYPE html>``` is an "information" to the browser about what document type to expect. 
- ```<html></html>``` represents the root of an HTML document. 
- ```<head></head>``` is an element in HTML files that can contain metadata (data about data) and script calls. For example the ```<style></style>``` for inline css and ```<title></title>``` tag for the website title and  ```<script></script>``` tag for loading the js file
- ```<body></body>``` contains all the contents of an HTML document, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.

Most of the work will be done inside the ```body``` tag, below is the list of the commonly used html tags:
- ```<p>``` paragraph tag
- ```<h1>``` to ```<h6>``` header tag
- ```<hr>``` thematic change in the content
- ```<br>``` line break
- ```<img>``` image tag
- ```<a>``` anchor tag
- ```<ol>``` ordered list
- ```<ul>``` unordered list
- ```<li>``` list item inside ```<ul>``` or ```<ol>``` tags
- ```<button>``` button tag
- ```<form>``` form tag for user input
- ```<input>``` input tag for user input, mostly used inside the ```<form>``` tag
- ```<div>``` Defines the section (chunk) of code
- ```<span>``` Defines for the section inline of code
- ```<style>``` Inline CSS
- ```<script>``` Loading JS file

[here is](https://www.w3schools.com/tags/ref_byfunc.asp) a more detailed referenced list of most of the html tags.

#### Attribute

HTML attributes are a modifier of an HTML element type. An attribute either modifies the default functionality of an element type or adds functionality to certain element types.

Here are the two most famous attribute in ```html```:
- ```class```
- ```id```
They both are used as a reference for CSS in a style sheet. They can also be used by as a reference in JavaScript to access and manipulate elements in the DOM. The difference between ```class``` and ```id``` is that ```id``` is unique in a page and can only apply to at most one element, while ```class``` selector can apply to multiple elements. 

To use the attribute, you can do
```
<p ATTRIBUTE_NAME=VALUE>
    Hello
</p>
```
for example
```
<p class="exampleclass">
    Hello
</p>
```
or
```
<p id="exampleid">
    Hello
</p>
```

There are two main types of attributes:
- Global attribute: attributes that you can add for every tags (like ```class``` and ```id```)
- Element-specific attribute: As the name specified, for example ```src``` attribute in ```img``` tag

[Here are](https://www.w3schools.com/html/html_attributes.asp) some commonly used attributes

Lastly, to load CSS file into html file, do
```
<link rel="stylesheet" href="style.css">
```
Inside the ```head``` tag. Likewise, to load JS file into html file, do
```
<script src="index.js"></script>
```

[Tutorial (Optional)](https://www.youtube.com/watch?v=pQN-pnXPaVg)
### CSS

Note: you can also watch this [8 minutes video](https://www.youtube.com/watch?v=Z4pCqK-V_Wo) in replacement of the below section up until ***Types of CSS*** if you prefer watching than reading

#### Styles and Attributes
 CSS file is usually names as ```styles.css```. CSS syntax is combined with ```selectors``` and ```attributes```. ```selector``` is used to selector the correst html elements that you want to add style on. For example
 ```
 h1 {
    /* element selector */
    /* styles here */
 }
 .classname {
    /* class selector */
    /* styles here */
 }
 #idname {
    /* id selector */
    /* styles here */
 }
 ```
 Above css file cooresponding to the below html file:
 ```
 <!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <h1>Tutorial</h1>
        <p class="classname">This is first paragraph.</p>
        <p id="idname">This is second paragraph.</p>
    </body>
</html>
 ```
 For more selectors, check out this [document](w3schools.com/cssref/css_selectors.asp).
 
 ```Attributes``` are the actual styles we applied, and it is applied from top to bottom. The syntax is ```ATTRIBUTE_NAME: ATTRIBUTE_VALIE;``` for example ```background-color: red;```.
 The entire CSS file will looks like:
  ```
 h1 {
    color: red;
 }
 .classname {
    margin-bottom: 1em;
 }
 #idname {
    font-size: 20px;
 }
 ```
 
 For more information about attributes, check out this [document](https://www.w3schools.com/cssref/)

#### Layout

There are different way of doing the layout in CSS, but for simplicity, I would highly recommend ***[Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)*** to do all the layout.

In addition, it is very important to understand the concept of the ***Box Model***
![](https://media.gcflearnfree.org/content/5ef2084faaf0ac46dc9c10be_06_23_2020/box_model.png)

This is explained in this short [video](https://www.youtube.com/watch?v=zqDdws_Hvmw)

 #### Types of CSS
 
 There are three ways of writing CSS:
 ##### Internal CSS: Write CSS inside the ```style``` tag in HTML
 
```
<!DOCTYPE html>
<html>
    <head>
    <style>
        body {
            background-color: blue;
        }
        h1 {
            color: red;
            padding: 60px;
        } 
    </style>
    </head>
    <body>
    
    <h1>Tutorial</h1>
    <p>This is our paragraph.</p>
    
    </body>
</html>
```
##### External CSS: HTML file links an external ```.css``` file,
On your html file:
```
<!DOCTYPE html>
<html>
    <head>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
    
    <h1>Tutorial</h1>
    <p>This is our paragraph.</p>
    
    </body>
</html>
```
On your CSS file:
```
body {
    background-color: blue;
}
h1 {
    color: red;
    padding: 60px;
} 
```

##### Inline CSS: Used to style a specific HTML element.
For this CSS style, you’ll only need to add the style attribute to each HTML tag, without using selectors. For example:
```
<!DOCTYPE html>
<html>
    <body style="background-color:black;">
    
        <h1 style="color:white;padding:30px;">Tutorials</h1>
        <p style="color:white;">This is our paragraph.</p>
    
    </body>
</html>
```

For most of the time, we will be using external CSS for cleaner code

[Tutorial(Optional)](https://www.youtube.com/watch?v=1Rs2ND1ryYc)
### JS
#### ES5 and ES6
ES5 (ECMAScript 2009) is the javaScript version that is released in 2009, and ES6 (ECMAScript 2015) is released in 2015. Compared with ES5, ES6 has a lot of new features that's being added on to the javaScript which divides the "old JS" with "new JS". Nowadays we are very encouraged to use the ES6 syntax over ES5, so in the following sections I will introduced both ES5 and ES6 syntax in order to let you know the difference.

In addition, even though ES5 is outdated, it is NOT deprecated. In other words, if you insist to code in ES5 style, it will still works, it's just not recommended.

#### Syntax
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

##### Variable declaration
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

##### Object
```Object``` is very similar as the ```dictionary``` in python. It is basically the key value pair and it is able to construct with values in different types such as
```
const obj = {
    name: "Steven",
    school: "UCSD", 
    age: 21
}
```
To access the object properties, you can do ```obj.name``` or ```obj["name"]``` to retrive ```"Steven"```
##### Arrays
```array``` in JS is very similar as the the ```list``` in python. It is declared as below:
```
const array_name = [item1, item2, ...];     
```
and you can access each item using ```array_name[index]```, and ```array_name.length``` for the array length.

Array itself is actually type ```Object``` in JavaScript, which means it comes with many properties and methods described in the this [website](https://www.w3schools.com/jsref/jsref_obj_array.asp)

##### Function

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

##### Loop and if statement
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

#### Asynchronous Programming
In easy words, asynchronous (async) operation means the operation that does not take place in real-time (it will run in the background and return to realtime when it receives the result) whereas synchronous operation is always execute in order. One example of asynchronous operation is making HTTP request.

Before we dive deep asynchronous programming, we first need to know JavaScript is a single-threaded language which means it has a synchronous nature. Therefore, in order to achieve the asynchronous functionality, we need to understand the JavaScript run time environment and the concept of ***Event loop*** and ***Callback queue*** which will be explained in [this video](https://www.youtube.com/watch?v=FVZ-A_Akros).
![](https://miro.medium.com/max/1024/1*4lHHyfEhVB0LnQ3HlhSs8g.png)

##### Promise
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

##### Fetch API
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

##### Async Await
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


#### DOM

DOM (Document Object Mode) is the data representation of the objects that comprise the structure and content of a document on the web.

There is a browser API that allows developer to use JS to get access and manipulate the HTML elements that allows the webpage to be interactive.

There are mainly three ways of accessing the HTML elements:
```
```

##### Babel

[Tutorial (JS) (Optional)](https://www.youtube.com/watch?v=PkZNo7MFNFg)

[JS Advanced (Highly recommended to watch if you want to do frontend dev as a profession) (Optional)](https://www.youtube.com/watch?v=Bv_5Zv5c-Ts)

[Tutorial (DOM) (Optional)](https://www.youtube.com/watch?v=y17RuWkWdn8)

## Basic Workflow



 








