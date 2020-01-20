This is a school project for Codaisseur code academy. We are trying to make a simple netflix clone by using data from the Open Movie database. In our documentation we will refer to the Open Movie Database as OMDB.

## Project description

Title: Badflix // Batflix // Bestflix
Basically netflix but as a social media thing.

We will start by making a static feed of a few movies that people can upvote downvote etc
Then we make it possible to search and add the movie items to a feed

You can:

1. upvote and downvote movies
2. comment
3. create a list of your favorite movies.
4. select categories like
   -horror
   -action

## Technical requirements

Beginner steps.

1. Display an item from the Open movie database with the following items.

- picture
- title
- year
- description

2. Display 10 movies or less from a particular topic. I.e.

- Batman categorie. (As we progress we will try to make more interesting categories. )

3. There is a search bar with a button. When you press the search button you will aquire 10 movie items from the OMDB.
4. Display a movie from a categorie
5. there is a upvote and downvote button
6. there is a comment box
7. there is a loading button / display (shows that it's loading)
   Medium steps.

## Intermidiate steps.

1. There is a search bar with a button. When you press the search button you will aquire 10 movie items from the OMDB. => There are more options. Search on categorie or pagination.

# prerequirements

## Bootstrap

I used the following source to install bootstrap.
[BlogRocket: React Bootstrap tutorial][https://blog.logrocket.com/how-to-use-bootstrap-with-react-a354715d1121/]

### Import Bootstrap as a dependency

If you are using a build tool or a module bundler such as webpack, then this is the preferred option for adding Bootstrap to your React application. You will need to install Bootstrap as a dependency for your app.

`npm install bootstrap`
Or if you are using Yarn:

`yarn add bootstrap`
Once you have Bootstrap installed, you will go ahead to include it to your app’s entry JavaScript file. If you are used to create-react-app, this should be your src/index.js file.

```javascript
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
```

Notice that we have imported the Bootstrap minified CSS as the first dependency. With this, we can go ahead using the built-in Bootstrap classes in our React app components. However, before you can use Bootstrap’s JavaScript components in your app, you’ll need to install jquery and popper.js if they are not already installed.

`npm install jquery popper.js`
Next, you will make additional changes to the src/index.js file to add the new dependencies as shown in the following snippet.
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
import \$ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Dropdown />, document.getElementById('root'));
registerServiceWorker();
```
Here we added imports for \$ and Popper. We also imported the Bootstrap JavaScript minified bundle file. Now you can use Bootstrap JavaScript components in your React app.
