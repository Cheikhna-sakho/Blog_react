import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const NewBillet = () => {
    const navigate = useNavigate();
    const data = {
        title: '',
        content: ''
    };
    const [dataValues, setdataValues] = useState(data);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setdataValues({ ...dataValues, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            createBillet('http://localhost:4242/billet/new');
        } catch (error) {
            console.log(error);
        }
    };
    const createBillet = async (url) => {
        // useEffect(() => {
        axios.post(url, dataValues)
            .then(function (response) {
                console.log(response);
                navigate("/billets");
            })
            .catch(function (error) {
                console.log("l'erreur est " + error);
            });
    }
    return (
        <div className='form-box'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <p><label htmlFor="title">Entrer le titre</label>
                <br/>
                <input type="text" name="title" id="title" onChange={(e) => handleChange(e)} /></p>
                <p><label htmlFor='content'>Ajouter le contenu</label><br/><textarea name="content" id="content" cols="30" rows="10" onChange={(e) => handleChange(e)}></textarea></p>
                <input type="submit" value="Enregistrer" />
            </form>
        </div>
    );
}
export default NewBillet;