import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Pokkie from "./Pokkie";
import Reeses from "./Reeses";
import CokeZero from "./CokeZero";
import VendingMachine from "./VendingMachine";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/pokkie" element={<Pokkie />} />
          <Route path="/reeses" element={<Reeses />} />
          <Route path="/cokeZero" element={<CokeZero />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
