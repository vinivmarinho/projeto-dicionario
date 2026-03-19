import play from "../../assets/orange-button.png";
import "./word.css";
export default function Word({ word , transcription, partOfSpeech }) {
  return (
    <section id="word-container">
      <div id="word-header">
        <h1 id="searched-word">{word}</h1>
        <p id="phonetic-transcription">{transcription}</p>
        <img src={play} id="play-button" />
      </div>
      
    </section>
  );
}
