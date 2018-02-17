import React, { Component } from 'react';
import leaf from './leaf.svg';
import Snoop from './snoop.svg';
import './App.css';

class App extends Component {
  state = {
    rapName: '',
    albumSales: 0,
  }

  setRapName = ({ target: { value } })=> this.setState({ rapName: value })
  setAlbumSales = ({ target: { value } })=> this.setState({ albumSales: value })
  
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

          <button onClick={this.submitForm}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
