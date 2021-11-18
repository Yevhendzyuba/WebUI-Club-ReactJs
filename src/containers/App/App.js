import React from 'react';
import Header from './Header/Header';
import Footer from "./Footer/Footer";
import {sportBuilds} from "../../components/data";
import SportContext from "../../components/Sport";
function App() {

    return (
        <>
            <SportContext.Provider value={sportBuilds}>
            <Header/>
            <Footer/>
            </SportContext.Provider>
        </>
    );
}

export default App;