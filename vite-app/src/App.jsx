import { useState } from "react";
import audio from "./asset/Emu Otori.mp3";
import img from "./asset/otori transparan.png";
import "./index.css";

function App() {
    const audioEmu = document.querySelector(".root audio");
    const [wanderhoy, setWanderhoy] = useState(0);

    const fungsi = () => {
        setWanderhoy(wanderhoy + 1);
        audioEmu.currentTime = 0;
        audioEmu.play();
    };

    return (
        <>
            <audio src={audio}></audio>
            <img src={img} alt="Emu Otori" onClick={fungsi} />
            <h1>{wanderhoy}</h1>
        </>
    );
}

export default App;
