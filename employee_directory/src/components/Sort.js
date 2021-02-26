import React from "react";

function Sort({sortUsersABC, sortUsersZYX}) {
    return (
        <div>
            <button type="button" class="btn btn-primary" data-toggle="button" onClick={sortUsersABC}>
                    Sort ABC
            </button>
            <button type="button" class="btn btn-primary" data-toggle="button" onClick={sortUsersZYX}>
                    Sort ZYX
            </button>
        </div>
    )
}

export default Sort;