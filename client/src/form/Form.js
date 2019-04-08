import React from 'react';

const Form = (props) => {

    return(
        <form className="needs-validation App" id="signUpForm" onSubmit={props.onSubmit} >
        <div className="instructions">Please complete the form below and click submit</div>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustom01">First name</label>
            <input type="text" className="form-control" id="validationCustom01" placeholder="First name" value={props.firstName} onChange={props.handleChange('firstName')} required/>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustom02">Last name</label>
            <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" value={props.lastName} onChange={props.handleChange('lastName')} required/>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustom03">NPI</label>
            <input type="text" className="form-control" id="validationCustom03" placeholder="NPI" value={props.npi} onChange={props.handleChange('npi')} required/>
          </div>
        </div>
        <div className="form-row">
            <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom03">Address 1</label>
              <input type="text" className="form-control" id="validationCustom04" placeholder="Address 1" value={props.address1} onChange={props.handleChange('address1')} required/>
            </div>
            <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom03">Address 2</label>
              <input type="text" className="form-control" id="validationCustom05" placeholder="Address 2" value={props.address2} onChange={props.handleChange('address2')} required/>
            </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom04">City</label>
            <input type="text" className="form-control" id="validationCustom06" placeholder="City" value={props.city} onChange={props.handleChange('city')} required/>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom05">State</label>
            <input type="text" className="form-control" id="validationCustom07" placeholder="State" value={props.homeState} onChange={props.handleChange('homeState')} required/>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom06">Zip</label>
            <input type="text" className="form-control" id="validationCustom08" placeholder="Zip" value={props.zip} onChange={props.handleChange('zip')} required/>
          </div>
        </div>
        <div className="form-row">
            <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom03">Phone</label>
              <input type="text" className="form-control" id="validationCustom09" placeholder="(###)###-####" value={props.phone} onChange={props.handleChange('phone')} required/>
            </div>
            <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom03">Email</label>
              <input type="email" className="form-control" id="validationCustom10" placeholder="Email" value={props.email} onChange={props.handleChange('email')} required/>
            </div>
        </div>
        <button className="btn btn-primary button" id="okButton" type="submit" >Submit</button>
      </form>
    )
    
}

export default Form;