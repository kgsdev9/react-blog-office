import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const ListeUsers = () => {


    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/users`)
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
    
      const handleDelete = (userId) => {
        axios.delete(`http://localhost:8000/api/user/delete/${userId}`)
            .then(() => {
                setData(data.filter(user => user.id !== userId));
                console.log(`Suppression du post  ${userId} avec success`);
            })
            .catch(error => {
                console.error('Erreur lors de la suppression:', error);
            });
    };
   return (
    <div>
        <Link to={'/users/create'}>Ajouter un nouveau utilisateur</Link>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom d'utilisateur</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, i) => {
              return (
                <tr key={i + 1}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <Link to={`/edit-user/${item.id}`}>
                        Edition
                    </Link>
                    <Link to={`/user/${item.id}`}>
                     Voir
                    </Link>
                    <button onClick={() => handleDelete(item.id)}>Supprimer</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
    </div>
  );
}
 
export default ListeUsers;