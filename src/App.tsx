/* Importar dependências */
import { BrowserRouter, Route, Routes } from "react-router-dom";

/* Importar páginas */
import { Home } from './pages/home';

/* OBS1: Nessa versão 6.0 usar Routes no lugar de Swicth, element no lugar de content, incluir <Nome /> dentro do element = {...}
OBS 2: ao usar :id vc pode usar qualquer coisa escrita após '/menu/....' */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
