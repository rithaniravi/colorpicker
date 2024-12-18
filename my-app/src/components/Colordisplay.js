import React, { useState } from 'react'
import Color from './Color'
import './color.css';

function Colordisplay() {
    const [color, setColor] = useState(null)

    const getColor = (clr) => {
        setColor(clr)
    }
    return (
        <>

            <h3 className='mt-5 d-flex justify-content-center '>Color Picker using React</h3>
            <div className='d-flex justify-content-center'>
                <div className='color-box mt-5 border d-flex justify-content-center' style={{ width: "400px", height: "300px" }}>

                    <div className='box mt-2 d-flex justify-content-center'
                        style={{ width: "250px", height: "200px", border: "2px solid", background: `${color}` }}>

                    </div>
                    <Color getColor={getColor} />




                </div>
            </div>
        </>
    )
}

export default Colordisplay;