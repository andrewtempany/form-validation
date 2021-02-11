import './App.css';
import { Formik, Field } from 'formik'
import React, { useState } from 'react'
import YupSchema from './config/Yup'
import { MDBInput } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


// this is built in React using Formik and Yup
// Unfortunately I ran out of time during my hour at Hnry, but I spent a little more time at home to finish it.

// NB: The date Inputs aren't styling correctly because there's a proper MDBReact datepicker paid component that I'm not using



const App = () => {

  //this is the submit function
  const handleSubmit = (name) => {
    alert( 'Thanks for submitting '+ name + '!' )
  }

  //this handles error messages
  const error = (error, touched) => {
    if (error && touched) {
      return  <small className="feedback error"> {error} </small> 
    } 
  }


  return (
    <Formik

      //this is what will populate the inputs on loading
      initialValues={{
        first_name: '',
        middle_name: '',
        last_name: '',
        license_number: '',
        license_expiry: '',
        date_of_birth: '',
      }}

      // this is the validation schema
      validationSchema={YupSchema}
    >

      {(formik) => (

        <main className="container my-5">
          <h1>Form validation</h1>
          <section className="mb-5">
            <p>Add some client-side validation to improve the user experience of this form and guide the users in how they
            should
        fill out the fields.</p>
            <p>You are free to write this yourself by editing the markup and adding your CSS and JavaScript in the files
          provided (<code>you.js</code> and <code>you.css</code>),
        or you can rework this with a framework or library of your choice.</p>
            <h2 className="h3">Requirements</h2>
            <ul>
              <li>- All fields are required except for middle name</li>
              <li>- Required fields shouldn't be able to submit a blank value</li>
              <li>- Dates should be logical, i.e: a date of birth cannot be in the future</li>
              <li>- Drivers license number doesn't need anything special - just cannot be blank</li>
            </ul>
            <h2 className="h3">Resources</h2>
            <p><a href="https://mdbootstrap.com/legacy/4.3.2/" target="_blank">Material Design Bootstrap</a> is the UI library used for this exercise, but you are
          welcome to use any resource on the web to help you.</p>
          </section>
          <section className="row">


            {/* Form starts here */}


            <form className="col-6 mx-auto" >


              <div className="md-form">
                {/* this is the first name input */}
                <Field as={MDBInput} type="text" name="first_name" id="first_name" className="form-control" label="First Name"/>
                {/* this is an example of how I would show errors */}
                {error(formik.errors.first_name, formik.touched.first_name)}
              </div>

              <div className="md-form">
                <Field as={MDBInput} type="text" name="middle_name" id="middle_name" className="form-control" label="Middle Name" />
              </div>

              <div className="md-form">
                <Field as={MDBInput} type="text" name="last_name" id="last_name" className="form-control"  label="Last Name"/>
                {error(formik.errors.last_name, formik.touched.last_name)}
              </div>

              <div className="md-form">
                <Field as={MDBInput} type="text" name="license_number" id="license_number" className="form-control" label="License Number"/>
                {error(formik.errors.license_number, formik.touched.license_number)}
              </div>


              {/* Date picker in MDBReact is a paid component so this component isn't styling very well but otherwise works */}
 
              <div className="md-form">
                <Field as={MDBInput} type="date" name="license_expiry" id="license_expiry" className="form-control" label="License Expiry"/>
                {error(formik.errors.license_expiry, formik.touched.license_expiry)}
              </div>

              <div className="md-form">
                <Field as={MDBInput} type="date" name="date_of_birth" id="date_of_birth" className="form-control" label="Date of Birth"/>
                {error(formik.errors.date_of_birth, formik.touched.date_of_birth)}
              </div>

              <div className="row">
               { Object.keys(formik.errors).length === 0 && Object.keys(formik.touched).length !== 0 ? <button onClick={() => handleSubmit(formik.values.first_name)} className="btn btn-primary ml-auto">Submit</button> : <button disabled  onClick={() => handleSubmit(formik.values.first_name)} className="btn btn-primary ml-auto">Submit</button> } 
              </div>

            </form>
          </section>

        
        </main>
      )}
    </Formik>

  );
}

export default App;
