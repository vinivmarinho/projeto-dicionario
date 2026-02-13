// Arquivo que contém o componente principal "App". Aqui é escolhido qual código vai rodar
import { useState } from "react";
import "./style/App.css"; 
import "./style/main.css";
import Header from "./components/header.jsx";
import SearchBar from "./components/searchBar.jsx";
import Word from "./components/word.jsx";
import Meaning from "./components/meaning.jsx"

function App() {
  const [font, setFont] = useState(""); // Estado que armazena a fonte atual e escolhida pelo usuário
  return (
    <div className={`app ${font}`}>
      {/*Div ganha duas classes: a primeira(app) será usada como um container, a segunda(fonte) será usada para controlar o estilo de fonte via CSS"*/}
      <Header font={font} setFont={setFont} />
      <main>
        <SearchBar />
        <Word />
        <Meaning />
      </main>
    </div>
  );
}

export default App;

