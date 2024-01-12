import React from 'react';
import ReactDOM from 'react-dom/client';
const batu = {
    nama: "Batu",
    tinggi: "tinggi 60cm",
    beratBadan: "berat badan 652kg"
}

let Gaje = (props) => {
    return <h2>Nama saya {props.batu.nama} dan saya memiliki {props.batu.beratBadan}!</h2>;
}

let GajeDua = () => {
    return (
        <>
            <h1>Hallo!!!!!!!!!!</h1>
            <Gaje batu={batu} />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GajeDua/>);