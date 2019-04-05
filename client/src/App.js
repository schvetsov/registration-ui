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
    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeNPI = this.changeNPI.bind(this);
    this.changeAddress1 = this.changeAddress1.bind(this);
    this.changeAddress2 = this.changeAddress2.bind(this);
    this.changeCity = this.changeCity.bind(this);
    this.changeHomeState = this.changeHomeState.bind(this);
    this.changeZip = this.changeZip.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeFirstName(event) {this.setState({firstName: event.target.value});}
  changeLastName(event) {this.setState({lastName: event.target.value});}
  changeNPI(event) {this.setState({npi: event.target.value});}
  changeAddress1(event) {this.setState({address1: event.target.value});}
  changeAddress2(event) {this.setState({address2: event.target.value});}
  changeCity(event) {this.setState({city: event.target.value});}
  changeHomeState(event) {this.setState({homeState: event.target.value});}
  changeZip(event) {this.setState({zip: event.target.value});}
  changePhone(event) {this.setState({phone: event.target.value});}
  changeEmail(event) {this.setState({email: event.target.value});}

  onSubmit() {
    axios.post('/register', {
      firstName: this.state.firstName
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }    

  render() {
    return (
      <div>
        <div>Registration</div>
        <div>First Name: 
          <input value={this.state.firstName} onChange={this.changeFirstName}></input>
        </div>
        <div>Last Name: 
          <input value={this.state.lastName} onChange={this.changeLastName}></input>
        </div>
        <div>NPI Number: 
          <input value={this.state.npi} onChange={this.changeNPI}></input>
        </div>
        <div>Address Line 1: 
          <input value={this.state.address1} onChange={this.changeAddress1}></input>
        </div>
        <div>Address Line 2: 
          <input value={this.state.address2} onChange={this.changeAddress2}></input>
        </div>
        <div>City: 
          <input value={this.state.city} onChange={this.changeCity}></input>
        </div>
        <div>State: 
          <input value={this.state.homeState} onChange={this.changeHomeState}></input>
        </div>
        <div>Zip: 
          <input value={this.state.zip} onChange={this.changeZip}></input>
        </div>
        <div>Phone Number: 
          <input value={this.state.phone} onChange={this.changePhone}></input>
        </div>
        <div>Email: 
          <input value={this.state.email} onChange={this.changeEmail}></input>
        </div>
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default App;
