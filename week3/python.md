# Python

[Official Doc](https://docs.python.org/3/)

## Table of Content
### 1. [Intro](#intro)
### 2. [Set up](#set-up)
### 3. [Syntax](#syntax)
    * [Variable declaration](#variable-declaration)
    * [String](#string)
    * [list](#list)
    * [Tuples](#tuples)
    * [Set](#set)
    * [Dictionary](#dictionary)
    * [Function](#function)
    * [Loop and if statement](#loop-and-if-statement)
    * [Lambda function](#lambda-function)

## Intro

Python is an interpreted, object-oriented, high-level programming language with dynamic semantics developed by Guido van Rossum. It was originally released in 1991. It uses English keywords frequently where as other languages use punctuation, and it has fewer syntactical constructions than other languages.

## Set up
You can download Python [here](https://www.python.org/downloads/)(Do python3 version). After it is properly installed you can verify by typing ```python3``` in the terminal and you should see
```
Python 3.10.0 (v3.10.0:b494f5935c, Oct  4 2021, 14:59:19) [Clang 12.0.5 (clang-1205.0.22.11)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> 
```
Then you can play around with python code in the prompts. If you want to exit just simply type ```exit()``` to go back to the terminal.

In addition, you should also have ```pip``` installed. ```pip``` is package installer for Python (like ```npm``` for JS). To check if it is properly installed type ```pip --version``` you should see something like
```
pip 21.2.4 from /YOUR_USER_DIR/opt/anaconda3/lib/python3.9/site-packages/pip (python 3.9)
```
Usually, pip is automatically installed if you download Python from [www.python.org](www.python.org). However if it not the case you can do
```
python -m ensurepip --upgrade
```
Then
```
python get-pip.py
```

## Syntax
Take it as a Hello world example. the code is as follows
```
print("Hello World")
```
or
```
txt = "World"
print("Hello" + txt)
```

### Variable declaration
To define a variable, it's very easy
```
flag = False
one = 1
one = 1.0
message = "Hello World"
arr = [1,2,3]
arr2 = [1,2, False, "Hi"]
dict = {
  "name": "Steven",
  "age": 21,
  "status": "Junior"
}
```
Python has no command for declaring a variable. A variable is created the moment you first assign a value to it. However, unlike JS, there's still type restriction when doing operation with different types of data
```
a = 1
b = "2"
print(a+b)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# TypeError: unsupported operand type(s) for +: 'int' and 'str'
```
You can also convert variable by casting
```
x = str(3)    # x will be '3'
y = int(3)    # y will be 3
z = float(3)  # z will be 3.0
```

### String
Similar as other programming language, string is a array of characters. Therefore you can do the following.
```
name = "Steven Chang"
print(name[1]) # t
```
One thing to notice in string is the ```\n```, which means newline.
```
print("Hello\nWorld")
```
Will print
```
Hello
World
```
However if you really want to print ```\n``` you can do another backslash
```
print("Hello\\nWorld") # Hello\nWorld
```
There are also some popular and very useful stirng method
```
txt = "Hello World"
print(txt[2:5])                 # 'llo'
print(txt[:5])                  # 'Hello'
print(txt[2:])                  # 'llo World'
print(txt[-5:-2])               # 'Wor'
print(txt.upper())              # 'HELLO WORLD'
print(txt.lower())              # 'hello world'
print(txt.replace("H", "J"))    # 'Jello, World'
print(txt.split(","))           # ['Hello', ' World!']

txt = " Hello World " 
# Notice the blank at the end and the beginning of the string
print(txt.strip())              # 'Hello World'
```

### list
List is same as array, and it can store elements with different types.
```
a = [1, "2", 3, 4, "5", [], True]

print(len(a))                 # 7
print(a[0])                   # 1
print(a[1])                   # '2'
print(a[-1])                  # True
print(a[-2])                  # []
print(a[2:5])                 # [3, 4, '5']
print(a[:4])                  # [1, '2', 3, 4]
print(a[2:])                  # [3, 4, '5', [], True]
print(a[-4:-1])               # [4, '5', []]
print(3 in a)                 # True
print(9 in a)                 # False

a.insert(3, "Hello")
print(a)                      # [1, '2', 3, 'Hello', 4, '5', [], True]

a[0] = 0
print(a)                      # [0, '2', 3, 'Hello', 4, '5', [], True]

a[1:2] = ["7", "8"]
print(a)                      # [0, '7', '8', 3, 'Hello', 4, '5', [], True]

a.append('world')
print(a)                      # [0, '7', '8', 3, 'Hello', 4, '5', [], True, 'world']

a.remove('Hello')
print(a)                      # [0, '7', '8', 3, 4, '5', [], True, 'world']

a.pop(1)                      # 7
print(a)                      # [0, '8', 3, 4, '5', [], True, 'world']

a.pop()                       # 'world'
print(a)                      # [0, '8', 3, 4, '5', [], True]

b = [1,2,3]
a.extend(b)                   # 'world'
print(a)                      # [0, '8', 3, 4, '5', [], True, 1, 2, 3]
print(a+b)                    # [0, '8', 3, 4, '5', [], True, 1, 2, 3, 1, 2, 3]
```
To loop the list do
```
for x in a:
  print(x)
```
Equivalently
```
for i in range(len(a)):
  print(a[i])
```
It gives
```
0
8
3
4
5
[]
True
1
2
3
```

There are some very power feature in python list which is called the ***list comprehension***. I will not cover it here but there is a [short article](https://www.w3schools.com/python/python_lists_comprehension.asp) that I highly recommended to read through. It takes about 5-10 minutes to read

Even though we said list can contain different types of data, sometimes it will still cause error for example when sorting the list
```
a.sort()
```
It raises
```
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: '<' not supported between instances of 'str' and 'int'
```
To demonstrate, let's do
```
thislist = [100, 50, 65, 82, 23]
thislist.sort()
print(thislist)                     # [23, 50, 65, 82, 100]

thislist = [100, 50, 65, 82, 23]
thislist.sort(reverse = True)
print(thislist)                     # [100, 82, 65, 50, 23]
```

To make a copy of list you cannot do ```b = a``` because every changes on ```a``` will still applied to ```b```. Instead you should do ```b = a.copy()``` or ```b = list(a)```


### Tuples
A tuple is a collection which is ordered and ***unchangeable***.
The syntax is as below:
```
a = (1,2,3,4,5,6,7)
print(a)            # (1,2,3,4,5,6,7)
print(a[1])         # 2
print(a[-1])        # 7
print(a[2:5])       # (3,4,5)
print(a[:4])        # (1, 2, 3, 4)
print(a[2:])        # (3, 4, 5, 6, 7)
print(a[-4:-1])     # (4, 5, 6)
print(2 in a)       # True
```
Since tuple is unchangeable, so if you really want to edit the tuple you should convert it to list and do the manipulation and then change it back to tuple
```
b = list(a)
b[1] = 3
a = tuple(b)
print(a)            # (1, 3, 3, 4, 5, 6, 7)
```

### Set
A set is a collection which is unordered, unchangeable (but you can still add and remove item), and unindexed, and you cannot store duplicate items in a set (will not raise error, just simply won't work)

```
s = {1,2,3}
print(s)                        # {1,2,3}
print(len(s))                   # 3

s = {1,1,2,3}
print(s)                        # {1,2,3}

s = {1,1,'2',3}
print(s)                        # {1, 3, '2'}

s = {1,1,'2',3, []}
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unhashable type: 'list'

s = {1,1,2,3}
print(1 in s)                   # True

# You cannot access individual item in the set since it's unindexed

s.add(5)
print(s)                        # {1, 3, '2', 5}

a = {1,2,3}
b = {4,5,6}
a.update(b)
print(a)                        # {1, 2, 3, 4, 5, 6}

a = {1,2,3}
b = [4,5,6]
a.update(b)
print(a)                        # {1, 2, 3, 4, 5, 6}

a.remove(3)
print(a)                        # {1, 2, 4, 5, 6}

a.pop()                         # 1 (You don't know which item got removedß)
print(a)                        # {2, 4, 5, 6}

for x in a:
  print(x)

# 2
# 4
# 5
# 6
```

### Dictionary

Dictionary is like Object in JS, it's simply key value pair

```
dic = {
    "name": "Steven",
    "age": 21
}

print(dic)                  # {'name': 'Steven', 'age': 21}
print(len(dic))             # 2
print(dic['age'])           # 21
print(dic.get('age'))       # 21
print(dic.keys())           # dict_keys(['name', 'age'])
print(dic.values())         # dict_values(['Steven', 21])
print(dic.items())          # dict_items([('name', 'Steven'), ('age', 21)])
print(21 in dic)            # False
print('age' in dic)         # True

dic['age'] = 22
print(dic)                  # {'name': 'Steven', 'age': 22}

dic.update({"age": 23})
print(dic)                  # {'name': 'Steven', 'age': 23}

dic["major"] = 'CE'
print(dic)                  #{'name': 'Steven', 'age': 22, 'major': 'CE'}

dic.pop("major")
print(dic)                  #{'name': 'Steven', 'age': 22}

dic.update({"major": 'CE'})
print(dic)                  #{'name': 'Steven', 'age': 22, 'major': 'CE'}
```

### Function
```
def helloWorld():
    print("Hello World")

def add1(x):
    return 1 + x

def adder(x, y=2):
    return x + y

helloWorld()            # "Hello World"
add1(2)                 # 3
adder(2, 3)             # 5
adder(1)                # 3
```

### Loop and if statement
```
# If statement

a = 1
b = 2

if a > b:
    print("a is greater than b")
elif a < b:
    print("a is smaller than b")
else:
    print("a == b")

# While loop
i = 1
while i < 6:
  print(i)
  if i == 3:
    break
  i += 1

# For loop
arr = [1,2,3]
for x in arr:
  print(x)

# Equivalently

for i in range(len(arr)):
    print(arr[i])

# For loop for dictionaries
dic = {
    "name": "Steven",
    "age": 21,
    "major": "CE"
}

for x in dic:
  print(x)
# name
# age
# major

for x in dic:
  print(dic[x])
# Steven
# 22
# CE

for x in dic.values():
  print(x)
# Steven
# 22
# CE

for x in dic.keys():
  print(x)
# name
# age
# major

for x, y in dic.items():
  print(x, y)
# name Steven
# age 22
# major CE
```


### Lambda function
A lambda function is a small anonymous function, it can take any number of arguments, but can only have one expression.

```
x = lambda a : a + 10
print(x(5))                     # 15

lst = [('candy','30','100'), ('apple','10','200'), ('baby','20','300')]
lst.sort(key=lambda x:x[0])
print(lst)                      # [('apple', '10', '200'), ('baby', '20', '300'), ('candy', '30', '100')]

lst = [('candy','30','100'), ('apple','10','200'), ('baby','20','300')]
lst.sort(key=lambda x:x[1])
print(lst)                      # [('apple', '10', '200'), ('baby', '20', '300'), ('candy', '30', '100')]

lst = [('candy','30','100'), ('apple','10','200'), ('baby','20','300')]
lst.sort(key=lambda x:x[2])
print(lst)                      # [('candy', '30', '100'), ('apple', '10', '200'), ('baby', '20', '300')]
```

## Tutorial (Optional)

[Tutorial (Python)](https://www.youtube.com/watch?v=rfscVS0vtbw)
