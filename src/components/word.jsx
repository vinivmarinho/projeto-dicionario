import play from "../assets/orange-button.png";
import "../style/word.css";
export default function Word() {
  return (
    <section id="word-container">
      <div id="word-header">
        <h1 id="searched-word">Keyboard</h1>
        <p id="phonetic-transcription">/ˈkiːbɔːd/</p>
        <img src={play} id="play-button" />
      </div>
      <div id="part-of-speech-container">
        <p id="part-of-speech">noun</p>
        <div id="line"></div>
      </div>
    </section>
  );
}
