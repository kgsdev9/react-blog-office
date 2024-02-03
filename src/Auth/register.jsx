import { Fragment } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return ( 
        <>
        <h1>Inscription  à Digitale entreprise plus </h1>
        <form action="">
        <div className="form-group">
                <label htmlFor="">Entrer votre nom d'utilisateur </label>
                <input type="email" placeholder="kgsdev8@gmail.com" />
            </div>
            <div className="form-group">
                <label htmlFor="">Entrer votre email</label>
                <input type="email" placeholder="kgsdev8@gmail.com" />
            </div>
            <div className="form-group">
                <label htmlFor="">Entrer votre mot de passe</label>
                <input type="password" placeholder="kgsdev8@gmail.com" />
            </div>
            <button type="submit">S'inscrire</button>
            <br /><br />
            <Link to={'/connexion'}>Vous avez deja un compte connectez-nous  </Link>
        </form>
       </>
     );
}

export default Register;