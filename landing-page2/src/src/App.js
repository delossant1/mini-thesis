import React from 'react';
import './App.css'; // Import your CSS file
import fb from './images/fb.png';
import insta from './images/insta.png';
import irislogo from './images/irislogo.png';
import linkedin from './images/linkedin.png';
import logo from './images/logo.png';
import logoo from './images/logoo.png';
import pic1 from './images/pic1.png';
import pic2 from './images/pic2.jpg';
import pic3 from './images/pic3.png';
import pic4 from './images/pic4.png';
import pic5 from './images/pic5.png';
import pic6 from './images/pic6.png';
import pic7 from './images/pic7.png';
import pic8 from './images/pic8.png';
import piconee from './images/piconee.jpg';
import pictwoo from './images/pictwoo.jpg';
import twitter from './images/twitter.png';
import homeIcon from './images/home.png';
import heartIcon from './images/heart.png';
import bellIcon from './images/bell.png';
import emailIcon from './images/email.png';
import profileIcon from './images/profile.png';

const LandingPage2 = () => {
    return (
        <div>
      <nav className="navbar" data-aos="fade-up-right">
        <div className="max-width">
          <div className="logo"><img alt="" src={irislogo} width="500" /></div>
          <ul className="icons">
            <li><img src={homeIcon} alt="" width="" height="60px" /></li>  
            <li><img src={heartIcon} alt="" width="" height="63px" /></li>
            <li><img src={bellIcon} alt="" width="" height="60px" /></li>
            <li><img src={emailIcon} alt="" width="" height="60px" /></li>
            <li><img src={profileIcon} alt="" width="" height="57px" /></li>
          </ul>
        </div>
      </nav>

            <div className="two">
                <h1>It's proudly for us to build stylish & elegant interior design</h1>
                <hr />
                <p className="three">Welcome to a world of elevated living. We specialize in crafting
                    exceptional condominiums that redefine urban luxury and convenience. Experience the pinnacle of contemporary living with us.</p>
            </div>

            {/* Slideshow */}
            <div className="picone">
                <img className="mySlides" src={pic1} alt="picone" width="1000" height="530" />
            <div className="pictwo">
                <img className="mySlides" src={pic2} alt="pictwo" width="1000" height="530" />
            <div className="piconee">
                <img className="mySlides" src={piconee} alt="piconee" width="1000" height="530" />
            <div className="pictwoo">
                <img className="mySlides" src={pictwoo} alt="pictwoo" width="1000" height="530" />
                

                <div className="line1">
                    <hr className="hr1" />
                </div>
                <p className="five">About </p><p className="six">us</p>
                <div className="picthree">
                    <img src={pic3} alt="picthree" width="950" height="550" />
                </div>
                <p className="eight"> Welcome to Irisclane, your home where modern comfort meets simplicity.</p>
                <p className="nine">The Irisclane team is here to make your experience smooth and enjoyable. From your first inquiry to move-in day, our dedicated team is ready to assist you every step of the way.</p>
                <hr className="line2" />
            </div>
            </div>
            </div>
            </div>

            {/* Three Equal Columns */}
            <h2>Three Equal Columns</h2>
            <div className="container">
                <div className="column" style={{ backgroundColor: '#87CEEB' }}>
                    <div className=""><h2> Our Mission </h2></div>
                    <p>At irisclane, our mission is to redefine the essence of modern living by creating a harmonious and inspiring community that embraces simplicity, sustainability, and a sense of belonging.</p>
                    <hr className="h13" />
                </div>
                <div className="column" style={{ backgroundColor: '#87CEEB' }}>
                    <div className=""><h2> Our Vision </h2></div>
                    <p>At Irisclane, we aim to provide a hassle-free and welcoming living experience. Our vision is to create a place where you can enjoy the simplicity of life without compromising on style or convenience.</p>
                    <hr className="h13" />
                </div>
                <div className="column" style={{ backgroundColor: '#87CEEB' }}>
                    <div className=""><h2> Our Team </h2></div>
                    <p>The Irisclane team is here to make your experience smooth and enjoyable. From your first inquiry to move-in day, our dedicated team is ready to assist you every step of the way.</p>
                    <hr className="h14" />
                </div>
            </div>
            <hr className="line3" />

            <p className="a">Discover </p><p className="b">us</p>
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="picfour">
                <img src={pic4} alt="picfour" width="1000" height="500" />
            </div>
            <div className="picfive">
                <img src={pic5} alt="picfive" width="1000" height="500" />
            </div>
            <div className="picsix">
                <img src={pic6} alt="picsix" width="1000" height="500" />

      
            </div>
            <p className="ten">Paradise Cover |1104 sqf.</p>
            <p className="visit"><u>Visit Units</u></p>

            <div className="line4"></div>
            <p className="c">Rules </p>
            <div className="text">
                <p> 1. Quiet Hours:Respect your neighbors by observing designated quiet hours. Keep noise levels to</p>
                <p> a minimum from [start time] to [end time] to ensure a peaceful living environment.</p>
                <p> 2. Common Area Etiquette:When using shared spaces such as lobbies, elevators, and fitness centers</p>
                <p> be mindful of others. Keep these areas clean, avoid blocking pathways, and follow any posted guidelines.</p>
                <p> 3. Parking Regulations:Adhere to designated parking spaces and follow any assigned regulations. Illegally parked</p>
                <p> vehicles may be subject to towing at the owner's expense.</p>
                <p> 4. Pet Policies:If pets are allowed, adhere to the community's pet policies. Keep pets on leashes</p>
                <p> in common areas, clean up after them promptly, and ensure they do not disrupt other residents.</p>
                <p> 5. Trash Disposal:Properly dispose of trash in designated areas. Follow recycling guidelines and refrain</p>
                <p>from leaving items in common spaces. This ensures a clean and sanitary living environment for everyone.</p>
                <div className="picseven">
                    <img src={pic7} alt="picseven" width="600" height="500" />
                    <hr className="twelve" />
                </div>
                <p className="d">A Closer Look at the Location </p>
            </div>
            <div className="piceight">
                <img src={pic8} alt="piceight" width="1500" height="700" />
                <div className="box3"></div>
                <div className="box4"></div>
                
                <div className="logoo">
                    <img src={logoo} alt="piceight" width="100" height="80" />
                    <div className="towerloc"></div>
                    <p className="towerloc">Irisclane Tower</p>
                    <div className="contact">
                        <p className="Contactus">Contact us</p>
                        <ul className="social-icon">
                            <li><a href="https://www.facebook.com" className="fa fa-facebook"></a></li>
                            <li><a href="https://www.instagram.com/accounts/login/" className="fa fa-instagram"></a></li>
                            <li><a href="https://www.google.com/account/about/" className="fa fa-fw fa-envelope"></a></li>
                            <li><a href="#" className="fa fa-phone"></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer">
                    <footer>
                        <img className="footerlogo" alt="" src={irislogo} width="550" />
                        <h4>Elevating Dreams, Building Futures.</h4>
                        <div className="twitter">
                            <img src={twitter} alt="" width="25px" />
                        </div>
                        <div className="fb">
                            <img src={fb} alt="" width="35px" />
                        </div>
                        <div className="insta">
                            <img src={insta} alt="" width="27px" />
                        </div>
                        <div className="linkedin">
                            <img src={linkedin} alt="" width="31px" />
                        </div>
                        <div className="copyright">
                            <p>Copyright © 2024 Irisclane Tower Inc. All rights reserved.</p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
        
    );
}



export default LandingPage2;


