### Tech stack
* [React](https://github.com/facebook/react) & [React Router 4](https://github.com/ReactTraining/react-router)
* [Node](https://github.com/nodejs) & [Express](https://github.com/expressjs/express)

### Setting up the basic environment in Node:
You will need to install Node globally if you do not have it installed already on your local drive:
```
sudo npm install -g
```
Installing Nodemon is also highly recommended as it watches for any changes that are saved and will automatically restart your application with the updated code base.
```
npm install nodemon -g 
```

### Installing dependencies
Run the following command in your root directory, once this repo is cloned to your local drive, to install prescribed dependencies (located in package.json file): 
```
npm install
```

###In order to run the program on localhost:8080
In your root directory, run the command: 
```
npm run react-dev
```

In another terminal window, run the command:
```
npm run server-dev
```