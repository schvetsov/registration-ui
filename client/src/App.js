import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import Submitted from './pages/Submitted';

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
      email: '',
      registered: false
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
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
      .then(this.setState({registered: true}))
      .catch(err => console.log(err));
  }    

  componentDidMount() {
      // 'use strict';
      window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
              console.log('propagating')
            }
            form.classList.add('was-validated');
            console.log('validated')
          }, false);
        });
      }, false);
  }

  render() {
    return (
      <div>
        <div className="pos-f-t">
          <nav className="navbar navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand" onClick={() => this.setState({registered: false})}>
                <img className="logo" src={require('./availity.png')} />
              </a>
              <div className="navbar-text">
                Registration
              </div>
            </div>
            
          </nav>
        </div>
        {this.state.registered ?
          <div className="App">You are now registered with Availity!</div>
        :
          <form className="needs-validation App" noValidate>
            <div className="instructions">Please complete the form below and click submit</div>
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom01">First name</label>
                <input type="text" className="form-control" id="validationCustom01" placeholder="First name" value={this.state.firstName} onChange={this.handleChange('firstName')} required/>
                <div className="valid-feedback">
                  Looks good!
                </div>
                <div className="invalid-feedback">
                  Please provide a valid first name.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom02">Last name</label>
                <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" value={this.state.lastName} onChange={this.handleChange('lastName')} required/>
                <div className="valid-feedback">
                  Looks good!
                </div>
                <div className="invalid-feedback">
                  Please provide a valid last name.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom03">NPI</label>
                <input type="text" className="form-control" id="validationCustom02" placeholder="NPI" value={this.state.npi} onChange={this.handleChange('npi')} required/>
                <div className="valid-feedback">
                  Looks good!
                </div>
                <div className="invalid-feedback">
                  Please provide a valid NPI.
                </div>
              </div>
            </div>
            <div className="form-row">
                <div className="col-md-6 mb-3">
                <label htmlFor="validationCustom03">Address 1</label>
                  <input type="text" className="form-control" id="validationCustom03" placeholder="City" value={this.state.address1} onChange={this.handleChange('address1')} required/>
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                  <div className="invalid-feedback">
                    Please provide a valid address.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                <label htmlFor="validationCustom03">Address 2</label>
                  <input type="text" className="form-control" id="validationCustom03" placeholder="City" value={this.state.address2} onChange={this.handleChange('address2')} required/>
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                  <div className="invalid-feedback">
                    Please provide a valid address.
                  </div>
                </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label htmlFor="validationCustom04">City</label>
                <input type="text" className="form-control" id="validationCustom03" placeholder="City" value={this.state.city} onChange={this.handleChange('city')} required/>
                <div className="valid-feedback">
                  Looks good!
                </div>
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationCustom05">State</label>
                <input type="text" className="form-control" id="validationCustom04" placeholder="State" value={this.state.homeState} onChange={this.handleChange('homeState')} required/>
                <div className="valid-feedback">
                  Looks good!
                </div>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationCustom06">Zip</label>
                <input type="text" className="form-control" id="validationCustom05" placeholder="Zip" value={this.state.zip} onChange={this.handleChange('zip')} required/>
                <div className="valid-feedback">
                  Looks good!
                </div>
                <div className="invalid-feedback">
                  Please provide a valid zip.
                </div>
              </div>
            </div>
            <button className="btn btn-primary button" type="submit" >Submit</button>
          </form>
        }
        <Route exact path="/sub" />
      </div>
    );
  }
}

export default App;
