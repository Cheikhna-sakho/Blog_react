import React, { useState,useContext} from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';
import Accueil from './page/Accueil';
import Login from './page/auth/Login';
import Register from './page/auth/Register';
import Billet from './page/billets/Billet';
import BilletCreate from './page/billets/BilletCreate';
import Billets from './page/billets/Billets';

const App = () => {
  // const [token, setToken]  = useState(null);
  // const session =localStorage.getItem('login');
  // // console.log(session, "session");
  // if ( session !== null) {
  //   setToken(session)
  // }
  // const SessionContext = React.createContext(token);
  // const verif = useContext(SessionContext);
  // console.log(verif, "context");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/billets" element={<Billets />} />
        <Route path="/billets/:id" element={<Billet />} />
        <Route path="/billets/create" element={<BilletCreate />} />
        <Route path='*' element={<Accueil />} />
      </Routes>
    <div>
      
    </div>
    </BrowserRouter>
  );
  
};

export default App;
