import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSortUp } from '@fortawesome/free-solid-svg-icons'
// import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import "../styles/Sort.css";

function Sort({sortUsersASC, sortUsersDESC}) {
    return (
        <div>
            <button type="button" class="btn btn-primary fas fa-sort-up" data-toggle="button" onClick={sortUsersASC}>
                Last Name ASC <FontAwesomeIcon icon={faSort} />
            </button>
            <button type="button" class="btn btn-primary" data-toggle="button" onClick={sortUsersDESC}>
                Last Name DESC <FontAwesomeIcon icon={faSort} />
            </button>
        </div>
    )
}

export default Sort;