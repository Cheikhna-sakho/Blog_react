import React, {useContext } from 'react';
const Navbar = () => {
    // const session = useContext(SessionContext);
    return (
        <nav className="flex">
            <div className="logo">Logo <span>BlogWac</span></div>
            <ul className="nav-ul">
                <li><a href="/">Accueil</a></li>
                {/* if (session !== null) { */}
                    {/* <> */}
                        {/* <li><a href={"/profil/"+ session.login}>Profil</a></li>
                        <li><a href="/logout">Deconnexion</a></li> */}
                    {/* </>
                }else{
                    <> */}
                        <li><a href="/register">Inscription</a></li>
                        <li><a href="/login">Connection</a></li>
                    {/* </>
                } */}
                <li><a href="/billets">Voir les billet du blog</a></li>
                <li><a href="/billets/create">Creer un nouveau billet</a></li>

            </ul>
        </nav>
    )
}
export default Navbar;