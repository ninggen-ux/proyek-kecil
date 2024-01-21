import React from 'react';
import ReactDOM from 'react-dom/client';

let Masukkan = () => {
    return (
        <form>
            <lebel>Masukkan Nama Anda:</lebel>
            <input type="text"></input>
        </form>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Masukkan/>);