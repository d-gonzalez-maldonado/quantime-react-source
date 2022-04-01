import logo from './logo.svg';
import React from 'react'
import './App.css';
import circuits from './Circuits.png'
import connectFour from './Connect4.png'
import qupcakes from './Qupcakes.png'
import YoutubeEmbed from './Components/YoutubeEmbed'
import CaesarShift from './Components/CaesarShift'
import Bits from './Components/Bits'
import OneWay from './Components/OneWay'
import Quiz from './Components/Quiz'

import qupcakesLogo from "./assets/QupcakesLogo.png"
import queuebitLogo from "./assets/QueuebitsLogo.png"
import queuebitGP from "./assets/QueuebitsGP.png"
import qupcakesGP from "./assets/QupcakesGP.png"

import circuitsGP from "./assets/CircuitsGP.png"

import img0 from "./assets/QueueBits/0.png"
import img1 from "./assets/QueueBits/1.png"
import img2 from "./assets/QueueBits/2.png"
import img3 from "./assets/QueueBits/3.png"

export class App extends React.Component{

    constructor(props){
        super(props)
        this.myRef = React.createRef();


        this.title = "Welcome to Quantime!"
        this.intro = (<div>
                <h1 className="Main"> {this.title}</h1>
                    <p>
                  Select which activity you are / your class is completing:
                </p>
                <br/>
                </div>)
        this.home = (                <table style={{width:"100%", margin:"auto", tableLayout:"fixed"}}>
                  <tr>
                    <th>
                      High School
                      <p>
                      Probability, Superposition, and Measurement
                      </p>
                     <br/> 
                    </th>
                    <th>
                      Middle School
                      <br/>
                      <p>
                      Quantum Computing Operations
                      </p>
                     <br/> 
                    </th> 
                  </tr>
                  <tr align="center">
                    <th>
                      <img src={queuebitLogo} width="50%"/>
                    </th>
                    <th>
                      <img src={qupcakesLogo} width="50%"/>
                    </th>
                  </tr>
                  <tr align="center">
                    <th>
                      <img src={queuebitGP} width="50%"/>
                      <br/>
                        <button onClick={()=>{this.setState({page:'superposition'})}}>
                          Go
                        </button>
                    </th>
                    <th>
                      <img src={qupcakesGP} width="50%"/>
                      <br/>
                        <button onClick={()=>{this.setState({page:'quantum_ops'})}}>
                          Go
                        </button>
                    </th>
                  </tr>
                </table>)



const round1_text = (
        <div>
            This is similar to the classic game ConnectFour. Play no more than four games!
            <br/>
            <b> What strategy are you using to win?</b>
        </div>)
const round2_text = (<div>In this round, you can get tokens that aren’t fully red or white. 
    The portion that is your color expresses the probability it will be measured as your color 
    (in the picture, that token has a 75% chance of being yellow). 
    When it hits the bottom, it gets measured, and you see the outcome. 
    Play at least 2 games with your partner. 
    <br/>
    <b> How did your strategy change based on the probability you have of getting your color?</b>
    </div>)
const round3_text = (<div> When you drop your pieces, they won’t be measured right away. 
    Instead, it waits until all pieces have been played before measuring them. 
    The computer measures them in the same order in which they were dropped, and you will find out who won (if anyone).
    <br/>
    <b>Did having to wait until the end of the game to measure the tokens affect the way you played?</b>
    </div>)
const round4_text = (<div>When you end the game, instead of the computer measuring one at a time in the same order than they were dropped, you and your opponent trade off choosing which token to measure.
    <br/>
    <b> How does that change your strategy?</b></div>)


            this.superpos = (

                <div
          >
            <h1 style={{fontFamily:"adobe-garamond-pro", fontStyle:"normal", fontWeight:"100", fontSize:48}}>
              Probability, Superposition, and Measurement
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Welcome to the Probability, Superposition, and Measurement Quantime activity! To start out, watch this video about Quantum Computing:
            </p>
            <br/>
            <YoutubeEmbed embedId="OWJCfOvochA?start=27&end=136" />
            <br/>
            <p>
            This activity explores the relationship between superposition, probability, and measurement, which are critical to the unique properties of quantum technologies.
            You are going to do four rounds of Queue Bits play. You will play with a partner next to you in class. Make sure to observe all COVID restrictions that may be in place as you play! You may need one person to control the mouse if necessary! 
            </p>
            <br/>
            <br/>
            <a href="https://chord.cs.uchicago.edu/Quander/ConnectFour/">
                  <button className="flex px-8 py-2 mx-auto text-lg text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600">
                    Play Game!
                  </button>
            </a>
            <br/>
            <br/>
            {this.makeSection("Round 1 (5 minutes):Classical Play", round1_text, img0, false)}
            <br/>
            <br/>
            <br/>
            {this.makeSection("Round 2 (8 minutes): Superposition, measurement upon drop", round2_text, img1, true)}
            <br/>
            <br/>
            <br/>
            {this.makeSection("Round 3 (8 minutes): Measurement occurs at the end, in the same order in which they were dropped.", round3_text, img2, false)}
            <br/>
            <br/>
            <br/>
            {this.makeSection("Round 4 (10 minutes): Measurement occurs at the end; players trade off choosing which token to measure.", round4_text, img3, true)}
            <br/>
            <p>
              What does this all have to do with quantum computing? Watch this video to find out! 
            </p>
            <YoutubeEmbed embedId="_M7wm9PPs7A" />
          </div>
            )
            
            this.quantumOps = (
            <div>
            <h1 style={{fontFamily:"adobe-garamond-pro", fontStyle:"normal", fontWeight:"100", fontSize:48}}>
              Quantum Operations
            </h1>
            <p>
              Welcome to the Quantum Operations activity! 
            </p>
            <br/>
            <YoutubeEmbed embedId="OWJCfOvochA?start=27&end=136" />
            <p>
            Now let’s look a little bit about how quantum computing is different from classical computing:
            </p>
            <br/>
            <br/>
            <YoutubeEmbed embedId="uQ1aeYzaafk" />
            <br/>
            <p>
              We have two games for you to explore these new quantum operations!!
            </p>
            <br/>
            <br/>
            <br/>
            {this.makeGameSection("Qupcakes (15 minutes)", "Use quantum operations to serve up some delicious qupcakes to hungry customers!", qupcakesGP, false, 'https://chord.cs.uchicago.edu/Quander/QuantumCafe/')}
            <br/>
            <br/>
            <br/>
            {this.makeGameSection("Crazy Circuits (10 minutes)", "Help researchers simplify their quantum programs to get them to run during an emergency!", circuitsGP, true, 'https://chord.cs.uchicago.edu/Quander/Circuits/')}
            <br/>
            <br/>
            <br/>
            <p>
              What does this all have to do with quantum computing? Watch this video to find out! 
            </p>
            <YoutubeEmbed embedId="tNYFA5ZJHEw" />
          </div>)


            this.state = {
                page : 'home',
            }
        }

