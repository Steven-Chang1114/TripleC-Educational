# HTML & CSS & JS

[Official Doc for HTML](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)

[Official Doc for CSS](https://www.w3schools.com/css/)

[Official Doc for JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Table of Content
### 1. [Intro](#intro)
### 2. [Material](#material)
### 2. [Basic workflow](#work-flow)

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

There are different way of doing the layout in CSS, but for simplicity, I would highly recommend [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) to do all the layout.

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

[Tutorial (JS) (Optional)](https://www.youtube.com/watch?v=PkZNo7MFNFg)

[JS Advanced (Highly recommended to watch if you want to do frontend dev as a profession) (Optional)](https://www.youtube.com/watch?v=Bv_5Zv5c-Ts)

[Tutorial (DOM) (Optional)](https://www.youtube.com/watch?v=y17RuWkWdn8)

## Basic Workflow



 








