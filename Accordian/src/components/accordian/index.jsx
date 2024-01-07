// single selection

import { useState } from "react"
import data from "./data";
import "./styles.css";


// multi selection
export default function Accordian() {

    const [selected, setSelected] = useState(null);

    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);


    const handleSingleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    const handleMultiSelection = (getCurrentId) => {
        let newMultiple = [...multiple];

        const findIndexOfCurrentId = newMultiple.indexOf(getCurrentId);

        if (findIndexOfCurrentId === -1) {
            newMultiple.push(getCurrentId);
        }
        else {
            newMultiple.splice(findIndexOfCurrentId, 1);
        }

        setMultiple(newMultiple);
    }
    console.log(selected, multiple);



    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>

            <div className="accordian">
                {
                    data && data.length > 0 ? data.map((item) => (
                        <div className="item">
                            <div onClick={enableMultiSelection ? () => handleMultiSelection(item.id) : () => handleSingleSelection(item.id)} className="title">
                                <h3>{item.question}</h3>
                                <span>+</span>
                            </div>

                        {
                            enableMultiSelection ? multiple.indexOf(item.id) !== -1 && (
                                <div className="content">{item.answer}</div>
                            ): selected === item.id && (
                                <div className="content">{item.answer}</div>
                            )
                        }
                        </div>
                    )) : (
                        <div>No data Found!</div>
                    )}

            </div>
        </div>
    );
}
