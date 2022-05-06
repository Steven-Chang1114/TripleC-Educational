# Flask

[Official Doc](https://flask.palletsprojects.com/en/2.1.x/)

## Table of Content
### 1. [Intro](#intro)
### 2. [Set up](#set-up)
### 3. [Client Server architecture](#client-server-architecture)
* [Restful API](#restful-api)
### 4. [HTTP](#http)
* [HTTP Request Type](#http-request-type)
* [HTTP response status codes](#http-response-status-codes)
### 5. [Syntax](#syntax)

## Intro
Flask is a web framework, it’s a Python module that lets you develop web applications easily. It’s has a small and easy-to-extend core: it’s a microframework that doesn’t include an ORM (Object Relational Manager) or such features.

Even though Flask has a strong support toward web development such as template engine. We will not use it here since we already know React, a much more powerful tool. The reason we use Flask over other framework is because of its simplicity of its syntax. In this educational program, we will use Flask as a pure ***Restful API***

## Set up

To install Flask, simply do
```
pip3 install flask
```

OR there's a more advanced way of setting it up, first install virtualenv
```
pip3 install virtualenv
```
This is used for creating lightweight “virtual environments” to avoid problems with conflicting libraries which happens a lot in Python. To create the virtual environment, do the following command in your working directory
```
virtualenv env
```
To activate the environment, do
```
source env/bin/activate
```
Now you should see ```(env)``` at the front of your terminal command line. After that anything that we do will be contained inside of that virtual environment. Now insall flask inside the vm
```
pip3 install flask
```

For the debuging and testing purposes, it's highly recommended to download [Postman](https://www.postman.com/) in [here](https://www.postman.com/downloads/). It's a tool that you can directly fire request to your api without actually building a frontend interface.


## Client Server architecture
The following graph explains the architecture
![](https://www.serverwatch.com/wp-content/uploads/2021/07/The-Client-Server-Model.png)

It's a modern architecture that isolate frontend and backend, so each developers can only focus on their task and eventually use ***Restful API*** to connect them, and this is the architecture that is commonly applied in most of the TripleC project.

### Restful API
An API, or application programming interface, is a set of rules that define how applications or devices can connect to and communicate with each other. A REST API is an API that conforms to the design principles of the REST, or representational state transfer architectural style. For this reason, REST APIs are sometimes referred to RESTful APIs.

In shorts, there are four main operation in Restful API, Create, Read, Update and Delete. We call it ***CRUD*** for convenience.

## HTTP
The Hypertext Transfer Protocol (HTTP) is designed to enable communications between clients and servers, and it works as a request-response protocol between a client and server.

For the full HTTP content, refer the doc [here](https://developer.mozilla.org/en-US/docs/Web/HTTP)

### HTTP Method
There are some commonly used methods to enable HTTP communication
| Method      | Description |
| :---        |    :----:   |  
| GET     | The GET method is used to retrieve information from the given server using a given URI. Requests using GET should only retrieve data and should have no other effect on the data. | 
| POST  | A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms. | 
| PUT    | Replaces all current representations of the target resource with the uploaded content. | 
| DELETE  | Removes all current representations of the target resource given by a URI.  |
| PATCH  | The PATCH method is used to apply partial modifications to a resource. |

Among them, ```GET``` and ```POST``` are the two most common methods. Here are some difference

GET
* GET requests can be cached
* GET requests remain in the browser history
* GET requests can be bookmarked
* GET requests should never be used when dealing with sensitive data
* GET requests have length restrictions
* GET requests are only used to request data (not modify)

POST
* POST requests are never cached
* POST requests do not remain in the browser history
* POST requests cannot be bookmarked
* POST requests have no restrictions on data length

The implementation varies depends on the language and framework. However the main idea is when using ```GET``` request, the ```params``` is embedded inside the url such as ```http://www.mysite.com/mypage.html?var1=value1&var2=value2&var3=value3``` whereas ```POST``` requests embedded those params inside the ```payload```

In ***Rest API***, CRUD is ```POST```, ```GET```, ```PUT```, ```DELETE``` respectively.


### HTTP response status codes
Status code indicites the status of the respective HTTP request and indicate whather it is received successfully and gives proper information to the developer

Here are some status code that is commonly seen
| Code    | Meaning | Description |
| :---    | :------:    |    :----:   |  
| 100  | Continue | Everything so far is OK and that the client should continue with the request or ignore it if it is already finished. | 
| 200  | OK |  The request has succeeded. A 200 response is cacheable by default. | 
| 201 |Created  |The request has succeeded and has led to the creation of a resource. | 
| 204  | No Content  | A request has succeeded, but that the client doesn't need to navigate away from its current page | 
| 304 | Not Modified  | There is no need to retransmit the requested resources. |
| 400 | Bad Request  | The server cannot or will not process the request due to something that is perceived to be a client error |
| 400 | Bad Request  | The server cannot or will not process the request due to something that is perceived to be a client error |
| 401 | Unauthorized | The client request has not been completed because it lacks valid authentication credentials for the requested resource |
| 403 | Forbidden | The server understands the request but refuses to authorize it. |
| 404 | Not Found | The server cannot find the requested resource. |
| 409 | Conflict | A request conflict with the current state of the target resource. |
| 410 | Gone | Access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.|
| 500 | Internal Server Error | The server encountered an unexpected condition that prevented it from fulfilling the request.|
| 501 | Not Implemented | The server does not support the functionality required to fulfill the request.|
| 502 | Bad Gateway | The server, while acting as a gateway or proxy, received an invalid response from the upstream server.|
| 503 | Service Unavailable | The server is not ready to handle the request.|

Typically, ```1..``` means informational response, ```2...``` means success, ```3..``` means redirection, ```4..``` means client errors, ```5..``` means server errors.

### Syntax