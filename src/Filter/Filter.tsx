import React, {useState} from "react";
// import {FilterButton} from "./FilterButton/FilterButton";

type FilterType = 'all' | 'ruble' | 'dollar'


export const Filter = () => {
    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: ' a1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' z1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' w1234567890'},
        {banknote: 'dollar', nominal: 100, number: ' e1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' c1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' r1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' x1234567890'},
        {banknote: 'ruble', nominal: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money
    if (filter === 'dollar') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'dollar')
    }
    if (filter === 'ruble') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'ruble')
    }




    const onClickFilterHandler = (name: FilterType) => {
        setFilter(name)
    }





    return (
        <div>
            <>
                <ul>
                    {currentMoney.map((objFromMoneyArr) => {
                        return (
                            <li>
                                <span>{objFromMoneyArr.banknote} </span>
                                <span>{objFromMoneyArr.nominal} </span>
                                <span>{objFromMoneyArr.number} </span>
                            </li>
                        )
                    })}
                </ul>
                <button onClick={() => onClickFilterHandler('all')}>all</button>
                <button onClick={() => onClickFilterHandler('ruble')}>ruble</button>
                <button onClick={() => onClickFilterHandler('dollar')}>dollar</button>
            </>

        </div>
    )
}


