import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { LodgesProvider } from "./context/LodgesContext";
import { ReservationsProvider } from "./context/reservationsContext";
import { RecordsProvider } from "./context/RecordsContext";
import useDarkMode from "./hook/useDarkMode";
// Components
import Navbar from "./components/header/Navbar";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/Footer";
// Inicio
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
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
import ReservationsPage from "./pages/lodges/ReservationsPage";
// Admin
import AdminPage from "./pages/admin/AdminPage";
import CreateLodgePage from "./pages/admin/CreateLodgePage";
import YourLodgesPage from "./pages/admin/YourLodgesPage";
import EditLodgePage from "./pages/admin/EditLodgePage";
import AddImageToLodgePage from "./pages/admin/AddImageToLodgePage";
import YourReservationsPage from "./pages/admin/YourReservationsPage";
import ReservationFinishPage from "./pages/admin/ReservationFinishPage";
import YourRecordsPage from "./pages/admin/YourRecordsPage";
import MapLocationPage from "./pages/admin/MapLocationPage";

export default function App() {

  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const email = "lastrancaslodges@gmail.com";
  const year = new Date().getFullYear();
  const derechos = `© ${year} Todos los derechos reservados`;

  return (
    <AuthProvider>
      <LodgesProvider>
        <RecordsProvider>
          <ReservationsProvider>
            <BrowserRouter>
              <div className="min-h-screen grid grid-rows-[auto_1fr_auto] font-serif">
                <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
                <div className="flex flex-col 2xl:flex-row w-full bg-amber-50">
                  <Menu isDarkMode={isDarkMode} />
                  <div className="flex w-full h-full">
                    <Routes>
                      {/* Inicio */}
                      <Route path="/" element={ <AboutPage isDarkMode={isDarkMode} /> } />
                      <Route path="*" element={ <NotFoundPage isDarkMode={isDarkMode} /> } />
                      {/* Auth */}
                      <Route path="/register" element={ <RegisterPage isDarkMode={isDarkMode} /> } />
                      <Route path="/login" element={ <LoginPage isDarkMode={isDarkMode} /> } />
                      {/* User */}
                      <Route path="/profile" element={ <ProfilePage isDarkMode={isDarkMode} /> } />
                      <Route path="/profile/edit" element={ <EditProfilePage isDarkMode={isDarkMode} /> } />
                      <Route path="/profile/image" element={ <ProfileImagePage isDarkMode={isDarkMode} /> } />
                      {/* Lodges */}
                      <Route path="/lodges" element={ <LodgesPage isDarkMode={isDarkMode} /> } />
                      <Route path="/lodges/:id" element={ <LodgeDetailPage isDarkMode={isDarkMode} /> } />
                      <Route path="/lodges/reservation/:lodgeId/:userId" element={ <ReservationsPage isDarkMode={isDarkMode} /> } />
                      {/* Admin */}
                      <Route path="/admin" element={ <AdminPage isDarkMode={isDarkMode} /> } />
                      <Route path="/admin/lodges/create" element={ <CreateLodgePage isDarkMode={isDarkMode} /> } />
                      <Route path="/admin/lodges" element={ <YourLodgesPage isDarkMode={isDarkMode} /> } />
                      <Route path="/admin/lodges/:id" element={ <EditLodgePage isDarkMode={isDarkMode} /> } />
                      <Route path="/admin/lodges/image/:id" element={ <AddImageToLodgePage isDarkMode={isDarkMode} /> } />
                      <Route path="/admin/reservations" element={ <YourReservationsPage isDarkMode={isDarkMode} /> } />
                      <Route path="/admin/reservations/finish/:id" element={ <ReservationFinishPage isDarkMode={isDarkMode} /> } />
                      <Route path="/admin/records" element={ <YourRecordsPage isDarkMode={isDarkMode} /> } />
                      <Route path="/admin/location/:id" element={ <MapLocationPage isDarkMode={isDarkMode} /> } />
                    </Routes>
                  </div>
                </div>
                <Footer derechos={derechos} email={email} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
              </div>
            </BrowserRouter>
          </ReservationsProvider>
        </RecordsProvider>
      </LodgesProvider>
    </AuthProvider>
  )
};