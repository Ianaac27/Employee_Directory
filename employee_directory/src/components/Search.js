import React from "react";

function Search ( {search, handleInputChange}) {
    return (
        <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
                <input name="search" className="form-control mr-sm-2" type="search" placeholder="Search" 
                aria-label="Search" value={search} onChange={handleInputChange}/>
            </form>
        </nav>
)
}

export default Search;

