// Arquivo que contém o componente principal "App". Aqui é escolhido qual código vai rodar
import { useState } from "react";
import "./style/App.css"; 
import "./style/main.css";
import Header from "./components/header/header.jsx";
import SearchBar from "./components/search-bar/search-bar.jsx";
import Meaning from "./components/meaning.jsx"
import Word from "./components/word/word.jsx";
function App() {
  const [font, setFont] = useState(""); // Estado que armazena a fonte atual e escolhida pelo usuário
  return (
    <div className={`app ${font}`}>
      {/*Div ganha duas classes: a primeira(app) será usada como um container, a segunda(fonte) será usada para controlar o estilo de fonte via CSS"*/}
      <Header />
      <SearchBar />
    </div>
  );
}

export default App;

// API DO DICIONÁRIO => https://freedictionaryapi.com/api/v1/entries/en/word

