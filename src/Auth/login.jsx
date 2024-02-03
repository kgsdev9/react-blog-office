import { Fragment } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return ( 
        <>
        <h1>Connexion à Digitale entreprise plus </h1>
        <form action="">
            <div className="form-group">
                <label htmlFor="">Entrer votre email</label>
                <input type="email" placeholder="kgsdev8@gmail.com" />
            </div>
            <div className="form-group">
                <label htmlFor="">Entrer votre mot de passe</label>
                <input type="password" placeholder="kgsdev8@gmail.com" />
            </div>
            <button type="submit">Se Connecter</button>
            <br /><br />

            <Link to={'/inscription'}>S'inscrire sur digitale agence plus </Link>
        </form>
       </>
     );
}
 
export default Login;