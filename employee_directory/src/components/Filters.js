function Filters({handleInputChange}) {

    return (
        <div className="card mb-5">
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="nameFilter">Filter By Name</label>
                        <input type="text" className="form-control" name="search" id="nameFilter" onChange={handleInputChange}/>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Filters;