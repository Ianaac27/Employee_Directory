import React from "react";
import "../styles/Body.css";

function Body({users}) {
    return (
        <div className="d-flex flex-wrap justify-content-between align-item-center">
                {users.length > 0 ? users.map(user =>  
                <div className="card d-flex flex-row">
                    <img src={user.picture.large} alt="profile-image"/>
                    <div className="card-body">
                        <h3 className="name card-title">{user.name.first} {user.name.last}</h3>
                        <p id="email" className="info">{user.email}</p>
                        <p className="info">Phone: {user.cell}</p>
                        <p className="info">Country: {user.location.country}</p>
                    </div>
                </div>
                ): ""}
        </div>
    )
}

export default Body;