import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      npi: '',
      address1: '',
      address2: '',
      city: '',
      homeState: '',
      zip: '',
      phone: '',
      email: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    axios.post('/register', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      npi: this.state.npi,
      address1: this.state.address1,
      address2: this.state.address2,
      city: this.state.city,
      homeState: this.state.homeState,
      zip: this.state.zip,
      phone: this.state.phone,
      email: this.state.email
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }    

  render() {
    return (
      <div>
        <div>Registration</div>
        <div>First Name: 
          <input 
            value={this.state.firstName} 
            onChange={(event) => this.setState({firstName: event.target.value})}
          />
        </div>
        <div>Last Name: 
          <input 
            value={this.state.lastName} 
            onChange={(event) => this.setState({lastName: event.target.value})}
          />
        </div>
        <div>NPI Number: 
          <input 
            value={this.state.npi} 
            onChange={(event) => this.setState({npi: event.target.value})}
          />
        </div>
        <div>Address Line 1: 
          <input 
            value={this.state.address1} 
            onChange={(event) => this.setState({address1: event.target.value})}
          />
        </div>
        <div>Address Line 2: 
          <input 
            value={this.state.address2} 
            onChange={(event) => this.setState({address2: event.target.value})}
          />
        </div>
        <div>City: 
          <input 
            value={this.state.city} 
            onChange={(event) => this.setState({city: event.target.value})}
          />
        </div>
        <div>State: 
          <input 
            value={this.state.homeState} 
            onChange={(event) => this.setState({homeState: event.target.value})}
          />
        </div>
        <div>Zip: 
          <input 
            value={this.state.zip} 
            onChange={(event) => this.setState({zip: event.target.value})}
          />
        </div>
        <div>Phone Number: 
          <input 
            value={this.state.phone} 
            onChange={(event) => this.setState({phone: event.target.value})}
          />
        </div>
        <div>Email: 
          <input 
            value={this.state.email} 
            onChange={(event) => this.setState({email: event.target.value})}
          />
        </div>
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default App;
