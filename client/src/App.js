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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value});
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
          <input value={this.state.firstName} onChange={this.handleChange('firstName')} />
        </div>
        <div>Last Name: 
          <input value={this.state.lastName} onChange={this.handleChange('lastName')} />
        </div>
        <div>NPI Number: 
          <input value={this.state.npi} onChange={this.handleChange('npi')} />
        </div>
        <div>Address Line 1: 
          <input value={this.state.address1} onChange={this.handleChange('address1')} />
        </div>
        <div>Address Line 2: 
          <input value={this.state.address2} onChange={this.handleChange('address2')} />
        </div>
        <div>City: 
          <input value={this.state.city} onChange={this.handleChange('city')} />
        </div>
        <div>State: 
          <input value={this.state.homeState} onChange={this.handleChange('homeState')} />
        </div>
        <div>Zip: 
          <input value={this.state.zip} onChange={this.handleChange('zip')} />
        </div>
        <div>Phone Number: 
          <input value={this.state.phone} onChange={this.handleChange('phone')} />
        </div>
        <div>Email: 
          <input value={this.state.email} onChange={this.handleChange('email')} />
        </div>
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default App;
