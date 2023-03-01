import React, { useState } from "react";
import SixthCss from "./SixthPart.css";

function SixthPart() {
    const [show, setShow] = useState(true);
    function change() {
        setShow(!show);
    }
    return (
        <>
            <div className="SixContainer">
                <div className="SixtUpperbox">
                    <h6>Pricing</h6>
                    <h3>
                        Flexible <span> Plans </span>
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button className="btnContainer" >



                        <button className="month" onClick={change}>Monthly</button>{show}


                        {show} <button className="year" onClick={change}>Yearly</button>

                    </button>
                </div>
                <div className="SixthSecondBox">
                    <div className="PrinceCo1">
                        <div className="freeplanUpper">
                            <h2>$0
                                <span>/ month</span>
                                <span>/ year</span>
                            </h2>
                            <h3>Free Plan</h3>
                            <h6>For Personal Blogs</h6>
                        </div>

                        <div className="freeplanLower">
                            <h6>30 Templates</h6>
                            <h6>7 Landing Pages</h6>
                            <h6>12 Internal Pages</h6>
                            <h6>Basic Assistance</h6>
                            <button>Buy Now</button>
                        </div>
                    </div>
                    <div className="PrinceCo2">
                        <div className="ProplanUpper">
                            <h2>$49<span>/ month</span> <span>/ year</span></h2>
                            <h3>Pro Plan</h3>
                            <h6>Suited for Production Websites</h6>
                        </div>

                        <div className="ProplanLower">
                            <h6>60 Templates</h6>
                            <h6>8 Landing Pages</h6>
                            <h6>22 Internal Pages</h6>
                            <h6>Priority Assistance</h6>
                            <h6>Lifetime Updates</h6>
                            <div>
                                <button>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SixthPart;
