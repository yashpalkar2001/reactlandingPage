import React from 'react'
import human from './images/human.avif'
import EightCss from './EightPart.css'






function EightPart() {
    return (
        <>
            <div className="EightContainer">
                <div className="EightUpperbox">
                    <h6>Blog</h6>
                    <h3>
                        We love  <span>Writing </span>
                    </h3>

                </div>
                <div className="EightLowerbox">
                    <div className='eightbox1'>
                        <div className='img1'> </div>
                        <div>
                            <h6>Enjoying the beach life while on a vacation </h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <span><img src={human} /></span>
                            <div className='imgDesc'>
                                <span> Adam Cuppy</span>
                                <span>vlogger</span>
                            </div>
                        </div>
                    </div>
                    <div className='eightbox2'>
                        <div className='img2'> </div>
                        <div>
                            <h6>Getting the most out of your vacation</h6>
                            <span>Aaron Patterson</span>
                        </div>
                    </div>
                    <div className='eightbox3'>
                        <div className='img3'> </div>
                        <div>
                            <h6>Chossing the perfect Safaris in Africa</h6>
                            <span>Sam Phipphen</span>
                        </div>
                    </div>
                    <div className='eightbox4'>
                        <div className='img4'> </div>
                        <div>
                            <h6>Hiking during the monsoon in Asia</h6>
                            <span>Tony Hawk</span>
                        </div>
                    </div>
                    <div className='eightbox5'>
                        <div className='img5'> </div>
                        <div>
                            <h6>Must carry items while travelling to Thailand</h6>
                            <span>Himali Turn</span>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}
export default EightPart;