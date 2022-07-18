import React from "react";

type ButtonComponentType = {
    name: string
    callBack: () => void
}

export const ButtonComponent = (props: ButtonComponentType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}