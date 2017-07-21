// import React, { Component } from 'react'
// import { FormGroup, FieldGroup, ControlLabel, ReactFormLabel, HelpBlock, FormControl, Button, Grid, Glyphicon } from 'react-bootstrap'
// const apiUrl = 'https://basement-windows.herokuapp.com'
// const userId = 1 // Eventually needs to be obtained from session token
//
//
// const reactFormContainer = document.querySelector('.react-form-container');
//
// class NewProtocolForm extends React.Component {
//  constructor(props) {
//   super(props);
//
//   this.state = {
//    name: '',
//    email: '',
//    subject: '',
//    message: ''
//   }
//  }
//
//  handleChange = (e) => {
//   let newState = {};
//
//   newState[e.target.name] = e.target.value;
//
//   this.setState(newState);
//  };
//
//
//  handleSubmit = (e, message) => {
//   e.preventDefault();
//
//   let formData = {
//    formSender: this.state.name,
//    formEmail: this.state.email,
//    formSubject: this.state.subject,
//    formMessage: this.state.message
//   }
//
//   if (formData.formSender.length < 1 || formData.formEmail.length < 1 || formData.formSubject.length < 1 || formData.formMessage.length < 1) {
//    return false;
//   }
//
//   // Axios POST goes here
//
//   this.setState({
//    author_user_id: '',
//    author_username: '',
//    json_protocol: {},
//    json_upvotes: {},
//    json_downvotes: {},
//   });
//  };
//
//  render() {
//   return(
//    <form className='react-form' onSubmit={this.handleSubmit}>
//     <h1>Say Hi!</h1>
//
//     <fieldset className='form-group'>
//      <ReactFormLabel htmlFor='author_user_id' title='Full Name:' />
//
//      <input id='formName' className='form-input' name='name' type='text' required onChange={this.handleChange} value={this.state.name} />
//     </fieldset>
//
//     <fieldset className='form-group'>
//      <ReactFormLabel htmlFor='author_username' title='Email:' />
//
//      <input id='formEmail' className='form-input' name='email' type='email' required onChange={this.handleChange} value={this.state.email} />
//     </fieldset>
//
//     <fieldset className='form-group'>
//      <ReactFormLabel htmlFor='formSubject' title='Subject:'/>
//
//      <input id='formSubject' className='form-input' name='subject' type='text' required onChange={this.handleChange} value={this.state.subject} />
//     </fieldset>
//
//     <fieldset className='form-group'>
//      <ReactFormLabel htmlFor='formMessage' title='Message:' />
//
//      <textarea id='formMessage' className='form-textarea' name='message' required onChange={this.handleChange}></textarea>
//     </fieldset>
//
//     <div className='form-group'>
//      <input id='formButton' className='btn' type='submit' placeholder='Send message' />
//     </div>
//    </form>
//   )
//  }
// };
//
//
// export { NewProtocolForm }
