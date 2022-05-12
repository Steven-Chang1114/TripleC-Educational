# SQL

[Official Doc (MySQL)](https://www.mysql.com/)

## Table of Content
### 1. [Intro](#intro)
### 2. [Relational Database and No Relational Database](#relational-database-and-no-relational-database)
### 3. [ACID](#acid)
### 4. [Set up](#set-up)
### 5. [Vocab](#vocab)

## Intro

SQL (structured query language) is a querying language used for managing data held in a relational database. Among all those SQL languages, MySQL is the most famous and the most commonly used ones. Therefore in this case we will be using MySQL to learn SQL

## Relational Database and No Relational Database
In short, relational databases (SQL databases or Relational Database Management System(RDBMS)) store data in rows and columns like a spreadsheet while non-relational databases (NoSQL database) uses a storage model optimized for specific requirements of the type of data being stored. There are four popular non-relational types: document data store, column-oriented database, key-value store and graph database.  Often combinations of these types are used for a single application.

* SQL databases
  * They work with structured data.

  * Relationships in the system have constraints, which promotes a high level of data integrity.

  * There are limitless indexing capabilities, which results in faster query response times.

  * They are excellent at keeping data transactions secure.

  * They provide the ability to write complex SQL queries for data analysis and reporting.

  * Their models can ensure and enforce business rules at the data layer adding a level of data integrity not found in a non-relational database.

  * They are table and row oriented.

  * They Use SQL (structured query language) for shaping and manipulating data, which is very powerful.

  * SQL database examples: MySql, Oracle, Sqlite, Postgres and MS-SQL. NoSQL database examples: MongoDB, BigTable, Redis, RavenDb, Cassandra, Hbase, Neo4j and CouchDb.

  * SQL databases are best fit for heavy duty transactional type applications.
  * Can be scaled vertically, by increasing the processing power of existing hardware
  * Follows ***ACID*** properties (Atomicity, Consistency, Isolation, Durability)
  
* NoSQL databases
  * They have the ability to store large amounts of data with little structure.

  * They provide scalability and flexibility to meet changing business requirements.

  * They provide schema-free or schema-on-read options.

  * They have the ability to capture all types of data “Big Data” including unstructured data.

  * They are document oriented.

  * NoSQL or non-relational databases examples:MongoDB, Apache Cassandra, Redis, Couchbase and Apache HBase.

  * They are best for Rapid Application Development. NoSQL is the best selection for flexible data storage with little to no structure limitations.

  * They provide flexible data model with the ability to easily store and combine data of any structure without the need to modify a schema.
  * Can be scaled horizontally by using a master-slave architecture with additional servers or nodes
  * Follows ***CAP*** properties (Consistency, Availability, Partition tolerance)

## ACID
***Atomicity*** means all transactions must succeed or fail completely. They cannot be partially-complete, even in the case of system failure.

***Consistency*** means that at each step the database follows invariants: rules which validate and prevent corruption.

***Isolation*** prevents concurrent transactions from affecting each other. Transactions must result in the same final state as if they were run sequentially, even if they were run in parallel.

***Durability*** makes transactions final. Even system failure cannot roll-back the effects of a successful transaction.

## Set up
Install MySQl [here](https://dev.mysql.com/downloads/mysql/). It will ask you to choose a password and make sure you remember them! (The default username is ***root***)

## Vocab
Before we start to learn the syntax, there are some vocabs you need to know. The data is usually stored in ***Table*** which looks like a Excel spread sheets. A ***Table*** has ***Columns*** and ***Rows***, a ***Column*** contains data of one and the same kind, for example, the column age while a ***Row*** is a group of related data, for example, the data of one user. Therefore a Database is actually the collection of ***Tables***. Here's an example:
 


## Tutorial (Optional)

[Tutorial](https://www.youtube.com/watch?v=HXV3zeQKqGY)
