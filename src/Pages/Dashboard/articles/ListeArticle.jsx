import { Outlet, Link } from "react-router-dom";

export default function ListeArticle() {
    return (
      <>   
            <aside className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to={`/`} className="navbar-brand">Dashboard</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <Link  className="nav-link">Gestion categories </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" >Gestion articles</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" >Gestion utilisateurs</Link>
                        </li>
                        </ul>
                    </div>
            </aside>
            <main>
                <Outlet></Outlet>
            </main>
      </>
    );
  }