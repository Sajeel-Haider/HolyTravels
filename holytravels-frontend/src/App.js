import { Main } from "./pages/Main/Main";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<>Page not found</>} />
      </Routes>
    </>
  );
}

export default App;
