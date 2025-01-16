import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import PaymentPage from "./pages/PaymentPage";
import { LoginForm } from "./pages/LoginForm";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/about" element={<About />} />
		  <Route path="/payment" element={<PaymentPage />} />
		  <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
