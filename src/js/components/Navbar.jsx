export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid w-75 mx-auto">
        <a className="navbar-brand text-reset" href="#">
          Underrated Visits
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-link active text-reset"
              aria-current="page"
              href="#"
            >
              Featured ⭐️
            </a>
            <a className="nav-link text-reset" href="#">
              Full List 📝
            </a>
            <a className="nav-link text-reset" href="#">
              Map 🌎
            </a>
            <a className="nav-link disabled text-reset" aria-disabled="true">
              Add to our list ➕
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
