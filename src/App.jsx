import { useState, createElement } from "react";
import "./App.css";
import ButtonComponent from "./Components/Button";
import { useEffect } from "react";
import { useCallback } from "react";

function App() {
  const [count, setCount] = useState(0); // count to get the value, setCount to edit the state
  const [value, setValue] = useState("");
  const [isSignedIn, setSignedIn] = useState(false);
  const [console, setConsole] = useState("");
  const [randomStuff, setRandomStuff] = useState([]);

  useEffect(() => {
    document.title = `Clicked: ${count}`;
  }, [count]); // Trigger when count value is changed

  useEffect(() => {
    setConsole(
      () => `You are now ${isSignedIn ? "" : "not"} Signed in\n`
    );
  }, [isSignedIn]);

  const increaseCounter = useCallback(() => {
    // Momoize? Not really sure what that is but supposedly cache result and improve performance
    setCount((prevCount) => prevCount + 1); // By passing in an arrow function, can get the latest value
  });

  const toggleSignedIn = () => {
    setSignedIn((prevState) => ~prevState);
  };

  // const handleTextChange = (event) =>
  const handleTextChange = ({ target }) => {
    const { value } = target; // Deconstruct (Get value key value from target)
    if (count % 4 === 0) toggleSignedIn(); // If outside of jsx (cannot use if inside jsx)
    increaseCounter();
    setValue(value);
    addToRandomStuff(value);
  };

  const addToRandomStuff = (char) => {
    setRandomStuff((prevStuff) => [...prevStuff, char]); // ... Spread, just basic appending to a list from a state
    setConsole((prevConsole) => prevConsole + char + "\n");
  };

  const generatedList = randomStuff.map(
    (value, index) => {
      return (!(count % 10) && createElement('li', {key: `li-${index}`}, value)) // Alternate way of creating jsx, (tag, attributes, value), accessed by React.createElement
      // (!(value instanceof Number) && <li key=`li-${indx}`>{value}</li>) // key element needed to order the lists
    }
  ); // Map, Conditional using &&


  // the isSignedIn && is another example of how to use conditional if to decide whether to render the element

  // The img tag below must be closed with />, otherwise will return an error, normal js can <img>
  return (
    <div>
      {isSignedIn && <h1>Welcome Back</h1>} 
      <ButtonComponent count={count} handleIncrement={increaseCounter}>
        0
      </ButtonComponent>
      <input type="text" value={value || ""} onChange={handleTextChange} />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSN5kyGXRsJTnCvfM371Ycg8u7k9viw1gW-g&s" />
      <ul>{generatedList}</ul>
      <textarea value={console}></textarea>
    </div>
  );
}

export default App;
