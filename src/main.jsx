import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserProfile from './UserProfile.jsx'

function Greeting({name, age}){ // curly brackets to destructure props
  return <h2 style={{background:'lightblue'}}>Hello, {name}. You are {age} years old!</h2>
}

function Book(props){
  return <h2 style={{background:'red'}}>The author for {props.book} is {props.author}</h2>
}

function Car({color="blue", model}){
  return <h2 style={{background:'orange'}}>I happen to own a {color} {model}</h2>
}

function Son(props){
  return(
    <div style={{background:'lightgreen'}}>
      <h2>Son</h2>
      <div>{props.children}</div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
