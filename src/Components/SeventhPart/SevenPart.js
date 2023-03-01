import React from 'react'
import Collapsible from 'react-collapsible'
import SevenCss from './SevenPart.css'

function SevenPart() {
    return (
        <>
            <div className="SevenContainer">
                <div className="SixtUpperbox">
                    <h6>FAQS</h6>
                    <h3>
                        Any <span> Questions ?</span>
                    </h3>
                    <p>
                        And we have got answers to all of them. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                </div>
                < div className="Sixtlowerbox">
                    < div className="Sixtlowerbox1">
                        <Collapsible className='trigger1' trigger="Is lunch provided free of cost ?">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.
                        </Collapsible>
                    </div>
                    < div className="Sixtlowerbox1">
                        <Collapsible className='trigger2' trigger="Do you have two Badroom suites ?">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.
                        </Collapsible>
                    </div>
                    < div className="Sixtlowerbox1">
                        <Collapsible className='trigger3' trigger="Are Wi-Fi costs included in the price ?">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.
                        </Collapsible>
                    </div>
                    < div className="Sixtlowerbox1">
                        <Collapsible className='trigger4' trigger="Where can i reach you for support ?">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.
                        </Collapsible>
                    </div>
                </div>

            </div>
        </>
    )
}
export default SevenPart;