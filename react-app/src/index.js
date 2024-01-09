import React from 'react';
import ReactDOM from 'react-dom/client';

let x = (5 + 5) * 10;
const contoh = <h1>{x > 10 ? "Lebih Besar" : "Lebih Kecil"}</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(contoh);