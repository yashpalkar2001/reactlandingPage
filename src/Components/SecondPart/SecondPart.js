import React from 'react'
import SecondCss from "./SecondPart.css"

function SecondPart() {
    return (
        <>
            <div className='container1'>
                <div className='upperText'>
                    <h1>Over 9000 Projects Completed</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='secondbox'>

                    <div className='secondbox' id='box1'>
                        <h1>2500+</h1>
                        <span>Clients</span>
                    </div>
                    <div className='secondbox' id='box2'>
                        <h1>$100M+</h1>
                        <span>Revenue</span>
                    </div>
                    <div className='secondbox' id='box3'>
                        <h1>150+</h1>
                        <span>Employees</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SecondPart;