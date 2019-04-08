import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import Navbar from './navbar/Navbar';
import Form from './form/Form';

class App extends Component {

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //Dispatch state change to Redux
  handleChange = name => event => {
    this.props.dispatch({ type: name, value: event.target.value })
  }

  //Submit form to Mongo
  onSubmit() {
    axios.post('/register', {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      npi: this.props.npi,
      address1: this.props.address1,
      address2: this.props.address2,
      city: this.props.city,
      homeState: this.props.homeState,
      zip: this.props.zip,
      phone: this.props.phone,
      email: this.props.email
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }    

  //Event listeners for form validation
  componentDidMount() {

    const npiField = document.getElementById('validationCustom03');
    const zipField = document.getElementById('validationCustom08');
    const phoneField = document.getElementById('validationCustom09');
    const emailField = document.getElementById('validationCustom10');

    zipField.addEventListener('keyup', function(event) {
      var regex = /^\d{5}$/;
      if(regex.test(zipField.value) == false) {
        event.target.setCustomValidity("Please enter a valid zip code")
        return false;
      } else {
        event.target.setCustomValidity("")
        return true;
      }
    });

    phoneField.addEventListener('keyup', function(event) {
      var regex = /^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/;
      if (regex.test(phoneField.value) == false) {
        event.target.setCustomValidity("Please enter a valid phone number")
        return false; 
      } else {
        event.target.setCustomValidity("")
        return true;
      }
    });
      
    npiField.addEventListener('keyup', function(event) {
      var regex = /^\d{10}$/;
      if (regex.test(npiField.value) == false) {
        event.target.setCustomValidity("Please enter a valid NPI")
        return false; 
      } else {
        event.target.setCustomValidity("")
        return true;
      }
    });

    emailField.addEventListener('keyup', function (event) {
      var regex  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (regex.test(emailField.value) == false) {
        event.target.setCustomValidity('Please enter a valid Email')
        return false;
      } else {
        event.target.setCustomValidity("")
        return true;
      }
    });
  }

  render() {

    return (

      <div>

        <Navbar />

        <Form 
          onSubmit={this.onSubmit} 
          handleChange={this.handleChange} 
        />

      </div>

    );

  }

}

const mapStateToProps = (state) => ({
  firstName: state.firstName,
  lastName: state.lastName,
  npi: state.npi,
  address1: state.address1,
  address2: state.address2,
  city: state.city,
  homeState: state.homeState,
  zip: state.zip,
  phone: state.phone,
  email: state.email
})

export default connect(mapStateToProps)(App);
