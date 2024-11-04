# Fire! Fire! Fire!

![bill hader](https://media1.giphy.com/media/3orieLZelMyxenarwQ/giphy.gif)

The real estate market is hot, but we need to make sure it doesn't burn down to the ground. How can we best do that? Let's compile a list of all the firehouses in NYC to make sure that we can keep an eye on things. Oh, and let's build it in React, because everyone knows that Mark Zuckerberg is in cahoots with the FDNY.

### Step 1

Use our old friend `create-react-app` to create a react app.

### Step 2

Let's create two components, `House.js` and `HouseList.js`. Be sure to manage your state in App.js.

In `App.js`, Create 2 properties in state, `firehouses` and `currentHouse`. Import all of the firehouses and save them in state as `firehouses`. We can find all of the firehouse data in the provided json file `firehouses.json`. (If you don't know how to import JSON, the answer is a friendly internet search away. You can make importing it easier by moving `firehouses` to the `src` folder.) Leave `currentHouse` as `null` for now. Let's also create a function that takes in one firehouse as an argument and updates the `currentHouse` state.

### Step 3

`House.js` should be a component that is meant to display the full details of one fire house. In `House.js`, pass the current house as props down and render it to the component IF there is a `currentHouse`. Else, render the words "Select A House"

### Step 4

In `HouseList.js` pass the props of all the firehouses and map over them to render a list of every house. Only display the "FacilityName" property.

Add an onClick function to each of the mapped elements so that the state of current house is updated to the firehouse that is clicked.

### Bonuses

- Style it. Make the FDNY glimmer like FIRE!!!!!

![Elmo celebrating fire](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjJoeWd2dzR1Ym55a3FqcXQ1aTAyMjVtaTUxYWk1OHJ4NWRsd3JuaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yr7n0u3qzO9nG/giphy.gif)

- Allow the user to filter by borough. You can create some simple buttons with click listeners that change the state variable for your firehouses.
- Sort the firehouses. Create a button with an event listener that sorts them by name.
- Sort the firehouses by Engine/Ladder/Squad etc. number (whichever comes first).
