import React, { Component } from 'react';
import leaf from './leaf.svg';
import Snoop from './snoop.svg';
import './App.css';

class App extends Component {
  state = {
    rapName: '',
    albumSales: 0,
    applyingFor: '',
    country: '',
    whichState: '',
  }

  setRapName = (event)=> this.setState({ rapName: event.target.value })
  setAlbumSales = (event)=> this.setState({ albumSales: +event.target.value })
  setApplyingFor = (event)=> this.setState({ applyingFor: event.target.value })
  setCountry = (event)=> this.setState({ country: event.target.value })
  setWhichState = (event)=> this.setState({ whichState: event.target.value })
  
  submitForm = ()=>{
    console.log( this.state );
  }
  
  render() {
    return (
      <div className="Apply">
        <header className="Apply-header">
          <img src={leaf} className="leaf-logo" alt="leaf" />
          <Snoop color='purple' faceColor='white' className='snoop-logo'/>
        </header>
        
        <div className="Apply">
          <h3>Snoop needs some deets to get started</h3>
          <div className='form-field'>
            <label>
              Rap Name
              <input placeholder='Rap Name'
                     onChange={this.setRapName}
                     value={this.state.rapName}/>
            </label>
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
          
          <button onClick={this.submitForm}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
