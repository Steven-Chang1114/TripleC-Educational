# HTML

[Official Doc for HTML](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)


## Table of Content
1. [Intro](#intro)
2. [Tags](#tags)
3. [Attribute](#attribute)

## Intro
HTML (HyperText Markup Language), is the markup language for encoding Web pages. It allows web users to create and structure contents for their website.

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

## Tags

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

## Attribute

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

## Tutorial (Optional)
[Tutorial](https://www.youtube.com/watch?v=pQN-pnXPaVg)