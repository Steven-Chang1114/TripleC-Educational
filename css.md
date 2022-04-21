# CSS

[Official Doc for CSS](https://www.w3schools.com/css/)

## Table of Content
1. [Intro](#intro)
2. [Styles and Attributes](#styles-and-attributes)
3. [Layout](#layout)
4. [Types of CSS](#types-of-css)


## Intro
CSS (Cascading Style Sheets) allows user to style their webpage to make it looks better. Often it is heavily involves with UI/UX design to make the webpage interactive and user friendly.

Note: you can also watch this [8 minutes video](https://www.youtube.com/watch?v=Z4pCqK-V_Wo) in replacement of the below section up until ***Types of CSS*** if you prefer watching than reading

## Styles and Attributes
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

## Layout

There are different way of doing the layout in CSS, but for simplicity, I would highly recommend ***[Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)*** to do all the layout.

In addition, it is very important to understand the concept of the ***Box Model***
![](https://media.gcflearnfree.org/content/5ef2084faaf0ac46dc9c10be_06_23_2020/box_model.png)

This is explained in this short [video](https://www.youtube.com/watch?v=zqDdws_Hvmw)

## Types of CSS
 
There are three ways of writing CSS:
### Internal CSS: Write CSS inside the ```style``` tag in HTML
 
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
### External CSS: HTML file links an external ```.css``` file,
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

### Inline CSS: Used to style a specific HTML element.
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

## Tutorial (Optional)
[Tutorial](https://www.youtube.com/watch?v=1Rs2ND1ryYc)