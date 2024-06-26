import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Layout from "./pages/Layout.tsx";
import Main from "./pages/Main.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path={"/"} element={<Main/>}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
