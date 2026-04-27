import React from "react";
import { routes, getCurrentRoute, navigateTo } from "./Router";
import "./navigation.css";

/**
 * Navigation component - displays navigation links for all routes
 */
function Navigation() {
  const [activeRoute, setActiveRoute] = React.useState(getCurrentRoute());

  React.useEffect(() => {
    const handleRouteChange = () => {
      setActiveRoute(getCurrentRoute());
    };

    window.addEventListener("hashchange", handleRouteChange);

    return () => {
      window.removeEventListener("hashchange", handleRouteChange);
    };
  }, []);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    navigateTo(path);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">React App</div>
        <ul className="nav-links">
          {Object.values(routes).map((route) => (
            <li key={route.path} className="nav-item">
              <a
                href={route.path}
                className={`nav-link ${activeRoute === route.path ? "active" : ""}`}
                onClick={(e) => handleNavClick(e, route.path)}
              >
                {route.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
