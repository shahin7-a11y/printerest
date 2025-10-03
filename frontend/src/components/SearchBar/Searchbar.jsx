import { Inputbox } from "../Inputbox/Inputbox";
import "../SearchBar/searchbar.css"

function Searchbar({setsearch}) {
    return (
        <div className="searchbar-container">
              <input type="text" placeholder="Search" onChange={(e)=>setsearch(e.target.value)}/> 
              <i class="bi bi-search"></i>
        </div>
        
    )
}
export { Searchbar }