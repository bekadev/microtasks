import React from 'react';

export type MapComponentPropsType = {
    cars: Array<MapComponentType>
}

export type MapComponentType = {
    id: number
    name: string
    age: number
    bestcolor: string
}

export const MapComponent: React.FC<MapComponentPropsType> = (props) => {
    return (
        <ul>
            {props.cars.map((element)=>{
                return (
                    <li key={element.id}>
                        <span>{element.name}</span>
                        |
                        <span>{element.age}</span>
                        |
                        <span>{element.bestcolor}</span>
                    </li>
                )
            })}
        </ul>
    );
};