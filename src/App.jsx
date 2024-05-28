import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [numLikes, setNumLikes] = useState(0)
  // ! Need state for name, to be displayed on DOM
  let [name, setName] = useState("")
  let [nameInput, setNameInput] = useState("")
  
  // ! Need state for the input field's value

  // handleclick will use setNumLikes and change value to numLikes

  let handleClick = () => {
    console.log("handle click was executed");
    setNumLikes(numLikes + 1)
  }

  const handleSubmit = () => {
    console.log("handleSubmit has been activated....changing name", nameInput);

    // * Use setter for setName to pass in nameInput, which will update the DOM to sat "Hello.."

    setName(nameInput)

    // * Clear Form

    setNameInput("")
  }
  

//! Rendeing section where JSX is written
  // JSX is html-like syntax that can be mixed with JS
  return (
    <div>
      <h1>React Form</h1>
      <h2>Hello {name}</h2>
      <button onClick = { () => handleClick()}>{numLikes} Like ❤️</button>
      
    <hr/>
    <br/>

      <input 
      value = {nameInput} 
      onChange={(event) => setNameInput(event.target.value)}>

      </input>

      
      <button onClick={() => handleSubmit()}>Submit</button>
      
    </div>
  )
}

export default App
