import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";
import Navbar from "./components/header/Navbar";
import Menu from "./components/menu/menu";
import InicioPage from "./pages/InicioPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import AdminPage from "./pages/AdminPage";
import Footer from "./components/footer/Footer";

export default function App() {

  const email = "lastrancaslodges@gmail.com";
  const year = new Date().getFullYear();
  const derechos = `© ${year} Todos los derechos reservados`;

  return (
    <AuthProvider>
      <UserProvider>
        <BrowserRouter>
          <div className="min-h-screen grid grid-rows-[auto_1fr_auto] font-serif">
            <Navbar />
            <div className="flex flex-col w-full xl:flex-row">
              <Menu />
              <Routes>
                <Route path="/" element={ <InicioPage /> } />
                <Route path="/admin" element={ <AdminPage /> } />
                <Route path="/profile" element={ <ProfilePage /> } />
                <Route path="/register" element={ <RegisterPage /> } />
              </Routes>
            </div>
            <Footer derechos={derechos} email={email} />
          </div>
        </BrowserRouter>
      </UserProvider>
    </AuthProvider>
  )
};