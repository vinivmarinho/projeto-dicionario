import play from "../assets/orange-button.png";
import "../style/word.css";
export default function Word({ word , transcription, partOfSpeech, loading  }) {
  return (
    <section id="word-container">
      <div id="word-header">
        <h1 id="searched-word">{word}</h1>
        <p id="phonetic-transcription">{transcription}</p>
        <img src={play} id="play-button" />
      </div>
      <div id="part-of-speech-container">
        <p id="part-of-speech">{partOfSpeech}</p>
        <div id="line"></div>
      </div>
    </section>
  );
}
