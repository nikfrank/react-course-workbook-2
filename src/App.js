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

  setRapName = ({ target: { value } })=> this.setState({ rapName: value })
  setAlbumSales = ({ target: { value } })=> this.setState({ albumSales: value })
  setApplyingFor = ({ target: { value } })=> this.setState({ applyingFor: value })
  setCountry = ({ target: { value } })=> this.setState({ country: value })
  setWhichState = ({ target: { value } })=> this.setState({ whichState: value })
  
  submitForm = ()=>{
    console.log( this.state );
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
            <label htmlFor='rap-name'>Rap Name</label>
            <input id='rap-name'
                   placeholder='Rap Name'
                   onChange={this.setRapName}
                   value={this.state.rapName}/>
          </div>

          <div className='form-field'>
            <label htmlFor='album-sales'>Current Album Sales (weekly)</label>
            <input type='number'
                   onChange={this.setAlbumSales}
                   value={this.state.albumSales}/>
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
          
          <button onClick={this.submitForm}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
