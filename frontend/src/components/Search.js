import {React, useState} from 'react'
import "./Search.css"

function Search({ onSearch }) {
  const [search, setSearch] = useState('');
  
  onSearch(search);
  return (
    <div>
        <form>
            <input 
            id="nav-search"
            type="text" 
            placeholder="search stocks, news ...etc"
            value={search}
            onChange={(e) => {
              console.log(e.target.value);
              setSearch(e.target.value);
            }}
            />
        </form>
    </div>
  )
}

export default Search