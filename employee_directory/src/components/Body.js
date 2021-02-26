import React from "react";
import "../styles/Body.css";

function Body({users}) {
    return (
        <div className="d-flex flex-wrap justify-content-between align-item-center">
            {/* <div className="card-body"> */}
                {/* <h3 className="card-title">Employees</h3> */}
                {users.length > 0 ? users.map(user =>  
                <div className="card d-flex flex-row">
                <img src={user.picture.large} alt="profile-image"/>
                    <div className="card-body">
                        <h5 className="card-title">{user.name.first} {user.name.last}</h5>
                    </div>
                </div>
                ): ""}
            {/* </div> */}
        </div>
    )
}

export default Body;