import Home from "./pages/Home";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import MyAppointment from "./pages/MyAppointment";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/doctors" element={<Doctors />}>
          <Route path="/doctors:docId" />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/myappointment" element={<MyAppointment />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
