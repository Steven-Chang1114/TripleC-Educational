# Git

[Official Doc](https://git-scm.com/doc)

## Table of Content
### 1. [Set up](#set-up)
### 2. [Repo](#repo)
### 3. [Code management](#code-management)
### 4. [Branches](#branches)

## Intro

Git is a version control tool that helps developers to manage their code such as store contents, maintaining history etc to speed up development speed and efficiency. The general git workflow is illustrated in the diagram below

![](https://cloudstudio.com.au/wp-content/uploads/2021/06/GitWorkflow-4.png)

## Set up

Install git [here](https://git-scm.com/)

After installing, type the following command into the terminal
 ```
git --version
 ```
 It should return the git version if installed successfully 
 

## Repo

Repositories (Repo for short) is an important concept when working with Git, it is basically a container for your project and it's tracked by Git. There are two different types of Repo

- **Local repository:** A repository that is stored in your local computer, your code will be stored in local repository first and then later pushed to the remote repository
- **Remote repository:** A repository stored on the remote server, or you can take it as the "centeralized" code base that allow you to elaborate with other developers

## Code management

### Get started
 
As a little demo, first we make the folder
 ```
mkdir demo
 ```
 And then use the following commnad
 ```
git init
 ```
 That adds a local Git repository to the project (a hidden ```.git``` file will be added to the project). Next, we create a txt file inside the ```demo``` folder and type the following command
 ```
 git status
 ```
 This is a command shows us which files have been changed or tracked, etc. If it is executed successfully, you will see
 ```
 On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        example.txt

nothing added to commit but untracked files present (use "git add" to track)
 ```
 
 ### Staging
  Next, we will learn how to push the code from local repo back to the remote repo. To stage the file, the command is
  ```
git add file1 file2 file3
  ```
  where ```file1```, ```file2```, ```file3``` will be the file you edit, but you can also do
  ```
  git add .
  ```
  to automatically stage all the edited file
  
 ### Commit
 
 After staging the file, a commit is used as a checkpoint for your current status. To do this, type the following command
 ```
 git commit -m "YOUR COMMIT MESSAGE"
 ```
 If it is executed successfully, you will see the following messages:
 ```
 [master (root-commit) 7a3c62c] commit
 1 file changed, 1 insertion(+)
 create mode 100644 example.txt
 ```
And now if you type ```git status``` you will see:
```
On branch master
nothing to commit, working tree clean
```
To see all the previous commits, you can use
```
git log
```
to check the detail for your commit messages. For example in this demo, it will be
```
commit 7a3c62cf2ba9a9152f4d6cf359c2247157774af2 (HEAD -> master)
Author: GITHUB_USERNAME <s0000000@email.com>
Date:   Tue Apr 17 21:54:41 2022 -0700

    commit
```

## Branches
