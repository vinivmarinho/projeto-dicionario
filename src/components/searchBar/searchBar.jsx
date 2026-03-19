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
    const [wordTranscription, setWordTranscription] = useState("");
    const [partOfSpeech, setPartOfSpeech] = useState("");
    const [error, setError] = useState(false);
    /* const [posicao, setPosicao] = useState=("0"); */ // Guarda posição que é usada por entries para renderizar os diferentes significados da palavra
    async function handleSearch() {
        // Palavra não definida
        if (!searchedWord) return;
        setLoading(true);
        setError(false);
        try {
            const response = await fetch(`https://freedictionaryapi.com/api/v1/entries/en/${searchedWord}`);
            
            const data = await response.json();
            setWordData(data);
            setMatchedApiWord(data.word);
            setWordTranscription(
                data?.entries[0]?.pronunciations[0]?.text || "No transcription"
            );
            setPartOfSpeech(data?.entries[0]?.partOfSpeech);
            if (data.entries.length === 0) {
                throw new Error("Palavra não encontrada");
            }
        }
        catch(error) {
            setError(true);
        }
        finally{
            setLoading(false);
            
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
                        {wordData?.entries?.map((entry, index) => (
                            <Meaning key={index} entry={entry} />
                        ))}
                        {/* <Meaning wordData={wordData}/> */}
                    </>
                )}
                {!loading && error && (
                    <WordNotFound />
                )}
            </div>
            
        </>
    )
}
