import React from 'react';

export type TryButtonFunctionComponentType  = {
    name: string
    func: () => void
}

export const TryButtonFunctionComponent = (props: TryButtonFunctionComponentType) => {
    return (<button onClick={props.func}>{props.name}</button>);
};