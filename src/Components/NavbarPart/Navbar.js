import React, { useState } from "react";
import logo from './logo.2.svg'
import "./Navbar.css";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className="main-nav">
                {/* 1st logo part  */}
                <div className="logo">
                    <img src={logo} alt="image" />
                    <h2>

                        <span>Treact</span>
                    </h2>
                </div>

                {/* 2nd menu part  */}
                <div
                    className={
                        showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                    }>
                    <ul>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="/ ">Blog</a>
                        </li>
                        <li>
                            <a href="/ ">Pricing</a>
                        </li>
                        <li>
                            <a href="/ ">Contact Us</a>
                        </li>
                        <li>
                            <a href="/ ">Testimonials</a>
                        </li>
                    </ul>
                </div>

                {/* 3rd social media links */}
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a
                                href="#"
                            >
                                Login
                            </a>
                        </li>

                        <a
                            href="#"
                        >
                            <button className="instagram">SignIn</button>
                        </a>


                    </ul>

                    {/* hamburget menu start  */}
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>
            </nav>

         
        </>
    );
};

export default Navbar;
