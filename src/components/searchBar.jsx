import "../style/SearchBar.css"
import button from "../assets/icon-search.svg"
export default function SearchBar() {
    return(
        <div className="search-bar">
            <input type="text" id="search" placeholder="Pesquise por alguma palavra" />
            <label htmlFor="search"><img src={button}/></label>
        </div>
    )
}