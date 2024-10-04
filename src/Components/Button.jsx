import React from 'react';

// const ButtonComponent = (props) => {
const ButtonComponent = ({count, handleIncrement, children}) => {
        // return <button onClick={props.handleIncrement}>Clicked {props.count}</button>
    console.log(children); // Only ran once when the component is created, normally get from prop.children, this will print everything inside the element which at the start only 0
    return <button onClick={handleIncrement}>Clicked {count}</button> // Took in the event handler for click and set the count value to the new value

}

export default ButtonComponent;