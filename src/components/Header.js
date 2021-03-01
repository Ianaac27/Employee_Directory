import React from "react";
import Search from "./Search";
import "../styles/Header.css";

function Header({search, handleInputChange}) {
    return (
        <div className="jumbotron">
            <h1 id="ifc" className="display-4 text-center">IFC Productions</h1>
            <h2 id="title" className="display-5 text-center">Employee Directory</h2>
            <hr className="my-4"/>
            <Search search={search} handleInputChange={handleInputChange} />

        </div>
    )
}

export default Header;