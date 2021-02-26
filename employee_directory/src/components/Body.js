import React from "react";
import "../styles/Body.css";

function Body({users}) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Employees</h5>
                {users.length > 0 ? users.map(user =>  
                <div className="card">
                {/* <img src={user.picture.large} className="card-img-top" alt="profile-image"/> */}
                    <div className="card-body">
                        <h5 className="card-title">{user.name.first} {user.name.last}</h5>
                    </div>
                </div>
                ): ""}
            </div>
        </div>
    )
}

export default Body;