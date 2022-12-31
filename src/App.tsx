import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./NestedComponets/Header/Header";
import {Map} from "./MethodMap/Map";
import {Button} from "./Button/Button";
import {Filter} from "./Filter/Filter";
import {UseState} from "./UseState/UseState";
import {Input} from "./Input/Input";
import {TryButtonFunction} from './Button/TryButtonFunction/TryButtonFunction';
import {MapComponent} from './MethodMap/MapComponent';
import {Project} from './Project/Project';

function App() {

    const students = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]

    const cars = [
        {id: 1, name: 'Beka', age: 21, bestcolor: 'black'},
        {id: 2, name: 'Alua', age: 20, bestcolor: 'white'},
        {id: 3, name: 'Ayan', age: 20, bestcolor: 'pink'},
        {id: 4, name: 'Ramazan', age: 28, bestcolor: 'yellow'},
        {id: 5, name: 'Tolkyn', age: 24, bestcolor: 'black'},
        {id: 6, name: 'Aman', age: 21, bestcolor: 'blue'},
        {id: 7, name: 'Ahmet', age: 22, bestcolor: 'grean'},
        {id: 8, name: 'Kuat', age: 21, bestcolor: 'red'},
        {id: 9, name: 'Rahat', age: 21, bestcolor: 'purple'},
    ]

    return (
        <div className="App">
            <Project />
            <Header name={'beka'}/>
            <Map students={students}/>
            <Button/>
            <Filter/>
            <UseState/>
            <Input />
            <TryButtonFunction />
            <MapComponent cars={cars}/>
        </div>
    );
}

export default App;
