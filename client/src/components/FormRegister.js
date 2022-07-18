import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function FormRegister() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const data = {
        login: '',
        email: '',
        password: '',
        // confPassword: '',
    };

    const [dataValues, setdataValues] = useState(data);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setdataValues({ ...dataValues, [name]: value });
    };
    const handleConfirmChange = (e) => {
        setPasswordConfirm(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (dataValues.password != passwordConfirm)
            setError('Verifier le mot de passe saisi');
        else {
            setError('');
            UserRegister('http://localhost:4242/auth/register');
        }
    };
    const UserRegister = async (url) => {
        // useEffect(() => {
        axios.post(url, dataValues)
            .then(function (response) {
                console.log(response);
                navigate("/login");
            })
            .catch(function (error) {
                console.log("l'erreur est " + error);
            });
        // }, []);
    };
    // action="http://localhost:4242/register"
    return (
        <div className='form-box'>
            {/* <pre>{JSON.stringify(dataValues)}</pre> */}
            <form onSubmit={(e) => handleSubmit(e)}>
                <p>
                    <label htmlFor="login">Entrer votre Nom d'utilisateur ou votre pseudo</label>
                    <br />
                    <input type="text" name="login" id="login" placeholder="Nom d'utilisateur ou pseudo"
                        minLength="8"
                        maxLength="20"
                        onChange={(e) => handleChange(e)} required />
                </p>
                <p>
                    <label htmlFor="email">Veillez saisir un adresse mail</label>
                    <br />
                    <input type="email" name="email" id="email" placeholder="joeDoe@exemple.com"
                        onChange={(e) => handleChange(e)}
                        pattern="^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$"
                        required />
                </p>
                <p>
                    <label htmlFor="password">Tapez votre mot de passe</label>
                    <br />
                    <input type="password" name="password" id="password" placeholder="abcd/pod.#dh"
                        minLength="8"
                        onChange={(e) => handleChange(e)} required />
                </p>
                <p>
                    <label htmlFor="passwordConfirm">Veillez confirmer votre mot de passe</label>
                    <br />
                    <input type="password" name="passwordConfirm" id="passwordConfirm"
                        onChange={(e) => handleConfirmChange(e)} required />
                </p>
                <div className='error'>{error}</div>
                <input type="submit" value="Enregistrer-vous" />

            </form>
        </div>
    );
}
export default FormRegister;