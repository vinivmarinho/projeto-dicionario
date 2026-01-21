import "./style/SearchBar.css"
export default function SearchBar() {
    return(
        <div className="search_bar">
            <input type="text" name="pesquisa" id="pesquisa_id" placeholder="Pesquise por alguma palavra" />
        </div>
    )
}