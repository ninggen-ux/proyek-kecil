import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function Nama() {
    const [areaText, setAreaText] = useState("Tulisan ini ada di dalam text area");

    const onChangeHandler = acara => {
        setAreaText(acara.target.value);
    }

    return (
        <form>
            <textarea value={areaText} onChange={onChangeHandler}/>
        </form>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Nama/>);