import React from 'react';
import ReactDOM from 'react-dom/client';
import img from './img/logo192.png';

function Nama() {
    return (
        <>
            <img src={img} alt='react logo' width="100px"/>
            <h1>
                Hello World!!!
            </h1>
            <ul>
                <li>Hello World!!!</li>
                <li>Hello World!!!</li>
                <li>Hello World!!!</li>
                <li>Hello World!!!</li>
                <li>Hello World!!!</li>
            </ul>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Nama/>);