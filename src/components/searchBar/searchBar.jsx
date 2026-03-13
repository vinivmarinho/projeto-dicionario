import "./searchBar.css";
import Word from "../word/word.jsx";
import Meaning from "../meaning/meaning.jsx";
import { useState } from "react";
import WordNotFound from "../wordNotFound/wordNotFound.jsx";

export default function SearchBar() {
    const [searchedWord, setSearchedWord] = useState(""); 
    const [wordData, setWordData] = useState("");
    const [loading, setLoading] = useState(false);
    const [matchedWord, setMatchedApiWord] = useState("");
    const [wordTranscription, setwordTranscription] = useState("");
    const [partOfSpeech, setPartOfSpeech] = useState("");
    const [error, setError] = useState(false);
    async function handleSearch() {
        // Palavra não definida
        if (!searchedWord) return;
        setLoading(true);
        setError(false);
        console.log("passou 1")
        try {
            const response = await fetch(`https://freedictionaryapi.com/api/v1/entries/en/${searchedWord}`);
            if (!response.ok) {
                throw new Error("Palavra não encontrada");
            }
            const data = await response.json();
            console.log("passou 2")
            setWordData(data); 
            console.log("passou 3")
            setMatchedApiWord(data.word);
            console.log("passou 4")
            setwordTranscription(
                data?.entries[0]?.pronunciations[0]?.text || "No transcription"
            );
            console.log("passou 5")
            setPartOfSpeech(data?.entries[0]?.partOfSpeech);
            console.log("passou 6")
        }
        catch(error) {
            alert(`Não foi possível encontrar a palavra`);
            setError(true);
            console.log("passou 7")
        }
        finally{
            setLoading(false);
            console.log("passou 8")
            
        }
        
    }

    return(
        <>
            <div className="search-bar-container">
                <input type="text" id="searchBar" value={searchedWord} onChange={(event) => setSearchedWord(event.target.value)} placeholder="🔍Pesquise por alguma palavra" />
                <button onClick={handleSearch}>Search</button>
                {loading && <Word word="Loading..." />}
                {!loading && !error &&(
                    <>
                        <Word word={wordData ? matchedWord : "Keyboard"} transcription={wordData ? wordTranscription : "/ˈkiː.bɔːd/"} partOfSpeech={wordData ? partOfSpeech : "noun"} /> 
                        <Meaning wordData={wordData}/>
                    </>
                )}
                {!loading && error && (
                    <WordNotFound />
                )}
            </div>
            
        </>
    )
}
