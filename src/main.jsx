import { createRoot } from "react-dom/client";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";

const root = createRoot(document.getElementById("root"));

const Pathname = window.location.pathname;
console.log("Current Pathname: ", Pathname);

if (Pathname === "/") {
  root.render(<Home />);
} else if (Pathname === "/about") {
  root.render(<About />);
} else if (Pathname === "/contact") {
  root.render(<Contact />);
}