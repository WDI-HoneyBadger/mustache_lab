// import the package data object
// look at the `package-data.js` file to see the structure
const packageData = require('./package-data');

// Set up your express node app!
// First require your dependancies (express and mustache express)


// define your port

// define your app

// set your app's engine to use mustache-express

// set your app's view engine to html

// set your app's views directory

// tell your app to use the public directory as static

// Set up your root ('/') get route
// This route should render the `index` view
// it should pass the packageData object to the view with the render


// Create a get route for the root with an id parameter (`/:id`)
// this route should render the `show` view
// it should pass only the package with the id that matches the route's parameter


// tell your app to listen on your port
