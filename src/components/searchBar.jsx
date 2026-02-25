import "../style/SearchBar.css";
import Word from "./word.jsx";
import { useState } from "react";

export default function SearchBar() {
    const [searchedWord, setSearchedWord] = useState(""); 
    const [wordData, setWordData] = useState("");
    const [loading, setLoading] = useState(false);
    const [matchedWord, setMatchedApiWord] = useState("");
    const [wordTranscription, setwordTranscription] = useState("");
    const [partOfSpeech, setPartOfSpeech] = useState("");
    function handleSearch() {
        // Palavra não definida
        if (!searchedWord) return;
        setLoading(true);
        try {
            fetch(`https://freedictionaryapi.com/api/v1/entries/en/${searchedWord}`)
            
            .then(response => response.json())
            .then(data => {
                setWordData(data); 
                setMatchedApiWord(data.word);
                setwordTranscription(data.entries[0].pronunciations[0].text)
                setPartOfSpeech(data.entries[0].partOfSpeech );
                })
        }
        catch(error) {
            alert(`Erro ao buscar palavra: ${error}`)
        }
        finally{
            setLoading(false);
        }
        
        // alert(wordData.entries[0].senses[0].definition) // Pega só o objeto da primeira posição de senses (ou seja, só UMA definição. Preciso fazer a posição ficar dinâmica)
        // alert(wordData.entries[0].senses[0].definition)
    }

    return(
        <div className="search-bar-container">
            <input type="text" id="searchBar" value={searchedWord} onChange={(event) => setSearchedWord(event.target.value)} placeholder="🔍Pesquise por alguma palavra" />
            <button onClick={handleSearch}>Search</button>
            {loading && <Word word="Loading..." />}
            {!loading && <Word word={wordData ? matchedWord : "Keyboard"} transcription={wordData ? wordTranscription : "/ˈkiː.bɔːd/"} partOfSpeech={wordData ? partOfSpeech : "noun"} /> }
        </div>
    )
}
// Juntar os componentes "SearchBar" e "Word" para que eu possa usar os dados recebidos da API e manipulá-los no componente "Word"