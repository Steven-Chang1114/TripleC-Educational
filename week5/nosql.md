# NoSQL

[Official Doc (MongoDB)](https://www.mongodb.com/)

## Table of Content
### 1. [Intro](#intro)
### 2. [CAP](#cap)
### 3. [Set up](#set-up)
### 4. [Vocab](#vocab)
### 5. [Syntax](#syntax)
* [CREATE](#create)
* [INSERT](#insert)
* [SELECT](#select)
* [UPDATE](#update)
* [INDEX](#index)
* [JOIN](#join)
* [DROP](#drop)


## Intro
NoSQL databases are commonly used for specific data models and have flexible schemas for building modern applications. It is widely recognized for its ease of development, functionality, and performance at scale. It is optimized specifically for applications that require large data volume, low latency, and flexible data models, which are achieved by relaxing some of the data consistency restrictions of other databases.

Among all the NoSQL databases, mongoDB is the most famous and widely used ones, so in this education program we will cover the usage of mongoDB. MongoDB is a Document Database that stores the data in JSON (key-value) format 



## CAP
In the previous workshop we said the NoSQL database has CAP properties, and now we are going to explain what each of them means:

***Consistency***

Consistency means that all clients see the same data at the same time, no matter which node they connect to. For this to happen, whenever data is written to one node, it must be instantly forwarded or replicated to all the other nodes in the system before the write is deemed ‘successful.’

***Availability***

Availability means that that any client making a request for data gets a response, even if one or more nodes are down. Another way to state this—all working nodes in the distributed system return a valid response for any request, without exception.

***Partition tolerance***

A partition is a communications break within a distributed system—a lost or temporarily delayed connection between two nodes. Partition tolerance means that the cluster must continue to work despite any number of communication breakdowns between nodes in the system.

In addition to that, noSQL has the characteristics of being ***Scalable*** which means you can scale the database horizontally which is much better and less expensive than scale it vertcally, and it is also ***Schemaless*** which means the data stored has no specific structure which enables flexibility. However the downside of NoSQL is its inefficient query time compare to SQL database

## Set up





