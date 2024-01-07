import React from 'react';
import ReactDOM from 'react-dom/client';

const array = [<h1>Hello</h1>, <h1>World!!!</h1>]

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(array);