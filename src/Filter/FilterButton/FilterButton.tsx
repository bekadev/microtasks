import React from "react";

type FilterButtonType = {
    name: string
    callBack: () => void
}

export const FilterButton = (props: FilterButtonType) => {



    const FilterButtonHandler = () => {
        props.callBack()
    }

    return <button onClick={FilterButtonHandler}>{props.name}</button>


}

