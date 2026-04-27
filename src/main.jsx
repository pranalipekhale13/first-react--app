
import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./Navigation";
import Router from "./Router";
import "./index.css";

/**
 * Main App Component
 * Combines Navigation and Router for complete app structure
 */
function App() {
  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        <Router />
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;