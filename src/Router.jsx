import React from "react";
import Home from "./home";
import About from "./about";
import Contact from "./contact";

/**
 * Route configuration object
 * Maps route paths to their corresponding components
 */
export const routes = {
  home: { path: "#", component: Home, label: "Home" },
  about: { path: "#about", component: About, label: "About" },
  contact: { path: "#contact", component: Contact, label: "Contact" },
};

/**
 * Get current route from window.location.hash
 * @returns {string} Current route hash or "#" if not found
 */
export const getCurrentRoute = () => {
  const hash = window.location.hash || "#";
  return hash;
};

/**
 * Get route object by path
 * @param {string} path - The route path (e.g., "#about")
 * @returns {object} Route object with component and metadata
 */
export const getRouteByPath = (path) => {
  const routePath = path || "#";
  return Object.values(routes).find((route) => route.path === routePath) || routes.home;
};

/**
 * Navigate to a specific route
 * @param {string} path - The route path to navigate to
 */
export const navigateTo = (path) => {
  window.location.hash = path;
};

/**
 * Router component - handles route rendering based on current hash
 */
export function Router() {
  const [currentRoute, setCurrentRoute] = React.useState(getCurrentRoute());

  React.useEffect(() => {
    const handleRouteChange = () => {
      setCurrentRoute(getCurrentRoute());
    };

    window.addEventListener("hashchange", handleRouteChange);

    return () => {
      window.removeEventListener("hashchange", handleRouteChange);
    };
  }, []);

  const route = getRouteByPath(currentRoute);
  const Component = route.component;

  return <Component />;
}

export default Router;
