import play from "../assets/icon-play.svg";
import "../style/word.css";
export default function Palavra() {
  return (
    <section id="container_palavra">
      <div id="cabecalho_palavra">
        <h1 id="palavra_pesquisada">Keyboard</h1>
        <p id="transcricao_fonetica">/ˈkiːbɔːd/</p>
        <img src={play} id="play" />
      </div>
      <div id="container_classe_gramatical">
        <p id="classe_gramatical">noun</p>
        <div id="linha"></div>
      </div>
    </section>
  );
}
