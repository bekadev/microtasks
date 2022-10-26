import React from 'react';
import {TryButtonFunctionComponent} from './TryButtonFunctionComponent';

export const TryButtonFunction = () => {
    const ClickerButton = () => {
        alert('rly?')
    }
    return (
        <div>
            <TryButtonFunctionComponent name={'cliker'} func={ClickerButton}/>
        </div>
    );
};