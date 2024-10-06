import "./scss/main.scss";
import CardItemDinamis from "./components/Card__item__dinamis.jsx";
import Card from "./components/Card.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Card />} />
                <Route path="card-item-dinamis" element={<CardItemDinamis />} />
            </Routes>
        </BrowserRouter>
    );
}
