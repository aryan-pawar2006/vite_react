import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

//we can make the another function and try to render that intohtml:
function Myapp(){
  return(
  <div>
  <h1>Hi may name is Aryan!</h1>
  <p>I pursuing my graduation in computer sceince and engineering dipartment </p>
  </div>
  )
}

// const reactElement={
//     type:'a',
//     props:{
//         href:"https://www.google.com/",
//         target:"_black"
//     },
//     Children:"hey goto google Web !"//this for innertext
// }
const validelement=(
  <a href="https://www.google.com" target="_blank">click to go on a google!</a>
)

// also we can create the element like this using the react create element:
const student=React.createElement(
  'a',
  {href:"https://www.google.com" ,target:"_blank"},
  'hey click togo on google website!'
)

export default Myapp

createRoot(document.getElementById('root')).render(
    //<Myapp />
    validelement
    student
)
