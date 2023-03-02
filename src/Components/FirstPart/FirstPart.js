import React from "react";
import photo from "./photo.avif";

import FirstCss from "./FirstPart.css";

function FirstBox() {
    return (
        <>
            <div className="container ">
                <section className="sec">
                    <div className="left">
                        <h1>Better, Faster and Cheaper Cloud.

                        </h1>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam.
                        </p>
                        <button className={FirstCss.getStartBtn}>Get Started</button>
                        <div className="List">
                            <li>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="TwoColumnWithFeaturesAndTestimonial__FeatureIcon-sc-7wvgyg-10 fxzKCH"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>

                                <span>  Available in 7 Locations</span>
                            </li>
                            <li>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="TwoColumnWithFeaturesAndTestimonial__FeatureIcon-sc-7wvgyg-10 fxzKCH"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>

                                <span>   Premium Internet Backbone</span>
                            </li>
                            <li>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="TwoColumnWithFeaturesAndTestimonial__FeatureIcon-sc-7wvgyg-10 fxzKCH"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>

                                <span>   99.99% Uptime SLA </span>
                            </li>
                        </div>
                    </div>
                    <div className="right">
                        <div className="box">
                            <div className="photo">
                                <div className="onBg"></div>
                            </div>

                            <div className="bg">
                                <img src={photo} alt="image" />
                            </div>
                            <div className="Textbox">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <span>Charlotte Hale </span>
                                <p> Delos Inc.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default FirstBox;