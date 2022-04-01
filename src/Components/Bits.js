import React from 'react'
import './CaesarShift.css';

class Bits extends React.Component{

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

  pad(num, size) {
      num = num.toString();
      while (num.length < size) num = "0" + num;
      return num;
  }

  handleOnClickDecimal = (delta) => {
    let new_bits = [...this.state.bits];
    let new_value = Math.min(31, Math.max(0,(parseInt(this.state.bits.join(''),2) + delta)))
    new_bits = this.pad(new_value.toString(2), this.state.bits.length).split('')

    this.setState({
      bits: new_bits
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      bits: Array(5).fill(0)
    };
  }


  render(){

    var bits_display

    let bit_interface = [];
    for(let i = 0; i<this.state.bits.length; i++){
      let bit_button

      if (this.props.binary){
        bit_button = (
          <button className='CaesarShift-binary-button' onClick={() => {this.handleOnClickBinary(i)}}>
          +/-
          </button>)
      }

      bit_interface.push((
        <div className='CaesarShift-bit-container'>
          <h className='CaesarShift-pass'>
            {this.state.bits[i]}
          </h>
          {bit_button}
        </div>
      ))
    }
    let decimal_buttons
    if(this.props.decimal){
      decimal_buttons = (

          <div style={{height:"100%"}}>
            <button className='CaesarShift-decimal-button' onClick={() => {this.handleOnClickDecimal(-1)}}>
            -
            </button>
            <button className='CaesarShift-decimal-button' onClick={() => {this.handleOnClickDecimal(1)}}>
            +
            </button>
          </div>
        )
    }
    bits_display = (
      <div className='CaesarShift-binary-container'>
        {bit_interface}
        <h className='CaesarShift-pass'>
        =
        </h>
        <div className='CaesarShift-bit-container'>
          <h className='CaesarShift-pass'>
            {parseInt(this.state.bits.join(''),2)}
          </h>
          {decimal_buttons}
        </div>

      </div>
    )
    

    return(
      <div className="CaesarShift">
        {bits_display}
      </div>
      ); 
  }
}


export default Bits;
