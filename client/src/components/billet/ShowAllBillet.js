import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BilletCard from './BilletCard';
const ShowAllBillet = () => {
    const [billets, setBillets] = useState([]);
    // const createBillet = async (url) => {
    const url = 'http://localhost:4242/billet';
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                // console.log("data", response.data);
                setBillets(response.data);
            })
            .catch((error) => {
                console.log("l'erreur est " + error);
            });
    }, [])
    // }
    return (
        <div className='billet-box'>
            {billets.map(billet => <BilletCard key={billet._id} billet={billet}/>)}
        </div>
    );
}
export default ShowAllBillet;