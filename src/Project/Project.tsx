import React, {useState} from 'react';
import {HeaderComponent} from './HeaderComponent/HeaderComponent';
import {PageComponent} from './PageComponent/PageComponent';
import {v1} from 'uuid';

export const Project = () => {
    const [headerDate, setHeaderDate] = useState( [
        {id: v1(), title: 'Клиентам'},
        {id: v1(), title: 'Бизнесу'},
        {id: v1(), title: 'Kaspi Гид'}
    ])
    const removeTitle = (id: string) => {
        let filteredTitle = headerDate.filter(t => t.id !== id )
        setHeaderDate(filteredTitle)
    }
    return (
        <div>
            <HeaderComponent headerDate={headerDate} removeTitle={removeTitle}/>
            <PageComponent />
        </div>
    );
};

