import "./main.scss";
import { useState } from "react";

function App() {
    const [diameter, setDiameter] = useState(0);

    return (
        <div className="lingkaran">
            <label htmlFor="numberInput">Diameter</label>
            <input
                type="number"
                id="numberInput"
                onChange={(e) => {
                    setDiameter(e.target.value);
                }}
                value={diameter}
            />
            <h1>Luas Lingkaran: {(1 / 4) * 3.14 * diameter ** 2}</h1>
            <h1>Keliling Lingkaran: {3.14 * diameter}</h1>
        </div>
    );
}

export default App;
