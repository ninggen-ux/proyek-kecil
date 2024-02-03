import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function Nama() {
    const [nama, setName] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        const namaMasuk = document.querySelector(".nama-masuk");
        namaMasuk.textContent = `nama anda adalah: ${nama}`;
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>
                    Masukkan Nama Anda:
                <input
                    type='text'
                    value={nama}
                    onChange={e => setName(e.target.value)} />
                </label>
                <input type='submit'/>
            </form>
            <h1 className='nama-masuk'>{""}</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Nama/>);