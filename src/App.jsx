import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { LodgesProvider } from "./context/LodgesContext";
// Components
import Navbar from "./components/header/Navbar";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/Footer";
// Inicio
import InicioPage from "./pages/InicioPage";
// Auth
import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";
// User
import ProfilePage from "./pages/user/ProfilePage";
import EditProfilePage from "./pages/user/EditProfilePage";
import ProfileImagePage from "./pages/user/ProfileImagePage";
// Lodges
import LodgesPage from "./pages/lodges/LodgesPage";
// Admin
import AdminPage from "./pages/admin/AdminPage";
import CreateLodgePage from "./pages/admin/CreateLodgePage"
import YourLodgesPage from "./pages/admin/YourLodgesPage";

export default function App() {

  const email = "lastrancaslodges@gmail.com";
  const year = new Date().getFullYear();
  const derechos = `© ${year} Todos los derechos reservados`;

  return (
    <AuthProvider>
      <LodgesProvider>
        <BrowserRouter>
          <div className="min-h-screen grid grid-rows-[auto_1fr_auto] font-serif">
            <Navbar />
            <div className="flex flex-col w-full xl:flex-row bg-amber-50">
              <Menu />
              <Routes>
                {/* Inicio */}
                <Route path="/" element={ <InicioPage /> } />
                {/* Auth */}
                <Route path="/register" element={ <RegisterPage /> } />
                <Route path="/login" element={ <LoginPage /> } />
                {/* User */}
                <Route path="/profile" element={ <ProfilePage /> } />
                <Route path="/profile/edit" element={ <EditProfilePage /> } />
                <Route path="/profile/image" element={ <ProfileImagePage /> } />
                {/* Lodges */}
                <Route path="/lodges" element={ <LodgesPage /> } />
                {/* Admin */}
                <Route path="/admin" element={ <AdminPage /> } />
                <Route path="/admin/lodges/create" element={ <CreateLodgePage /> } />
                <Route path="/admin/lodges" element={ <YourLodgesPage /> } />
              </Routes>
            </div>
            <Footer derechos={derechos} email={email} />
          </div>
        </BrowserRouter>
      </LodgesProvider>
    </AuthProvider>
  )
};