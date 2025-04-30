import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { LodgesProvider } from "./context/LodgesContext";
import Navigate from "./components/navigate/Navigate";
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
import LodgeDetailPage from "./pages/lodges/LodgeDetailPage";
import ReservationPage from "./pages/lodges/ReservationPage";
// Admin
import AdminPage from "./pages/admin/AdminPage";
import CreateLodgePage from "./pages/admin/CreateLodgePage"
import YourLodgesPage from "./pages/admin/YourLodgesPage";
import EditLodgePage from "./pages/admin/EditLodgePage";
import AddImageToLodgePage from "./pages/admin/AddImageToLodgePage";
import { ReservationsProvider } from "./context/reservationsContext";

export default function App() {

  const email = "lastrancaslodges@gmail.com";
  const year = new Date().getFullYear();
  const derechos = `© ${year} Todos los derechos reservados`;

  return (
    <AuthProvider>
      <LodgesProvider>
        <ReservationsProvider>
          <BrowserRouter>
            <div className="min-h-screen grid grid-rows-[auto_1fr_auto] font-serif">
              <Navbar />
              <div className="flex flex-col 2xl:flex-row w-full bg-amber-50">
                {/* <Navigate> */}
                  <Menu />
                {/* </Navigate> */}
                <div className="flex w-full h-full">
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
                    <Route path="/lodges/:id" element={ <LodgeDetailPage /> } />
                    <Route path="/lodges/reservation/:lodgeId/:userId" element={ <ReservationPage /> } />
                    {/* Admin */}
                    <Route path="/admin" element={ <AdminPage /> } />
                    <Route path="/admin/lodges/create" element={ <CreateLodgePage /> } />
                    <Route path="/admin/lodges" element={ <YourLodgesPage /> } />
                    <Route path="/admin/lodges/:id" element={ <EditLodgePage /> } />
                    <Route path="/admin/lodges/image/:id" element={ <AddImageToLodgePage /> } />
                  </Routes>
                </div>
              </div>
              <Footer derechos={derechos} email={email} />
            </div>
          </BrowserRouter>
        </ReservationsProvider>
      </LodgesProvider>
    </AuthProvider>
  )
};