import { Routes, Route, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Login } from "./pages/Login";
import React, { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? <Store /> : <Navigate to="/login" replace />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/login"
            element={<Login onLogin={() => setIsAuthenticated(true)} />}
          />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
