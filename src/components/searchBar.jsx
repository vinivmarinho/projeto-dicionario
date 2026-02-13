import "../style/SearchBar.css"
export default function SearchBar() {
    return(
        <div className="search-bar-container">
            <input type="text" id="searchBar" placeholder="🔍Pesquise por alguma palavra" />
            <label htmlFor="search"><button>Search</button></label>
        </div>
    )
}