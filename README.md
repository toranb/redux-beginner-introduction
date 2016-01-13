



Get up and running:
```
git clone https://github.com/toranb/redux-beginner-introduction.git
cd redux-beginner-introduction/
npm install
npm run dev
```
In web browser go to: 
```
http://localhost:4200
```
To start at the beginning: 
To view hash of first commit:
```
git rev-list --max-parents=0 HEAD
```
To Checkout first commit
```
git checkout --detach $(git log master --format=%H --grep='starting')
```
To Checkout first commit
```
git checkout --detach $(git log master --format=%H --grep='step 1:')
git checkout --detach $(git log master --format=%H --grep='step 2:')
git checkout --detach $(git log master --format=%H --grep='step 3:')
