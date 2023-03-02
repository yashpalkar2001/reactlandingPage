import React from "react";
import img from "./love.svg";

import FiftCss from "./FifthPart.css";


function FifthPart() {
    return (
        <>
            <div className="FifthContainert">
                <div className="FifthImage">
                    <img src={img} alt="image" />
                </div>

                <div className="FifthTextbox">
                    <h6>Testimonials</h6>
                    <h3>
                        Our Clients <span>Love Us </span>
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
                        minim veniam.
                    </p>

                    <div className="FifthAnimeBox">

                        <div className="FifthDfalt">
                            <span>star</span>
                            <h4>Amazing User Experience</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua enim
                                ad minim veniam.Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua enim ad minim veniam.
                            </p>
                            <div>
                                <span>image</span>
                                <span>Charlotte Hal</span>
                                <div id="he">CEO,Delos Inc</div>

                            </div>

                        </div>


                    </div>

                </div>
            </div>
        </>
    );
}
export default FifthPart;