     Header = () => {
    let superStyle = {}
    let opsStyle = {}
    if(this.state.page == 'superposition'){
        superStyle['textDecoration'] = "underline"
    }
    if(this.state.page == 'quantum_ops'){
        opsStyle['textDecoration'] = 'underline'
    }
  return (
    <div style={{width:"100%", display:"inline-block", background:"#EEEEEE"}}>
      <table cellpadding="30%" cellspacing="0" style = {{float:"left", display:"inline-block",}}>
        <tr>
        <th onClick={()=>{this.setState({page:'home'})}}>
        Quantime
        </th>
        </tr>
      </table>
      <table cellpadding="30%" cellspacing="0" style = {{float:"right", display:"inline-block",}}>
        <tr>
        <th style={superStyle} onClick={()=>{this.setState({page:'superposition'})}}>
        Superposition
        </th>
        <th style={opsStyle} onClick={()=>{this.setState({page:'quantum_ops'})}}>
        Quantum Operations
        </th>
        </tr>
      </table>
    </div>
  );
};

    makeSection(title, paragraph, img, left, link){
        let floatDir = left ? 'left' : 'right'
        return (
            <div style={{minHeight:400}}>
                <h1 >{title}</h1>
                <img src={img} width={300} style={{float:floatDir, margin:'15px', fontSize:24}}/>
                <p className="Main" style={{minHeight:150}}>
                        {paragraph}
                </p>
            </div>)}

    makeGameSection(title, paragraph, img, left, link){
        let floatDir = left ? 'left' : 'right'
        return (
            <div style={{minHeight:400}}>
                <h1 >{title}</h1>
                <img src={img} width={300} style={{float:floatDir, margin:'15px'}}/>
                <p className="Main" style={{minHeight:150, fontSize:24}}>
                        {paragraph}
                </p>
                <a href={link}>
                  <button >
                    Play
                  </button>
                </a>
            </div>)}



    render(){
        let output = []
        let circuitsText = 'Help the EPIQC research center continue their research by solving pattern based puzzles!'
        let connectText = 'Enjoy a classic board game with a quantum twist! Can you line up your pieces while dealing with the uncertainty?!?'
        let qupcakesText = "Orders Up! Deliver as many 'qupcakes' as possible while using gizmos to make sure every customer gets their favorite flavor!"

        if(this.state.page =='superposition'){
            output.push(this.superpos)

        }
        else if(this.state.page == 'quantum_ops'){
            output.push(this.quantumOps)
        }
        else{
            output.push(this.intro)
            output.push(this.home)
        }



        return (
            <div className="App">
                {this.Header()}
                <div className="Main">
                    {output}
                </div>

            </div>
        )
    }


}


export default App;

// YKILQPAN