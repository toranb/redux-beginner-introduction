
#Simple redux starter example for dsmjs 
##(jan 12th 2016)

##Get up and running:
```
$ git clone https://github.com/toranb/redux-beginner-introduction.git
$ cd redux-beginner-introduction/
$ npm install
$ npm run dev
```
##In web browser go to: 
```
http://localhost:4200
```
##To Checkout first commit
```
$ git checkout --detach $(git log master --format=%H --grep='starting')
```
##To Checkout subsequent commits
```
$ git checkout --detach $(git log master --format=%H --grep='step 1:')
$ git checkout --detach $(git log master --format=%H --grep='step 2:')
$ git checkout --detach $(git log master --format=%H --grep='step 3:')

etc...
```
