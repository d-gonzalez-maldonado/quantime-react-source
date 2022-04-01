import React from 'react'
import './CaesarShift.css';

class CaesarShift extends React.Component{

  // shift_char(c){
  //   return String.fromCharCode((c.toUpperCase().charCodeAt(0) + this.state.password) % 26)

  // }

  //https://stackoverflow.com/questions/9862761/how-to-check-if-character-is-a-letter-in-javascript
  isLetter = (str) => {
    return str.length === 1 && str.match(/[a-z]/i);
  }


  shiftChar = (pass, c) => {
    if(this.isLetter(c)){
      return String.fromCharCode((((c.toUpperCase().charCodeAt(0) + pass) - 'A'.charCodeAt(0)) % 26 + 26) % 26 + 'A'.charCodeAt(0))
    }else{
      return c
    }
  }
  handleOnClickMinus = (event) => {
    this.setState({
      password: Math.max(this.state.password - 1, 0)
    });
  }
  handleOnClickPlus = (event) => {
    this.setState({
      password: this.state.password + 1
    });
  }

  handleOnClickBinary = (index) => {
    let new_bits = [...this.state.bits];
    new_bits[index] = (new_bits[index] + 1) % 2;
    this.setState({
      bits: new_bits
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      password: 0,
      bits: Array(5).fill(0)
    };
  }


  render(){
    var actual_pass
    if(this.props.binary){
      actual_pass = parseInt(this.state.bits.join(''),2)
    }
    else{
      actual_pass = Math.max(0, this.state.password)
    }
    var cipher = [...this.props.plaintext].map((c) => this.shiftChar(actual_pass, c));
    var plain_alphabet = [...Array(26).keys()].map((i) => {return String.fromCharCode(i % 26 + 'A'.charCodeAt(0))});
    var cipher_alphabet = plain_alphabet.map((c) => this.shiftChar(actual_pass, c))

    var arrows = [...Array(26).keys()].map((_) => {return '↓'})
    if(this.props.decode){
      cipher = [...this.props.plaintext].map((c) => this.shiftChar(-actual_pass, c));
      arrows = [...Array(26).keys()].map((_) => {return '↑'})
    }
    var cipher_out
    if(this.props.decode){
      cipher_out = (
        <h className='CaesarShift-cipher'>
           {cipher} ← {this.props.plaintext}
        </h>
        )
    }
    else{
      cipher_out = (
        <h className='CaesarShift-cipher'>
           {this.props.plaintext} → {cipher}
        </h>

        )
    }
    var password_display
    if(this.props.binary){

      let bit_interface = [];
      for(let i = 0; i<this.state.bits.length; i++){
        bit_interface.push((
          <div className='CaesarShift-bit-container'>
            <h className='CaesarShift-pass'>
              {this.state.bits[i]}
            </h>
            <button className='CaesarShift-binary-button' onClick={() => {this.handleOnClickBinary(i)}}>
            +/-
            </button>
          </div>
        ))
      }
      password_display = (
        <div className='CaesarShift-binary-container'>
          {bit_interface}
          <h className='CaesarShift-pass'>
          = {actual_pass}
          </h>
        </div>
      )
    }
    else{
      password_display = (
        <div className='CaesarShift-password-contianer'>
          <button className='CaesarShift-button' onClick={this.handleOnClickMinus}>
            ⊖
          </button>
          <h className='CaesarShift-pass'>
            {this.state.password}
          </h>
          <button className='CaesarShift-button' onClick={this.handleOnClickPlus}>
            ⊕
          </button>
        </div>
      )
    }
    return(
      <div className="CaesarShift">
        {cipher_out}
        <br/>
        <br/>
        <h className='CaesarShift-alpha-plain'>
          {plain_alphabet.join(' ')}
        </h>
        <h className='CaesarShift-arrows'>
          {arrows.join(' ')}
        </h>
        <h className='CaesarShift-alpha-cipher'>
          {cipher_alphabet.join(' ')}
        </h>
        <br/>
        <br/>

        <h className="CaesarShift-header">
          Password
        </h>
        {password_display}
      </div>
      ); 
  }
}


export default CaesarShift;
