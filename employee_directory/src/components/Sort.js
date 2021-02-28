import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp } from '@fortawesome/free-solid-svg-icons'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import "../styles/Sort.css";

function Sort({sortUsersASC, sortUsersDESC}) {
    return (
        <div className="sort-section">
            <p className="sort-text text-left">Sort by Last Name</p>
            <div className="sort-arrows d-flex justify-content-left">
                <button type="button" id="down-button" className="sort-button btn btn-outline-dark btn-sm" data-toggle="button" onClick={sortUsersASC}>
                    <FontAwesomeIcon icon={faSortDown} />
                </button>
                <button type="button" id="up-button" className="sort-button btn btn-outline-dark btn-sm" data-toggle="button" onClick={sortUsersDESC}>
                    <FontAwesomeIcon icon={faSortUp} />
                </button>
            </div>
        </div>
    )
}

export default Sort;