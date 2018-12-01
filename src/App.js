import React, { Component } from 'react';
import leaf from './leaf.svg';
import Snoop from './snoop.svg';
import './App.css';

class App extends Component {
  state = {
    rapName: '',
    albumSales: 0,
  }

  setRapName = (event)=> this.setState({ rapName: event.target.value })
  setAlbumSales = (event)=> this.setState({ albumSales: +event.target.value })
  
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

          <button onClick={this.submitForm}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
