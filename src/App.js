import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/App/Navbar/index"
import {BrowserRouter,Routes, Route, redirect} from "react-router-dom";
import Login from "./login/index";
import Home from "./Home/Home"
import Register from "./register/index"
import PageNotFound from "./Home/PageNotFound";
function App() {
  const isLogin = true;
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Navbar />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/login/:name" element={ 
          <Login/>} />          
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/register" element={<Register/>} />
         {/* <Route path="/Doctors/:DoctorName" element={<DoctorSingle />} />
        <Route path="/Doctors" element={<Doctors />} /> */}
        {/* <Route path="/BookATest" element={<BookATest />} /> */}
        {/* <Route path="/:Hospital" element={<Hospitals />} /> */}
        {/* <Route path="/Hospitals" element={<Hospitals />} />
        <Route path="/Hospitals/:HospitalName" element={<HospitalSingle />} /> */}
        {/* <Route path="/*" element={<PageNotFound />} /> */}
       
    </Routes>
  </BrowserRouter>
  );
}


export default App;