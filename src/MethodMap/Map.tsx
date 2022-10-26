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
            {props.students.map((t,index) => {
                return (
                    <ul key={t.id}>
                        <li>{t.age}</li>
                        <li>{t.name}</li>
                    </ul>
                )
            })}
        </ul>
    )
}
