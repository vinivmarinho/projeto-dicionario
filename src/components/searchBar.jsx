import "../style/SearchBar.css";
import Word from "./word.jsx";
import { useState } from "react";

export default function SearchBar() {
    const [searchedWord, setSearchedWord] = useState(""); 
    const [wordData, setWordData] = useState("");
    const [loading, setLoading] = useState(false);
    function handleSearch() {
        // Palavra não definida
        if (!searchedWord) return;
        setLoading(true);
        fetch(`https://freedictionaryapi.com/api/v1/entries/en/${searchedWord}`)
        .then(response => response.json())
        .then(data => setWordData(data))
        setLoading(false);
    }   

    return(
        <div className="search-bar-container">
            <input type="text" id="searchBar" value={searchedWord} onChange={(event) => setSearchedWord(event.target.value)} placeholder="🔍Pesquise por alguma palavra" />
            <button onClick={handleSearch}>Search</button>
            {!loading && <Word word={wordData ? wordData.word : "Keyboard"} transcription={wordData ? wordData.entries[0].pronunciations[0].text : "/ˈkiː.bɔːd/"} partOfSpeech={wordData ? wordData.entries[0].partOfSpeech : "noun"} /> }
        </div>
    )
}
// Juntar os componentes "SearchBar" e "Word" para que eu possa usar os dados recebidos da API e manipulá-los no componente "Word"