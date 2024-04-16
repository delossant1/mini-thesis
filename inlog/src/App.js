import React, { useState } from 'react';
import './App.css';
import irislogo from './images/irislogo.png';
import logo from './images/logo.png';
import "./fonts/InterTight-Light.ttf";

function SignInPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    birthday: '',
    contactNo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement form validation here
    // For simplicity, let's just show a confirmation dialog
    const confirmationMessage = `Thank you ${formData.firstName} ${formData.lastName}! 
      Your registration details have been submitted successfully.`;
    alert(confirmationMessage);
    // Here you can add logic to send confirmation email
    // This can be done using a server-side script or a service like AWS SES
  };

  return (
    <div>
      <div className="logo">
        <img src={irislogo} alt="irisclane icon" style={{width: "305px"}} />
       
      </div>

      <div className="container">
        <div className="inner-logo">
          <img src={logo} alt="another icon" style={{width: "100px", marginBottom: "40px"}} />
          <h2>IRISCLANE TOWER INC.</h2>
        </div>

        <form className="box-container" onSubmit={handleSubmit}>
          <div className="firstname">
            <input 
              type="text" 
              placeholder="First Name" 
              name="firstName"
              value={formData.firstName}
              onChange={handleChange} 
            />
          </div>
          <div className="lastname">
            <input 
              type="text" 
              placeholder="Last Name" 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange} 
            />
          </div>

          <input 
            type="text" 
            placeholder="Username" 
            name="username"
            value={formData.username}
            onChange={handleChange} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            name="password"
            value={formData.password}
            onChange={handleChange} 
          />
          <input 
            type="text" 
            placeholder="Birthday" 
            name="birthday"
            value={formData.birthday}
            onChange={handleChange} 
          />
          <input 
            type="text" 
            placeholder="Contact no." 
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange} 
          />

          <div>
            <input type="submit" className="Join" value="Join" />
          </div>

          <div>
            <p><small>OR</small></p>
          </div>

          <div className="fb-btn">
            <input type="button" className="fb" value="Join using Facebook" />
          </div>

          <div>
            <p><small><small>By joining, you agree to the Terms and Privacy Policy.</small></small></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
