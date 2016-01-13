
##Simple redux starter example for dsmjs (jan 12th 2016) [![NPM version](https://img.shields.io/npm/v/markdown-toc.svg)](https://www.npmjs.com/package/markdown-toc)

- [Basic Setup](#basic-setup)
  * [Get up and running](#get-up-and-running)
  * [Web Browser](#web-browser)
  * [Checkout first commit](#checkout-first-commit)
  * [Checkout subsequent commits](#checkout-subsequent-commits)
- [Koding.com](#koding)
  * [Follow along with (60 sec setup)](#koding)
  * [Bring up local server](#bring-up-local-server)
  * [Refresh local directory](#refresh-local-directory)
  * [Open Index](#open-index)
  * [Preview File](#preview-file)
  * [Change URL](#change-url)

# Basic Setup
## Get up and running:
```bash
$ git clone https://github.com/toranb/redux-beginner-introduction.git
$ cd redux-beginner-introduction/
$ npm install
$ npm run dev
```
## Web Browser: 
```bash
http://localhost:4200
```

## Checkout first commit

```bash
$ git checkout --detach $(git log master --format=%H --grep='starting')
```
##Checkout subsequent commits
```bash
$ git checkout --detach $(git log master --format=%H --grep='step 1:')
$ git checkout --detach $(git log master --format=%H --grep='step 2:')
$ git checkout --detach $(git log master --format=%H --grep='step 3:')
etc...
```

<br /><br />

* * *

# Koding
## Follow along with - 60 sec setup

![alt text](koding/Koding_intro.png)	
![alt text](koding/Koding_vim.png)

####Sign in/up if you don't hav an account (log in with github account)

![alt text](koding/Koding_01.png)	

```bash
$ cd Web/
$ git clone https://github.com/toranb/redux-beginner-introduction.git
$ cd redux-beginner-introduction/
$ npm install
```
![alt text](koding/Koding_npm.png)

####Bring up local server
```bash
$ npm run dev
```
![alt text](koding/Koding_webpack.png)

####Refresh local directory
![alt text](koding/Koding_refresh.png)
####Open Index
![alt text](koding/Koding_index.png)
####Preview File
![alt text](koding/Koding_preview.png)
####Change URL
```
From: http://ujkk62c0e60b.joshmccall.koding.io//redux-beginner-introduction/app/index.html
To:http://ujkk62c0e60b.joshmccall.koding.io:4200/
```
![alt text](koding/Koding_4200.png)	

TADA!!!
