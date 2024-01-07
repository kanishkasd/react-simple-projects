import { useEffect, useState } from "react"

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('#000000')

    const handleCreateRandomColor = () => { }

    const handleCreateRandomRGBColor = () => {
        const r = randomColorUtility(255)
        const g = randomColorUtility(255)
        const b = randomColorUtility(255)

        setColor(` rgb(${r}, ${g}, ${b} )`);
    }

    const randomColorUtility = (length) => {

        return Math.floor(Math.random() * length)
    }


    const handleRandomHexColor = () => {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        let hexColor = '#'

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor)
    }

    useEffect(() => {
        if(typeOfColor === 'hex') handleRandomHexColor()
        else handleCreateRandomRGBColor()
    }, [typeOfColor])

    return (
        <div style={{ width: "100vw", height: "100vh", background: color }}>
            <button onClick={() => setTypeOfColor('hex')}>Get Hex Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Get RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleRandomHexColor : handleCreateRandomRGBColor}>Get Random Color</button>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", color: "white", fontSize: "50px", marginTop: "50px", flexDirection:"column", gap: "20px" }}>
                <h3>{typeOfColor === 'rgb' ? "RGB Color" : "Hex Color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}

