import play from "../assets/icon-play.svg"
import "../style/word.css"
export default function Palavra() {
    return(
        <div className="palavra">
            <h1 id="palavra_pesquisada">Keyboard</h1>
            <p id="transcricao_fonetica">/ˈkiːbɔːd/</p>
            <img src={play}/>
        </div>
    )
}