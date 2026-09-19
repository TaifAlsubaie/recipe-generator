import { Link, Outlet } from "react-router-dom";
import Chat from "../components/Chat";

function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">

      <header>
        <nav className="navbar navbar-expand border-bottom">
          <div className="container py-2">

            <Link className="navbar-brand fw-bold" to="/">
              🍳 AI Recipe Generator
            </Link>

            <div className="navbar-nav ms-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>

              <Link className="nav-link" to="/saved">
                Saved Recipes ❤️
              </Link>
            </div>

            <Link
              className="btn btn-sm login-nav-btn ms-3"
              to="/login"
            >
              Login
            </Link>

          </div>
        </nav>
      </header>

      <main className="flex-grow-1">
        <Outlet />
      </main>

      {/* AI Cooking Assistant */}
      <Chat />

      <footer className="py-4 mt-5">
        <div className="container text-center">
          <small>
            Made with ❤️ and AI · © 2026
          </small>
        </div>
      </footer>

    </div>
  );
}

export default MainLayout;