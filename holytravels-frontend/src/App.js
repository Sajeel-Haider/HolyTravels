import { Main } from "./pages/Main/Main";
import { Routes, Route } from "react-router";
import Login from "./pages/Login/Login"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<>Page not found</>} />
      </Routes>
    </>
  );
}

export default App;
