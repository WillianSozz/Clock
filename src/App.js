import React, { Component } from "react";
import './index.css'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      hora: '00:00:00',
     }
  }

  componentDidMount(){

    setInterval(() => {
      this.setState({hora:new Date().toLocaleTimeString()})
    }, 1000);


    const hourhand = document.querySelector('.hour-hand')
    const minutehand = document.querySelector('.minute-hand')
    const secondhand = document.querySelector('.second-hand')

    const getTime = () => {
    const date = new Date()

    return {
     hours: date.getHours(),
     minutes: date.getMinutes(),
     seconds: date.getSeconds()
    }
    }

    setInterval(() => {

    const { seconds, minutes, hours } = getTime()

    secondhand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`
    minutehand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`
    hourhand.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`

  }, 1000)
  }

  

  render(){
    return(
      <main>
      <br/>
      <br/>
      <h2>Relogio Analógico</h2>
      <br/>
      <div className="clock">
        <div className="hour-hand"></div>
        <div className="minute-hand"></div>
        <div className="second-hand"></div>

        <div className="center"></div>

        <div className="number number-1">'</div>
        <div className="number number-2">'</div>
        <div className="number number-3">|</div>
        <div className="number number-4">'</div>
        <div className="number number-5">'</div>
        <div className="number number-6">|</div>
        <div className="number number-7">'</div>
        <div className="number number-8">'</div>
        <div className="number number-9">|</div>
        <div className="number number-10">'</div>
        <div className="number number-11">'</div>
        <div className="number number-12">|</div>
      </div>
      <br/>
      

      <br/>
      <h2>Relogio Digital</h2>
      <br/>
      <div className="seg">
        <h1>{this.state.hora}</h1>
      </div>
      </main>
    )
  }

}


export default App