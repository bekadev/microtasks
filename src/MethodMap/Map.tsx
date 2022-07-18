import React from "react";

type MapTypeProps = {
    students: Array<StudentsTypeProps>
}

type StudentsTypeProps = {
    id: number
    name: string
    age: number
}

export const Map = (props: MapTypeProps) => {
    return (
        <ul>
            {props.students.map((t, index) => {
                return (
                    <li key={t.id}>
                        <span>{t.name} </span>
                        <span>{t.age} </span>
                    </li>
                )
            })}
        </ul>
    )
}