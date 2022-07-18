import React from "react";

type HeaderPropsType = {
    name: string
}



export const Header = (props: HeaderPropsType) => {
    return (
        <div>
            <div>{props.name}</div>
        </div>
    )
}