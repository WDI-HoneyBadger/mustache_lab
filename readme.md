# Express! Mustache!

![](https://media.giphy.com/media/UXlE9tMhPaJJC/giphy.gif)

Today we ventured into the new world of Node and started making our very own servers! This is all very new and exciting so lets get some practice.

## Completion:
Completion is parts 1-4. As always, more is better, healthy living is Express.

### What is express.js?

Express.js is a simple web framework for Node.js.

It's biggest highlights are:

- extremely lightweight/minimalistic (gives you the power to have more control over your application)
- easy to create routes
- very simple to apply middleware

## Assignment

### Part 1 - Setting up node

1. In terminal go to the `express-app` directory.
2. Run `npm init` _(hit enter a bunch of times to accept the defaults and see the new [package.json](https://docs.npmjs.com/cli/init) file)_
3. Run `npm instal express --save`. _(The `--save` option adds the module as a dependency in your package.json file. This allows anyone looking at your app (i.e. a dev team member) to be able to see what your app is "made of" and if they clone your app and run `npm i` all dependencies will be installed.)_
4. Run `npm install mustache-express --save`

Take a look at the `package.json` file. Express and Mustache-Express should be included as dependencies:

```json
"dependencies": {
  "express": "^4.15.3",
  "mustache-express": "^1.2.4"
}
```

### Part 2 - Setting up the App

Lets start working in `index.js` to set up our app's structure. _(There are lots of new steps here so key words will be `highlighted` to help.)_

1. First `require` your dependancies (express and mustache-express).
2. Define your `port`.
3. Define your `app` using the express dependency you defined earlier.
4. `Set` your `app` engine to use `mustache-express`.
5. `Set` your `app` `view engine` to `html`.
6. `Set` your `app` `views` `directory`.
7. Tell your `app` to `use` the `public` `directory` as `static`.
8. Tell your `app` to `listen` on your `port`.

### Part 3 - Routing in Express

Time to set up our routes! Here is a reminder of what a route looks like:
```javascript
app.get('/', (req, res)=>{
  res.render('index', {
    title: 'Sending Data',
    text: 'This data can be used by mustache in the view!'
  });
});
```
Lets go over what is going on here:

- You are telling the `app` that when it receives a `get` request to the path `/` it will preform an action.
- This action is defined by an anonymous function that is taking two parameters:
    - `req` - The request.
    - `res` - The response.
- You are then telling the response to render a view. Earlier we told the app to look for views in the `views` directory. Since we are passing `'index'` as an argument, it will find the `index.html` file to render.
- We are also sending a data object with the render. This object will be passed through to the template engine _(which we set up to be mustache-express earlier)_. The data then can be used in the view to render the information we provide _(we will get to that in part 4)_.

Feel free to look at the **express docs** to learn more!

- [Basic Routing](https://expressjs.com/en/starter/basic-routing.html)
- [Static Files](https://expressjs.com/en/starter/static-files.html)
- [API Reference](https://expressjs.com/en/4x/api.html)

Using this information, lets set up a couple routes.

1. Set up your root ('/') get route
    - This route should render the `index` view
    - it should pass the packageData object to the view with the render
2. Create a get route for the root with an id parameter (`/:id`)
    - this route should render the `show` view
    - it should pass only the package with the id that matches the route's parameter

    ***HINT:***
    > Read about [`req.params`](https://expressjs.com/en/4x/api.html#req.params) and [the array `.find()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find?v=example)

3. Go to `localhost:[YOUR PORT HERE]` to see if your `index.html` renders.
4. Go to `localhost:[YOUR PORT HERE]/1` to see if your `show.html` renders.

### Part 4 - Templating Our Data

Now lets work with mustache-express to render our data to our pages! We will be working in `views/index.html` and `views/show.html`.

1. Read [Mustache's GitHub](https://github.com/janl/mustache.js) to refresh yourself on how mustache works.
2. Look over the `package-data.json` file to see the structure of your data.
3. In `views/index.html` render the following using mustache:
    - A `h1` tag with the title
    - A `h2` tag with the text
    - Loop through the packages and render:
        - an `a` tag for each of the packages with the package name that links to that package's show package.

        ***Hint:***
        > How did we set up the route for the show page?

        - an `img` tag with the package's image

4. In `views/show.html` render the following using mustache:
    - A title in the `head` with the name of the NPM package
    - A `h1` tag with package name
    - A `p` tag with the package category
    - An `img` tag with the package's image
    - An `a` tag that links back to all the packages

### BONUS - Another page!

The only way to feel more comfortable with this material is by doing it. Repeatedly. Often. So lets add another page!

1. Set up another get route in your `index.js` file to `/random`.
2. This route's callback should render a view called `random` and send a random package from the `packageData` object.
3. Create another html file in the `/views` directory named `random.html`. Add an `h1` tag informing the viewer that they are viewing a random NPM package.
4. Using mustache render the package's information including the name, category and image.
5. Add an `a` tag to the same route to view another random package.
6. Add an `a` tag to the `index.html` that will direct them to the random page.

### SUPER BONUS - Don't forget about CSS!

- Style your pages! Make them look pretty. It may be repetitive to style everything, but the more you do it, the easier it will be.
- Use flexbox to arrange your NPM package list
- Add a [Google Font](https://fonts.google.com/)
- Add some cool [default colors](http://htmlcolorcodes.com/color-names/) or mix your own using the color factory we made this morning!
