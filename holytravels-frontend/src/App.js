import { Main } from "./pages/Main/Main";
import { Routes, Route } from "react-router";
import Login from "./pages/Login/Login";
import Signin from "./pages/Signup/Signup";
import { ReligiousGuide } from "./pages/ReligiousGuide/ReligiousGuide";
import { Nav } from "./components/Main/Nav";
import { Faq } from "./pages/Faq/Faq";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signin />} />
        <Route path="/religiousguide" element={<ReligiousGuide />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<>Page not found</>} />
      </Routes>
    </>
  );
}

export default App;
