import React, { useState } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Calculator from "./components/Calculator";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Users from "./components/Users";
import Istifadeciler from "./components/Istifadeciler";

// shift+alt+o -> remove unused imports
// dfgfnhg
function App() {
    const [show, setShow] = useState(false)
    return (
        <>
            <button
                onClick={() => {
                    setShow(!show)
                }}
            >{show ? "gizlet" : "goster"}</button>
            {
                show && <Istifadeciler />
            }
        </>
    )
}

export default App;
