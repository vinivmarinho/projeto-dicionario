// Arquivo que contém o componente principal "App". Aqui é escolhido qual código vai rodar
import { useState } from "react";
import "./style/App.css"; // Importa o estilo
import Cabecalho from "./Components/header.jsx";
import SearchBar from "./Components/searchBar.jsx";
import Palavra from "./Components/word.jsx";
function App() {
  const [fonte, setFonte] = useState("Arial"); // Estado que armazena a fonte atual e escolhida pelo usuário. ("fonte" => state atual. "setFonte" => Função que atualiza a fonte. "Arial" => Valor usado no primeiro render)
  return (
    <div className={`app ${fonte}`}>
      {" "}
      {/*Div ganha duas classes: a primeira(app) será usada como um container, a segunda(fonte) é para que no css a font-family da página seja igual a fonte escolhida no menu "select"*/}
      <Cabecalho fonte={fonte} setFonte={setFonte} />
      <SearchBar />
      <Palavra />
    </div>
  );
}

export default App;
// Fazer 1 componente "palavra" que retorna a palavra pesquisada, o ícone play, transcrição fonética, depois o componente "significado" que retorna o tipo da palavra e o significado com exemplos
