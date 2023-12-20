import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Principal from "./pages/principal";
import PrincipalNaoLog from "./pages/principalNaoLog";
import Instituicoes from "./pages/instituicoes";
import AcolherTransformar from "./pages/acolherTransformar";
import AliancaMudanca from "./pages/aliancaMudanca";
import AmorAcao from "./pages/amorAcao";
import CompromissoSocial from "./pages/compromissoSocial";
import LarPeludo from "./pages/larPeludo";
import MundoAnimal from "./pages/mundoAnimal";
import PatasAmigas from "./pages/patasAmigas";
import PonteEsperanca from "./pages/ponteEsperanca";
import RedeHumanitaria from "./pages/redeHumanitaria";
import SemeandoBondade from "./pages/semeandoBondade";
import TelaCadastro from "./pages/cadastro";
import TelaLogin from "./pages/login";
import TelaPerfil from "./pages/perfil";



function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path="/naoLog" element={<PrincipalNaoLog/>}/>
        <Route path="/instituicoes" element={<Instituicoes/>}/>
        <Route path="/acolherTransformar" element={<AcolherTransformar/>}/>
        <Route path="/aliancaMudanca" element={<AliancaMudanca/>}/>
        <Route path="/amorAcao" element={<AmorAcao/>}/>
        <Route path="/compromissoSocial" element={<CompromissoSocial/>}/>
        <Route path="/larPeludo" element={<LarPeludo/>}/>
        <Route path="/mundoAnimal" element={<MundoAnimal/>}/>
        <Route path="/patasAmigas" element={<PatasAmigas/>}/>
        <Route path="/ponteEsperanca" element={<PonteEsperanca/>}/>
        <Route path="/redeHumanitaria" element={<RedeHumanitaria/>}/>
        <Route path="/semeandoBondade" element={<SemeandoBondade/>}/>
        <Route path="/telaCadastro" element={<TelaCadastro/>}/>
        <Route path="/telaLogin" element={<TelaLogin/>}/>
        <Route path="/telaPerfil" element={<TelaPerfil/>}/>
      </Routes>
    </Router>
  )
}

export default App;