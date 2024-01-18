import React from 'react';
import ReactDOM from 'react-dom/client';

let Tulisan = (props) => {
    return <ul><li>Saya adalah {props.buah}</li></ul>
}

let Buah = () => {
    let jenisBuah = ["Mangga", "Kiwi", "pisang"];
    return (
        <>
            <h1>Buah!!!!!!!!!!!!!!!!!!!</h1>
            {jenisBuah.map((item) => <Tulisan buah={item} />)}
        </>
    );
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Buah/>);