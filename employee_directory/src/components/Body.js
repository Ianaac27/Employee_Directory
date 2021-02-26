function Body({users, search}) {
    return (
        <div className="card" style={{width: "18rem;"}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                {
                    users
                        .filter((user) => {
                            //check if search is in first or last name
                            //match with true or false compared to the search
                            //nuild a concatinate between first and last when checking both names
                            return true;
                        })
                        .map(user =>  <p className="card-text">{user.name.first} {user.name.last}</p>)}
               
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Body;