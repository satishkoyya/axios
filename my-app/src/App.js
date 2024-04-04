import Logout from "./components/Logout";
import LoginForm from "./components/LoginForm"
import OtpVerification from "./components/OtpVerification"; 
import {Route, Routes, BrowserRouter} from "react-router-dom";

function App() {



  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Logout/>} />
      <Route exact path="/login" element={<LoginForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;