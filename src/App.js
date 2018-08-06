import React, { Component } from 'react';
import leaf from './leaf.svg';
import Snoop from './snoop.svg';
import emailRegex from './emailRegex';
import './App.css';


import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class App extends Component {
  state = {
    rapName: '',
    isRapNameValid: false,
    albumSales: 0,
    applyingFor: '',
    country: '',
    whichState: '',
    email: '',
    isEmailValid: false,
    startDate: moment(),
  }

  setRapName = ({ target: { value } })=>
    this.setState({
      rapName: value,
      isRapNameValid: value.includes('gg') && (value.length > 2),
    })

  setEmail = ({ target: { value } })=>
    this.setState({
      email: value,
      isEmailValid: emailRegex.exec(value) !== null,
    })
  
  setAlbumSales = ({ target: { value } })=> this.setState({ albumSales: value })
  setApplyingFor = ({ target: { value } })=> this.setState({ applyingFor: value })
  setCountry = ({ target: { value } })=> this.setState({ country: value })
  setWhichState = ({ target: { value } })=> this.setState({ whichState: value })
  setStartDate = startDate=> this.setState({ startDate })
  
  submitForm = ()=>{
    
    console.log({
      ...this.state,
      isRapNameValid: undefined,
      isEmailValid: undefined,
      startDate: this.state.startDate.valueOf(),
    });
  }
  
  render() {
    return (
      <div className='Apply'>
        <header className='Apply-header'>
          <img src={leaf} className='leaf-logo' alt='leaf' />
          <Snoop color='purple' faceColor='white' className='snoop-logo'/>
        </header>
        <div className='Apply'>
          <h3>Snoop needs some deets to get started</h3>
          <div className='form-field'>
            <label>
              Rap Name
              <input id='rap-name'
                     placeholder='Rap Name'
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
            <select value={this.state.applyingFor}
                    onChange={this.setApplyingFor}>
              <option value=''>Select Position</option>
              <option value='driver'>Driver</option>
              <option value='trafficker'>Trafficker</option>
              <option value='producer'>Producer</option>
              <option value='rapper'>Rapper</option>
            </select>
          </div>
          
          <div className='form-field'>
            <select value={this.state.country}
                    onChange={this.setCountry}>
              <option value=''>Select Country</option>
              <option value='USA'>USA</option>
              <option value='Canada'>Canada</option>
              <option value='Israel'>Israel</option>
            </select>

            {
              (this.state.country === 'USA') && (
                <select value={this.state.whichState}
                        onChange={this.setWhichState}>
                  <option value=''>Select State</option>
                  <option value='CA'>California</option>
                  <option value='NY'>New York</option>
                  <option value='MI'>Michigan</option>
                </select>
              )
            }
          </div>

          <div className='form-field'>
            <label>
              Email
              <input id='email'
                     placeholder='Email'
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
                onChange={this.setStartDate}/>
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
