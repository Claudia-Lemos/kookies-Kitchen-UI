import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import "tailwindcss";

const AppLayout = () => {
    return (
<div>
<Header />
</div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)

