import React from 'react';
import ReactDOM from 'react-dom/client';
import img from './img/logo192.png';

function Halaman() {
    return (
        <>
            <img src={img} alt='react logo' width="40px"/>
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
root.render(<Halaman/>);