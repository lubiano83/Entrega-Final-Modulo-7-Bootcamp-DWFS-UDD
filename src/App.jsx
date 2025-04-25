import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { LodgesProvider } from "./context/LodgesContext";
import InicioPage from "./pages/InicioPage";
import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";
import ProfilePage from "./pages/user/ProfilePage";
import EditProfilePage from "./pages/user/EditProfilePage";
import ProfileImagePage from "./pages/user/ProfileImagePage";
import LodgesPage from "./pages/lodges/LodgesPage";
import AdminPage from "./pages/admin/AdminPage";
import CreateLodgePage from "./pages/admin/CreateLodgePage"
import Navbar from "./components/header/Navbar";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/Footer";

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
                <Route path="/" element={ <InicioPage /> } />
                <Route path="/admin" element={ <AdminPage /> } />
                <Route path="/profile" element={ <ProfilePage /> } />
                <Route path="/profile/edit" element={ <EditProfilePage /> } />
                <Route path="/profile/image" element={ <ProfileImagePage /> } />
                <Route path="/lodges" element={ <LodgesPage /> } />
                <Route path="/lodges/create" element={ <CreateLodgePage /> } />
                <Route path="/register" element={ <RegisterPage /> } />
                <Route path="/login" element={ <LoginPage /> } />
              </Routes>
            </div>
            <Footer derechos={derechos} email={email} />
          </div>
        </BrowserRouter>
      </LodgesProvider>
    </AuthProvider>
  )
};