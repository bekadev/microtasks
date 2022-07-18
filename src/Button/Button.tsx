import React, {MouseEvent} from "react";
import {ButtonComponent} from "./Component/ButtonComponent";

export const Button = () => {

    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }

    const ButtonClick = (name: string) => {
        console.log(name)
    }

    const ButtonPlus = (age: number) => {
        console.log(age)
    }

    return (
        // <div>
        //     <button onClick={() => onClickHandler('beka')}>ui</button>
        //     <button onClick={() => onClickHandler('beka')}>ub</button>
        // </div>
        <div>
            <ButtonComponent name={'click'} callBack={() => ButtonClick('beka')}/>
            <ButtonComponent name={'plus'} callBack={() => ButtonPlus(21)}/>
        </div>
    )
}