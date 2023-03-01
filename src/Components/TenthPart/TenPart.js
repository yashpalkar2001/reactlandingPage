import React from 'react'
import logo from './logo.2.svg'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import FooterCss from './FooterPart.css'

function TenthPart() {
    return (
        <>
            <footer className='FootContainer'>
                <div className='FootUpperbox'>
                    <div id='box1'>
                        <h4>MAIN</h4>
                        <span>Blog</span>
                        <span>FAQs</span>
                        <span>Support</span>
                        <span>About Us</span>
                    </div>
                    <div id='box2'>
                        <h4>PRODUCT</h4>
                        <span>Log In</span>
                        <span>Personal</span>
                        <span>Business</span>
                        <span>Team</span>
                    </div>
                    <div id='box3'>
                        <h4>PRESS</h4>
                        <span>Logos</span>
                        <span>Events</span>
                        <span>Stories</span>
                        <span>Office</span>
                    </div>
                    <div id='box4'>
                        <h4>LEGAL</h4>
                        <span>GDPR</span>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Disclaimer</span>
                    </div>
                    <div id='box5'>
                        <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
                        <span>We deliver high quality blog posts written by professionals weekly. And we promise no spam.</span>
                        <input type="email" placeholder="Your Email Address" />
                        <button>Subscribe</button>

                    </div>
                </div>
                <hr />
                <div className='FootLowerbox'>
                    <div><img src={logo} />
                        <h1>  Treact Inc.</h1></div>
                    <div> &copy; 2018 Treact Inc. All Rights Reserved.</div>
                    <div className='socialmedia'>
                        <span> <FaFacebook /></span>
                        <span><FaTwitter /></span>
                        <span><FaYoutube /></span>
                    </div>

                </div>
            </footer>
        </>
    );
};
export default TenthPart;