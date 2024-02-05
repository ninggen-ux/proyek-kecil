import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function Nama() {
    const [masukkan, setMasukkan] = useState({});

    const changeHandler = event => {
        const nama = event.target.name;
        const nilai = event.target.value;
        setMasukkan(nilaiNilai => ({
            ...nilaiNilai, [nama]: nilai
        }))
    }

    const submitHandler = event => {
        event.preventDefault();
        console.log(masukkan);
    }

    return (
        <form onSubmit={submitHandler}>
            <label>
                Masukkan nama anda:
            </label>
            <input type='text' name='Nama' onChange={changeHandler}/>
            <label>
                Masukkan nama belakang anda:
            </label>
            <input type='text' name='NamaBelakang' onChange={changeHandler}/>
            <input type='submit'/>
        </form>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Nama/>);