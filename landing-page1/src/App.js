import React, { useState } from 'react';
import './App.css';
import irisLogo from './images/irislogo.png';
import blurImage from './images/blur.png';
import buildImage1 from './images/build.jpg';
import buildImage2 from './images/build2.jpg';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';

const LandingPage = () => {
  const [message, setMessage] = useState({
    inquiry: '',
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    address: '',
    message: '',
    agreeToTerms: false
  });

  const isFormFilled = () => {
    return (
      message.inquiry !== '' &&
      message.firstName !== '' &&
      message.lastName !== '' &&
      message.email !== '' &&
      message.mobileNumber !== '' &&
      message.address !== '' &&
      message.message !== '' &&
      message.agreeToTerms
    );
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setMessage(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process message submission here
    console.log('Message submitted:', message);
    // Reset form fields
    setMessage({
      inquiry: '',
      firstName: '',
      lastName: '',
      email: '',
      mobileNumber: '',
      address: '',
      message: '',
      agreeToTerms: false
    });

    // Display confirmation message using alert
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div>
      <nav className="navbar" data-aos="fade-up-right">
        <div className="max-width">
          <div className="logo"><img alt="" src={irisLogo} width="500" /></div>
          <ul className="menu">
            <li><a href="#container" className="menu-btn">About Us</a></li>
            <li><a href="#pre-selling" className="menu-btn">Residence</a></li>
            <li><a href="#news-events" className="menu-btn">News</a></li>
            <li><a href="#message-us" className="menu-btn">Contact Us</a></li>
            <li><a href="#signup" className="menu-btn">Sign Up</a></li>
          </ul>
          <div className="menu-btn">
            <em className="fas fa-bars"></em>
          </div>
        </div>
      </nav>

      <div className="container3"><img alt="" src={blurImage} width="1500" height="720"/></div>

      <div id="container" className="container">
        <h1>Elevating Dreams, Building Futures.</h1>
      </div>

      <div className="container2">
        <h2>Welcome to a world of elevated living. We specialize in crafting
          exceptional condominiums that redefine urban luxury and convenience.
          Experience the pinnacle of contemporary living with us.</h2> 
      </div>

      <div className="button-wrapper">
        <input type="button" className="button" value="Learn More &#8594;" />
      </div>

      <div id="pre-selling" className="row">
        <div className="column">
          <div className="card">
            <img src={buildImage1} alt="Avatar" width="350" height="430" />
            <div className="card1">
              <h4><b>Pre-Selling</b></h4>
              <p>Explore Category</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={buildImage2} alt="Avatar" width="360" height="433" />
            <div className="card1">
              <h4><b>Pre-Selling</b></h4>
              <p>Explore Category</p>
            </div>
          </div>
        </div>
      </div>

      <div id="news-events" className="container4"><h4>News & Event</h4></div>

      <div className="row">
        <div className="column">
          <div className="card2">
            <img src={image1} alt="placeholder" style={{ width: '350px', height: '250px' }} className="pic" />
            <div className="cardtext">
              <p>The Irisclane Tower Inc. family trooped to its legacy hotel
                and acclaimed leisure development - the Las Casas Filipinas
                De Acuzar in Bagac, Bataan to hold a successful annual
                awards night and sales rally.</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card2">
            <img src={image2} alt="placeholder" style={{ width: '350px', height: '250px' }} className="pic" />
            <div className="cardtext">
              <p>The Irisclane Tower Inc. family trooped to its legacy hotel
                and acclaimed leisure development - the Las Casas Filipinas
                De Acuzar in Bagac, Bataan to hold a successful annual
                awards night and sales rally.</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card2">
            <img src={image3} alt="placeholder" style={{ width: '350px', height: '250px' }} className="pic" />
            <div className="cardtext">
              <p>The Irisclane Tower Inc. family trooped to its legacy hotel
                and acclaimed leisure development - the Las Casas Filipinas
                De Acuzar in Bagac, Bataan to hold a successful annual
                awards night and sales rally.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="message-us" className="container5"><h4>Get in Touch</h4></div>
      <div className="container6">
        <h4>Message Us</h4>
        <form onSubmit={handleSubmit}>
          <div className="inquiry">
            <input type="text" name="inquiry" placeholder="Type of Inquiry" size="48" value={message.inquiry} onChange={handleChange} />
          </div>
          <div className="firstname">
            <input type="text" name="firstName" placeholder="First Name*" size="19" value={message.firstName} onChange={handleChange} /> 
          </div>
          <div className="lastname">
            <input type="text" name="lastName" placeholder="Last Name*" size="19" value={message.lastName} onChange={handleChange} />
          </div>
          <div className="email">
            <input type="text" name="email" placeholder="Email*" size="19" value={message.email} onChange={handleChange} />
          </div>
          <div className="mobile">
            <input type="text" name="mobileNumber" placeholder="Mobile Number*" size="19" value={message.mobileNumber} onChange={handleChange} />
          </div>
          <div className="address">
            <input type="text" name="address" placeholder="Address*" size="48" value={message.address} onChange={handleChange} />
          </div>
          <div className="message">
            <textarea id="message" name="message" rows="4" cols="50" value={message.message} onChange={handleChange} />
            <input type="checkbox" name="agreeToTerms" checked={message.agreeToTerms} onChange={handleChange} />
            <p>I agree to ICT's Terms, Conditions, and Privacy Policy.</p>
          </div>
          <div className="send-button">
            <input type="submit" className="send" value="Send" disabled={!isFormFilled()} />
          </div>
        </form>
      </div>

      <div className="footer">
        <footer>
          <img className="footerlogo" alt="" src={irisLogo} width="450" />
          <h4>Elevating Dreams, Building Futures.</h4>
          <div className="twitter">   
            <img src="images/twitter.png" alt="" width="25px" />
          </div>
          <div className="fb">
            <img src="images/fb.png" alt="" width="33px" />
          </div>
          <div className="insta">
            <img src="images/insta.png" alt="" width="27px" />
          </div>
          <div className="linkedin">
            <img src="images/linkedin.png" alt="" width="31px" />
          </div>
          <div className="sheng">
            <img src="images/sheng.png" alt="" width="31px" />
          </div>

          
          <div className="copyright">
            <p>Copyright © 2024 Irisclane Tower Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;