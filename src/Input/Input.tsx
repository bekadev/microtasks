import React, {useState} from 'react';
import {FullInput} from "./Components/FullInput";

export const Input = () => {

    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    return (
        <div>
            <FullInput addMessage={addMessage}/>
            {message.map((el: {message: string}, index: number) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};

