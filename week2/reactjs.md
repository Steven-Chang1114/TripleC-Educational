# Reactjs

[Official Doc](https://reactjs.org/)

## Table of Content
### 1. [Intro](#intro)
### 2. [Set up](#set-up)
### 3. [Layout](#layout)
### 4. [JSX](#jsx)
### 5. [Components](#components)
* [Functional and Class Component](#functional-and-class-component)
* [Props](#props)
  * [Parent to Child](#parent-to-child)
  * [Child to Parent](#child-to-parent)
* [Event](#event)
* [Lifecycle](#lifecycle)
* [Hooks](#hooks)
  * [State](#state)
  * [Effect](#effect)
### 6. [Styling](#styling)
### 7. [Webpack](#webpack)

## Intro

React is a front-end JavaScript library for building user interfaces, and currently it's one of the most popular frameworks in the communities, others are Vuejs, Angular and svelte etc.

The main characteristic of React is it encourage developers to write pure functional code and make use of the concept of functional programming, and it also supports mobile app development (React Native) which you can learn more in [this doc](https://reactnative.dev/), but in this program, we will be focusing on React

## Set up

To create an react project, after installing nodejs and npm, simply run:
```
npx create-react-app my-app
```
This will create a react project called ```my-app```

On VS code, you will see the following file system
![](reactsetup.png)

Don't get scared away, the important file that you need to focusing on is ```package.json``` and ```src``` folder.

```src``` folder is the source folder, most of your code will be written here, the code starts from ```index.js``` with the root components as ```App.js``` and then your code will be expand from here. For more information, you will learn in the [Components](components) section

```package.json``` contains the project information such as all the installed libraries information and scripts that you can run, for example to start the local host server, you can run ```npm run start``` in the terminal.

After running ```npm run start```, you should see the following
![](reactresult.png)
And it is running on ```http://localhost:3000``` which is our local host server

## Layout

Now we will look closely into ```index.js``` and ```App.js```. ```index.js``` is shown as follow:
```
//index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
```

Notice the ```root``` object, we can see there is a DOM operation as an argument being passed into ```ReactDOM.createRoot()``` function. To understand this, let's take a look of the ```index.html``` file in the ```public``` folder:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>

```

Notice in the ```body``` there's a ```<div></div>``` with ```id="root"```. Therefore, ```ReactDOM.createRoot(document.getElementById('root'));``` basically means whatever the contents we wrote in ```root```, it will be injected into the empty ```<div>``` tag. In this case is the content inside ```App.js```, and if we change the content in ```App.js``` as
```
//App.js
const App = () => {
  return (
    <div className="App">
      <p>Hello</p>
    </div>
  );
}

export default App;
```
You will see the following
![](appjs.png)

This is basically how React works

## JSX
Taking the ```App.js``` code above as an example, JSX is a html-like syntax that is being used in React, they have some syntax difference. For example ```class``` attribute in HTML becomes ```className``` in JSX, and JSX also combines the functionality of eventlistener for example JSX has ```onClick``` attribute which is basically ```addEventListener('click',()=>{})```. We will be using JSX extensively when writing React.

Another important difference is JSX allows ***Embedding Expressions*** in React. For example ```App.js``` can be written equivalently as follows
```
//App.js
const App = () => {
  const text = "Hello"

  return (
    <div className="App">
      <p>{text}</p>
    </div>
  );
}

export default App;
```
The result will still be
![](appjs.png)
You can put any valid JavaScript expression inside the ```{}``` expression such as ```{2+3}```, ```{person.firstname}```. It will get executed based on the JavaScript rule


## Components
```App.js``` itself is a component in React, and when importing ```App``` component into other file or component, it will becomes a tag like normal HTML tag.

For example when importing ```App``` component into ```index.js```, you can see they use the syntax ```<App />``` it is called self closing tag. By coding convention, the component name should be capitalized such as ```App.js```

***Note, as the name suggests, when you are writing the components, it can only take one component inside ```return``` function, therefore you need to wrap everything inside the ```div``` tag as I have shown in the ```App.js``` example***

### Functional and Class Component

There are two ways of writing the components: ***Functional Component and Class Component***

```
// Functional Component
import React, { useState } from "react";
  
const Counter = (props) =>{
    const [count, setCount] = useState(0); // Will cover it in Hooks
  
    const increase = () => {
        setCount(count+1);
    }
  
    return (
        <div>
            <h1>{props.headline}</h1> // Will cover it in Props
          <h2>{count}</h2>
            <button onClick={increase}>Add</button> // Will cover it in Events
        </div>
    )
}  
  
  
export default Counter;

```

```
// Class Component
import React, { Component } from "react";
  
class Counter extends React.Component{
    constructor(){
        super();
        this.state={
            count :0
        };
        this.increase=this.increase.bind(this);
    }
      
   increase(){
       this.setState({count : this.state.count +1});
   }
  
    render(){
        return (
            <div>
               <h1>{this.props.headline}</h1>
               <h2> {this.state.count}</h2>  
               <button onClick={this.increase}>Add</button>
  
            </div>
        )
    }
}
  
export default Counter;
```

***Class Component*** is more OOP style while ***Functional Component*** is more FP style. According to the React official doc, developers are encouraged to use ***Functional Component***, so for the later section, we will use ***Functional Component*** when showing the code example.

### Props
When dealing with different components, if becomes a problem how to communicate or tansfer data between each components, now that's when Props comes into play. There are two main types of data transfer: ***Parent to Child*** and ***Child to Parent***

### Parent to Child
For example this is our ```App.js``` file
```
// App.js
const App = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
      <p>My name is Steven</p>
    </div>
  );
}

export default App;
```
Now I want to create a new component called ```Name.js``` and pass ``` <p>My name is Steven</p>``` inside ```Name.js```.

First we create Name.js file:
```
// Name.js
const Name = (props) => {
    return (
      <div>
      </div>
    );
  }
  
export default Name;
```
Notice I put ```props``` argument inside the ```Name``` function (in functional component, a component is also a function), ```props``` is a argument that React gives to enable data transfer between components, you can also use another name such as ```const Name = (data) => {}```, but by coding convention, we will be using ```props```

You might also notice there's ```export default COMPONENT_NAME;``` at the end of each component file, this is used to allow the other files import this component file.

Now in ```App.js```, let's import ```Name.js```
```
// App.js
import Name from "./Name.js"

const App = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Name text={"My name is Steven"}/>
    </div>
  );
}

export default App;
```

As I said in the beginning of ***Components Section*** , ```Name``` component becomes a self closing tag and being imported into the ```App.js``` by the importing statement ```import Name from "./Name.js"```.

Also we notice inside the ```Name``` tag, there's a ```text``` attribute with the value ```"My name is Steven"``` inside the ```{}```. As I said before, if you want to write JavaScript code inside JSX, you have to use ```{}``` to wrap them up.

```text``` attribute is a custom attribute that is given to ```Name``` component so we can access it in ```Name.js``` using ```props``` object like ```props.text```. 

***Note ```text``` is not a built in attribute, we could of give it other name such as ```<Name name={"My name is Steven"}/>```***

Now in order to retrive the value in ```Name.js```, we do the following
```
// Name.js
const Name = (props) => {
    return (
      <div>
        {props.text}
      </div>
    );
  }
  
  export default Name;
```
Notice it's being wrapped inside ```{}``` because again ```props``` is a javaScipt object and ```props.text``` is one of it's properties. Now the webpage looks like this
![](name.png)

Now you know how to pass the value from parent component down to the child component, and next we will learn how to pass value from child component from parent component.

### Child to Parent


## Tutorial (Optional)

[Tutorial](https://www.youtube.com/watch?v=TlB_eWDSMt4)
