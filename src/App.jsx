import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import InicioPage from "./pages/InicioPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import Menu from "./components/menu/menu";

export default function App() {

  const email = "lastrancaslodges@gmail.com";
  const year = new Date().getFullYear();
  const derechos = `© ${year} Todos los derechos reservados`;

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto] font-serif">
          <Navbar />
          <div className="flex flex-col w-full xl:flex-row">
            <Menu />
            <Routes>
              <Route path="/" element={ <InicioPage /> } />
              <Route path="/auth/register" element={ <RegisterPage /> } />
            </Routes>
          </div>
          <Footer derechos={derechos} email={email} />
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}
