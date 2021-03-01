import React from "react";

function Search ({search, handleInputChange}) {
    return (
        <nav className="navbar navbar-light d-flex justify-content-center">
            <form className="form-inline">
                <label class="filter-label mr-3" htmlFor="nameFilter">Search for Employees:</label>
                <input name="search" className="form-control mr-sm-2" type="search" placeholder="Search Employees" 
                aria-label="Search" id="nameFilter" value={search} onChange={handleInputChange}/>
            </form>
        </nav>
)
}

export default Search;