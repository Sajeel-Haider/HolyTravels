import { Main } from "./pages/Main/Main";
import { Routes, Route } from "react-router";
import Login from "./pages/Login/Login"
import Signin from "./pages/Signup/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signin />} />
        <Route path="*" element={<>Page not found</>} />
      </Routes>
    </>
  );
}

export default App;
