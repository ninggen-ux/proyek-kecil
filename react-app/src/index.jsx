import React from "react";
import ReactDOM from "react-dom/client";
import Page from "./jsx/Module";

function App() {
    return <Page />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
