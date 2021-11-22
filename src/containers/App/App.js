import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import Footer from "./Footer/Footer";
import SportContext from "../../components/Sport";
import Server from '../../Server/Server';
import {sportBuilds} from '../../components/data'

function App() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
            fetchPosts()
        }, [])
           

    async function fetchPosts(){
      setLoading(true)
      setTimeout(async()=>{
        const cards = await Server.getAll();
        setGoods(cards)
        setLoading(false)
      }, 1000)
     
    }

    return (
        <>
        {loading
          ?
          <SportContext.Provider value={sportBuilds}>
                <Header/>
                <Footer/>
            </SportContext.Provider>
          :
          <SportContext.Provider value={goods}>
          <Header/>
          <Footer/>
      </SportContext.Provider>}
            
        </>
    );
}

export default App;