import React, { useState } from "react"



const Color = ({ getColor }) => {
    const [activeColor, setActiveColor] = useState([])
    const [copyColor, setCopyColor] = useState(false)
    const handleChange = (e) => {
        const { value } = e.target;
        setActiveColor(value);
        getColor(value)
    }
    const copyToClipboard = async () => {
        try {
            setCopyColor(true)
            await navigator.clipboard.writeText(activeColor)
            setTimeout(() => {
                setCopyColor(false)
            }, 2000)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="box mt-3 d-flex justify-content-center">
                <input type="color" value={activeColor} onChange={handleChange} />
                <div className="hexavalue border ms-2 p-2" style={{ width: "150px", height: "30px" }}>{activeColor}</div>
                <button onClick={copyToClipboard} className="btn ms-2 border-0 btn-primary">copy</button>

            </div>
            <p>{copyColor && "copied!"}</p>
        </>
    )
}

export default Color;