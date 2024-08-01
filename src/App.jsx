// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import Counter from "./Counter";

function App() {
  return (
    <Router>
      <header className="bg-gray-800 p-4">
        <nav className="container mx-auto">
          <ul className="flex items-center gap-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-bold"
                    : "text-gray-400 hover:text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/counter"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-bold"
                    : "text-gray-400 hover:text-white"
                }
              >
                Counter
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
