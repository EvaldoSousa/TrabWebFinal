import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Principal from "./pages/principal";
import Instituicoes from "./pages/instituicoes";


function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path="/instituicoes" element={<Instituicoes/>}/>
      </Routes>
    </Router>
  )
}

export default App;