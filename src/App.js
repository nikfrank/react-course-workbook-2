import React, { Component } from 'react';
import leaf from './leaf.svg';
import Snoop from './snoop.svg';
import emailRegex from './emailRegex';
import './App.css';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const animationFrames = [
  {
    zIndex: 5,
    transform: 'translateX( 0 ) rotate3d( 0, 1, 0, 0 )',
  },
  
  {
    zIndex: 4,
    transform: 'translateX( -100% ) rotate3d( 0, 1, 0, 80deg )',
  },
  {
    zIndex: 3,
    transform: 'translateX( -120% ) rotate3d( 0, 1, 0, 90deg )',
  },
  {
    zIndex: 2,
    transform: 'translateX( -100% ) rotate3d( 0, 1, 0, 95deg )',
  },

  {
    zIndex: 1,
    transform: 'translateX( -50% ) rotate3d( 0, 1, 0, 150deg )',
  },
  
  {
    zIndex: 1,
    transform: 'translateX( 0 ) rotate3d( 0, 1, 0, 180deg )',
  },
  
  {
    zIndex: 1,
    transform: 'translateX( 50% ) rotate3d( 0, 1, 0, 210deg )',
  },
  
  {
    zIndex: 2,
    transform: 'translateX( 100% ) rotate3d( 0, 1, 0, 265deg )',
  },
  {
    zIndex: 3,
    transform: 'translateX( 120% ) rotate3d( 0, 1, 0, 270deg )',
  },
  {
    zIndex: 4,
    transform: 'translateX( 100% ) rotate3d( 0, 1, 0, 280deg )',
  },

  {
    zIndex: 5,
    transform: 'translateX( 0 ) rotate3d( 0, 1, 0, 360deg )',
  },
];

class App extends Component {
  state = {
    Xpos: 0,
    angle: 0,
    weedZindex: 5,

    animFrame: 0,
    
    rapName: '',
    isRapNameValid: false,
    albumSales: 0,
    applyingFor: '',
    country: '',
    whichState: '',
    email: '',
    isEmailValid: false,
    startDate: new Date(),

    snoopHairColor: 'red',
    snoopFaceColor: 'white',

    isLeafReversed: false,
  }

  setRapName = (event)=>
    this.setState({
      rapName: event.target.value,
      isRapNameValid: event.target.value.includes('gg'),
    })

  setEmail = (event)=>
    this.setState({
      email: event.target.value,
      isEmailValid: emailRegex.exec(event.target.value) !== null,
    })
  
  setAlbumSales = (event)=> this.setState({ albumSales: +event.target.value })
  setApplyingFor = (event)=> this.setState({ applyingFor: event.target.value })
  setCountry = (event)=> this.setState({ country: event.target.value })
  setWhichState = (event)=> this.setState({ whichState: event.target.value })
  setStartDate = (startDate)=> this.setState({ startDate })
  
  submitForm = ()=>{
    console.log( this.state );
  }

  colors = ['red', '#f93', '#f0f', 'green' , 'rgba(35, 199, 22, 57)']
  
  setNewSnoopFace = ()=> {
    const newFace = Math.floor( Math.random() * this.colors.length );

    this.setState({
      snoopFaceColor: this.colors[newFace],
    });
  }
  setNewSnoopHair = ()=> {
    const newHair = Math.floor( Math.random() * this.colors.length );

    this.setState({
      snoopHairColor: this.colors[newHair],
    });
  }

  reverseLeaf = ()=> this.setState(state => ({
    isLeafReversed: !state.isLeafReversed
  }) )

  componentDidMount(){
    setInterval(()=>this.setState(state=> ({
      animFrame: (state.animFrame + (this.state.isLeafReversed ? -1:1)
      +animationFrames.length) %
      animationFrames.length,
    })), 200);
  }
  
  render() {
    return (
      <div className='Apply'>
        <header className='Apply-header'
                onClick={this.reverseLeaf}>
          <img src={leaf}
               onClick={this.reverseLeaf}
               style={{
                 transform: animationFrames[this.state.animFrame].transform,
                 zIndex: animationFrames[this.state.animFrame].zIndex,
               }}
               className='leaf-logo'
               alt='leaf' />
          <Snoop color={this.state.snoopHairColor}
                 faceColor={this.state.snoopFaceColor}
                 onFaceClick={this.setNewSnoopFace}
                 onHairClick={this.setNewSnoopHair}
                 className='snoop-logo'/>
        </header>

        <div className='Apply'>
          <h3>Snoop needs some deets to get started</h3>
          <div className='form-field'>
            <label>
              Rap Name
              <input placeholder='Rap Name'
                     onChange={this.setRapName}
                     value={this.state.rapName}/>
            </label>
            {
              (!this.state.isRapNameValid && (this.state.rapName.length > 2)) && (
                <div className='invalid-field-warning'>
                  Rap Name must contain "gg"
                </div>
              )
            }
          </div>

          <div className='form-field'>
            <label>
              Current Album Sales (weekly)
              <input type='number'
                     onChange={this.setAlbumSales}
                     value={this.state.albumSales}/>
            </label>
          </div>

          <div className='form-field'>
            <select value={this.state.applyingFor} onChange={this.setApplyingFor}>
              <option value=''>Select Position</option>
              <option value='driver'>Driver</option>
              <option value='trafficker'>Trafficker</option>
              <option value='producer'>Producer</option>
              <option value='rapper'>Rapper</option>
            </select>
          </div>
          
          <div className='form-field'>
            <select value={this.state.country} onChange={this.setCountry}>
              <option value=''>Select Country</option>
              <option value='USA'>USA</option>
              <option value='Canada'>Canada</option>
              <option value='Israel'>Israel</option>
            </select>
          </div>

          {
            (this.state.country === 'USA') ? (
              <div className='form-field'>
                <select value={this.state.whichState} onChange={this.setWhichState}>
                  <option value=''>Select State</option>
                  <option value='CA'>California</option>
                  <option value='NY'>New York</option>
                  <option value='MI'>Michigan</option>
                </select>
              </div>
            ) : null
          }

          <div className='form-field'>
            <label>
              Email
              <input placeholder='Email'
                     onChange={this.setEmail}
                     value={this.state.email}/>
            </label>
            {
              (!this.state.isEmailValid && (this.state.email.length > 4)) && (
                <div className='invalid-field-warning'>
                  Email address not valid
                </div>
              )
            }
          </div>

          <div className='form-field'>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.setStartDate}
            />
          </div>
          
          <button onClick={this.submitForm}
                  disabled={!this.state.isEmailValid ||
                            !this.state.isRapNameValid ||
                            !this.state.applyingFor ||
                            !this.state.country ||
                            (this.state.country ==='USA' && !this.state.whichState)}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default App;
