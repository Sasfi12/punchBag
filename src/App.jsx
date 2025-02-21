import { useState } from 'react'
import './App.css'
import ProgressBar from './components/progressbar/ProgressBar'
import Boutons from "./components/boutons/Boutons"
import ImageDisplay from './components/imagedisplay/ImageDisplay'
function App() {


const audio = new Audio("./punch.mp3");
const crumble = new Audio("./crumble.mp3") // audios 


let [health , setHealth] = useState(100) // health bags health 
let [alive , setAlive] = useState(true) // check if the bag is alive  
let [width , setWidth] = useState(health * 10)
const puncherFunc = () => {
  if(health != 0) {
    setHealth(health - 10)
    audio.play();
  }
  if(health - 10 <= 0 && alive == true) {
    setAlive(false)
    setWidth(width - 10000)
    crumble.play();
  }
  setWidth( width - 100)
  
  
}
const restartFunc = () => {
  setHealth(100)
  setAlive(true)
  setWidth(1000)

}
  return (
    <>

      
      <ImageDisplay show= {alive ? "show-bag" : "show-broken-bag"}/>
      <h1>punchBag game</h1>
      <ProgressBar health = {health} width = {width}/>
      <Boutons punch = {puncherFunc} reset = {restartFunc} buttonDisplay={alive ? "button-container" : "button-container finished "} replayButton= {alive ? "Restart" : "Play again"}/>

    </>
  )
}

export default App
