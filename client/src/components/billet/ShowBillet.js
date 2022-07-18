import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BilletCard from './BilletCard';
const WatchBillet = () => {
    const [billet, setBillet] = useState([]);
    const url = 'http://localhost:4242/billet';
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setBillet(response.data);
            })
            .catch((error) => {
                console.log("l'erreur est " + error);
            });
    }, [])
    return (
        <BilletCard billet={billet}/>
    );
}
export default WatchBillet;