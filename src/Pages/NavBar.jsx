import { Outlet, Link } from "react-router-dom";

export default function NavBar() {
    return (
      <>
        <div id="sidebar">
          <h1>Liste des contacts kgs informatique</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Rechercher par un nom"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">Nouveau Contact</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
              <Link to={`/blog`}>Articles </Link>
              </li>
              <li>
                <a >Information disponible</a>
              </li>

              <li>
              <Link to={`/about`}>A propos </Link>
               
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }