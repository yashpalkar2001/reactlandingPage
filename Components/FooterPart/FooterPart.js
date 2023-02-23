import React from 'react'
import FooterCss from './FooterPart.css'




function FooterPart() {
    return (
        <>
            <footer className='FootContainer'>
                <div className='FootUpperbox'>
                    <div>
                        <h4>MAIN</h4>
                        <span>Blog</span>
                        <span>FAQs</span>
                        <span>Support</span>
                        <span>About Us</span>
                    </div>
                    <div>
                        <h4>PRODUCT</h4>
                        <span>Log In</span>
                        <span>Personal</span>
                        <span>Business</span>
                        <span>Team</span>
                    </div>
                    <div>
                        <h4>PRESS</h4>
                        <span>Logos</span>
                        <span>Events</span>
                        <span>Stories</span>
                        <span>Office</span>
                    </div>
                    <div>
                        <h4>LEGAL</h4>
                        <span>GDPR</span>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Disclaimer</span>
                    </div>
                    <div>
                        <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
                        <span>We deliver high quality blog posts written by professionals weekly. And we promise no spam.</span>
                        <input type="email" placeholder="Your Email Address" />
                        <input type="submit" >Subscribe
                        </input>
                    </div>
                </div>
                <div className='FootLowerbox'>
                    <div>Treact Inc.</div>
                    <div>&copy; 2018 Treact Inc. All Rights Reserved.</div>
                    <div>
                        <span>facebook</span>
                        <span>twitter</span>
                        <span>youtube</span>
                    </div>

                </div>
            </footer>
        </>
    );
};
export default FooterPart;