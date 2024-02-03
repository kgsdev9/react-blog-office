import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import axios  from "axios";
const CreateUsers = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = { name, email, password};
        axios.post(`http://localhost:8000/api/users/create`, newPost)
            .then(response => {
                alert(`Utilisateur créé avec success: ${response.data.id}`);
                
            })
            navigate("/users/liste")
                
        .catch(error => {
                console.error('Erreur quelque chose a mal fonctionnté:', error);
            });
    };
    return (
        <Fragment>
             <form onSubmit={handleSubmit}> 
                    <h1>Création d'un nouvel utilisateur</h1>
                    <div>
                        <label htmlFor="">Entrer votre nom</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Title" />
                        {name}
                    </div>
                    <div>
                        <label htmlFor="">Entrer votre email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Entrer votre email" />
                        {email}
                    </div>
                    <div>
                        <label htmlFor="">Entrer votre mor de passe</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="*******" />
                        {password}
                    </div>
                    <button >Enregistrer</button>
                    <br /><br />
                    <Link to={"/users/liste"}>Retourner</Link>
                </form>
        </Fragment>
      );
}
 
export default  CreateUsers ;