import "../style/SearchBar.css"
import botao from "../assets/icon-search.svg"
export default function SearchBar() {
    return(
        <div className="search_bar">
            <input type="text" id="pesquisa_id" placeholder="Pesquise por alguma palavra" />
            <label htmlFor="pesquisa_id"><img src={botao}/></label>
        </div>
    )
}