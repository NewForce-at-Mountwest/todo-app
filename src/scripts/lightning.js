/*
You're going to build an app for a coffee shop to keep track of what drinks their staff knows how to make!
1. Set up a new repo with grunt using the setUpGrunt function in your .bashrc file
2. Go into your src/lib directory and run `npm install`
3. In your db.json file, create an empty array called "coffeeDrinks"
4. In your index.html file, create a text input field and a button. The button should have an id of `submit-btn`.
5. Run `grunt` to start your json-server and your http-server (and good ol' es-lint)
*/

/*
1. Add an event listener to the button with an id of `submit-btn`
2. When you click the submit button, get the value of what the user typed into the text input and log it to the console
*/

/*
  1. In the event listener, use the value that the user typed in to build an object representing a coffee drink
  2. The object should have the following properties: name (aka what the user typed in), barrista (a string of your name), and coffee shop location (make something up)
*/

/*
  Using the demo code from class as an example, add the following functionality to your event listener:
  1. When the user clicks the button, you should POST your new coffee drink object to the coffeeDrinks collection in your json-server database
  2. Once the POST has been completed successfully (i.e. in the .then()), you should GET all of the coffee drinks in the database and print them to the DOM

*/
