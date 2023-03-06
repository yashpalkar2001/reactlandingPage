import React from "react";
import img from "./team.svg";
import "./FourthPart.css";

function FourthPart() {
    return (
        <>
            <div className="FourthContainert">
                <div className="fourtImage">
                    <img src={img} alt="image" />
                </div>
                <div className="fourthTextbox">
                    <h6>Our Expertise</h6>
                    <h3>Cloud built by and for <span>Professionals</span></h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </p>

                    <div className="FourthSmallText">
                        <div className="leftside">

                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-briefcase"
                                >
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                </svg>
                            </span>
                            <span>Professionalism</span>
                            <p>
                                We have the best professional marketing people across the globe
                                just to work with you
                            </p>
                        </div>
                        <div className="rightside">
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-dollar-sign"
                                >
                                    <line x1="12" y1="1" x2="12" y2="23"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg>
                            </span>
                            <span>Affordable</span>
                            <p>
                                We promise to offer you the best rate we can - at par with the
                                industry standard.
                            </p>
                        </div>

                    </div>
                    <div >
                        <button className="fourthbtn">Learn More</button>
                    </div>
                </div>

            </div>

        </>
    );
}
export default FourthPart;
