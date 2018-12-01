import React, { Component } from 'react';
import leaf from './leaf.svg';
import Snoop from './snoop.svg';
import './App.css';

class App extends Component {
  state = {}
  
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
              <input placeholder='Rap Name'/>
            </label>
          </div>

          <div className='form-field'>
            <label>
              Current Album Sales (weekly)
              <input type='number' value={0}/>
            </label>
          </div>

          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
