import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, useParams, Redirect } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <Route exact path="/dogs">{defaultProps.dogs.map(d => d.name)}</Route> */}
      {/* First make a dog list component and route to it*/}
      {/* Then make a dog detail component and link to it */}

    </div>
  );
}

export default App;

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: 'whiskey',
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: 'duke',
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: 'perry',
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: 'tubby',
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}