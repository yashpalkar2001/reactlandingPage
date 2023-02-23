import React from "react";
import ThirdCss from "./ThirdPart.css";
import img1 from "./images/image1.svg"
import img2 from "./images/image2.svg";
import img3 from "./images/image3.svg";
import img4 from "./images/image4.svg";
import img5 from "./images/image5.svg";
import img6 from "./images/image6.svg";

function ThirdPart() {
    return (
        <>
            <div className="thirdContainer">
                <div className="thirdHeading">
                    <h6>Features</h6>
                    <h1>Amazing
                        <span >Features</span></h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="thirdbox ">

                    <div id="box1">
                        <span className="image">
                            <img src={img1} alt='img1' />
                        </span>
                        <span className="title">Secure </span>
                        <p>We strictly only deal with<br /> vendors that provide top <br />notch security.</p>
                    </div>

                    <div id="box2">
                        <span className="image">
                            <img src={img2} alt='img2' />
                        </span>
                        <span className="title"> 24/7 Support</span>
                        <p>Lorem ipsum donor amet<br /> siti ceali ut enim ad minim <br />veniam, quis nostrud.</p>
                    </div>

                    <div id="box3">
                        <span className="image">
                            <img src={img3} alt='img3' />
                        </span>
                        <span className="title">Customizable </span>
                        <p>Lorem ipsum donor amet<br /> siti ceali ut enim ad minim <br />veniam, quis nostrud.</p>
                    </div>

                    <div id="box4">
                        <span className="image">
                            <img src={img4} alt='img4' />
                        </span>
                        <span className="title">Reliable</span>
                        <p>Lorem ipsum donor amet <br />siti ceali ut enim ad minim<br /> veniam, quis nostrud.</p>
                    </div>

                    <div id="box5">
                        <span className="image">
                            <img src={img5} alt='img5' />
                        </span>
                        <span className="title">Fast</span>
                        <p> Lorem ipsum donor amet<br /> siti ceali ut enim ad minim<br /> veniam, quis nostrud.</p>
                    </div>

                    <div id="box6">
                        <span className="image">
                            <img src={img6} alt='img6' />
                        </span>
                        <span className="title">Easy</span>
                        <p> Lorem ipsum donor amet <br />siti ceali ut enim ad minim <br />veniam, quis nostrud.</p>
                    </div>

                </div>
            </div>
        </>
    );
}
export default ThirdPart;
