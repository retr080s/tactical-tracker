import "./App.css";
import Terminal from "./Terminal";
import Team from "./Team";
import Storage from "./Storage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Terminal />} />
        <Route path="storage" element={<Storage />} />
        <Route path="team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
