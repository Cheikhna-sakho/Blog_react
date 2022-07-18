// import React, { useState, useEffect } from 'react';
import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const FormLogin = () => {
    
    
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const data = {
        login: '',
        password: '',
    };
    const [dataValues, setdataValues] = useState(data);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setdataValues({ ...dataValues, [name]: value });
    };
    const userLogin = async (url) => {
        axios.post(url, dataValues)
            .then(function (response) {
                const userData = response.data.user;
                console.log(userData);
                localStorage.setItem('login', userData.login);
                navigate('/');
            })
            .catch(function (error) {
                setError('Utilisateur ou mot de passe incorrect')
                console.log(error);
            });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            userLogin('http://localhost:4242/auth/login');

        } catch (error) {
            console.log(error);
        }
        // setError('');
    }
    return (
        <div className='form-box'>
            <form action="http://localhost:4242/login" onSubmit={(e) => handleSubmit(e)} >
                <div className='error'>{error}</div>
                <p>
                    <label for="login">Entrer votre Nom d'utilisateur ou votre pseudo</label>
                    <br />
                    <input type="text" name="login" id="login" placeholder="Nom d'utilisateur ou pseudo" onChange={(e) => handleChange(e)} required />
                </p>
                <p>
                    <label for="password">Entrer votre mot de passe</label>
                    <br />
                    <input type="password" name="password" id="password" placeholder="" onChange={(e) => handleChange(e)} required/>
                </p>
                <input type="submit" value="Connectez-vous" />

            </form>
        </div>
    );
}
// export default App;
export default FormLogin;