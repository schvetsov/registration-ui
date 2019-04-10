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

  //Dispatch form changes to Redux
  handleChange = name => event => {
    const value = {
      name: name,
      newVal: event.target.value
    }
    this.props.dispatch({ type: 'CHANGEINPUT', value: value })
  }

  //Submit form to Mongo
  onSubmit() {
    axios.post('/register', {
      state: this.props
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
