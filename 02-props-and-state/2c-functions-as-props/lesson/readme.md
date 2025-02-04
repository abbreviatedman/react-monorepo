# Passing Functions As Props

## Overview

We'll be covering:

- Introduction - Why Are Functions Useful As Props?
- Example 1: Alert
- Example 2: Conditional Rendering
- Example 3: Dynamically Changing Styles
- Example 4: Calculating Date

## Introduction - Why Are Functions Useful As Props?

In React, we can pass functions as props to child components. We can pass functions as props to child components to allow the child component to call the function in the parent component.

One common use case for passing functions as props is to allow the child component to update the state of the parent component. This is useful when the child component needs to update the state of the parent component based on user input.

We don't have state yet, but we will soon. For now, we will just be passing functions as props to demonstrate how it works and explore the last kind of prop we can pass.

## Example 1: Alert

Let's say we want to create a button inside our nested component that once clicked will call an alert function that is inside our parent component.

```jsx
const characters = [
  {
    id: 1,
    name: "Rick",
    age: 73,
    isAlive: true,
    favoriteThings: [
      "McNuggies with Szechaun Sauce",
      "Kalaxian Crystals",
      "Portal Fluid",
    ],
  },

  {
    id: 2,
    name: "Morty",
    age: 13,
    isAlive: false,
    favoriteThings: ["Jessica", "Yummy' Yums", "Eyeholes"],
  },

  {
    id: 3,
    name: "Summer",
    age: 17,
    isAlive: false,
    favoriteThings: ["Snake Jazz", "Being Queen", "Parties"],
  },
];

function GreetApp() {
  function greet() {
    alert("WUBBALUBBADUBDUB!");
  }

  return (
    <div>
      <ul>
        {characters.map((character) => (
          <Greeting
            key={character.id}
            name={character.name}
            greetAlert={greet}
            age={character.age}
            isAlive={character.isAlive}
            favoriteThings={character.favoriteThings}
          />
        ))}
      </ul>
    </div>
  );
}

export default GreetApp;
```

And in our sub-component:

```jsx
function Greeting(props) {
  let isAliveMessage = "You appear to have died on this adventure, better make a clone!";
  if (props.isAlive) {
    isAliveMessage = "Congrats on being alive.";
  }
  
  return (
    <div>
      <h1>
        Hey {props.name}, You are {props.age} years old. {isAliveMessage}
      </h1>

      {props.favoriteThings.map((thing, index) => (
	<p key={index}>{thing}</p>
      ))}

      <button onClick={props.greetAlert}>PRESS ME</button>
    </div>
  );
}

export default Greeting;
```

