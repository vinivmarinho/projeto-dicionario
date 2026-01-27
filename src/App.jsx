// Arquivo que contém o componente principal "App". Aqui é escolhido qual código vai rodar
import { useState } from "react";
import "./style/App.css"; 
import Header from "./components/header.jsx";
import SearchBar from "./components/searchBar.jsx";
import Word from "./components/word.jsx";
import Meaning from "./components/meaning.jsx"

function App() {
  const [font, setFont] = useState("Arial"); // Estado que armazena a fonte atual e escolhida pelo usuário. ("fonte" => state atual. "setFonte" => Função que atualiza a fonte. "Arial" => Valor usado no primeiro render)
  return (
    <div className={`app ${font}`}>
      {" "}
      {/*Div ganha duas classes: a primeira(app) será usada como um container, a segunda(fonte) será usada para controlar o estilo de fonte via CSS"*/}
      <Header font={font} setFont={setFont} />
      <SearchBar />
      <Word />
      <Meaning />
    </div>
  );
}

export default App;
// Fazer 1 componente "palavra" que retorna a palavra pesquisada, o ícone play, transcrição fonética, depois o componente "significado" que retorna o tipo da palavra e o significado com exemplos
