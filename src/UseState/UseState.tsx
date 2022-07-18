import React, {useState} from "react";

export const UseState = () => {
    let[a, setA] = useState(1)

    const onClickStateUpHandler = () => {
        setA(++a)
    }

    const onClickStateZeroHandler = () => {
        setA(0)
    }

    return (

        <div>
            <h1>{a}</h1>
            <button onClick={onClickStateUpHandler}>up</button>
            <button onClick={onClickStateZeroHandler}>0</button>
        </div>
    )
}