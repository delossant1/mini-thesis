import React, { useState } from 'react';
import './App.css';
import irisLogo from './images/irislogo.png';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [resetPasswordStatus, setResetPasswordStatus] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setLoginStatus(''); // Clear login status when email changes
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setLoginStatus(''); // Clear login status when password changes
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (email === 'elizabeth' && password === 'elii mylove') {
      setLoginStatus('Login successful!');
    } else {
      setLoginStatus('Incorrect email or password. Please try again.');
    }
    setResetPasswordStatus(''); // Clear reset password status
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    setResetPasswordStatus('A password reset email has been sent to your email address.');
    setLoginStatus(''); // Clear login status
  };

  return (
    <div>
      <div className="logo">
        <img src={irisLogo} alt="irisclane icon" style={{ width: '105px' }} />
        <h1>IRISCLANE TOWER INC.</h1>
      </div>

      <div className="container">
        <div className="inner-logo">
          <img src={irisLogo} alt="another icon" style={{ width: '100px', marginBottom: '40px' }} />
        </div>
        
        <form onSubmit={handleLogin}>
          <input 
            type="text" 
            placeholder="Email" 
            value={email} 
            onChange={handleEmailChange} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={handlePasswordChange} 
          />
          <div className="forgot-password">
            <a href="#" onClick={handleForgotPassword}><small>Forgot your Password?</small></a>
          </div>
          <div>
            <input type="submit" className="login" value="Login" />
          </div>
          <div>
            <p><small>{loginStatus || resetPasswordStatus}</small></p> {/* Display either login or reset password status message */}
            <p><small>Don't have an account?</small></p>
            <a href="#"><small>Sign Up</small></a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
