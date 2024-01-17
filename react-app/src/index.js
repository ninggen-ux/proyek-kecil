import React from 'react';
import ReactDOM from 'react-dom/client';

let StartBaik = () => {
    return <h1>Mobil di Start dengan baik</h1>
}

let StartKurangBaik = () => {
    return <h1>Mobil tidak menyala</h1>
}

let Mobil = (props) => {
    let mobil = props.start;

    return (
        <>
        {mobil ? <StartBaik/> : <StartKurangBaik/>}
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Mobil start={true} />);