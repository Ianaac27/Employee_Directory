import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Sort from "./components/Sort";
import API from "./utils/API";

class App extends React.Component {

  state = {
    users : [],
    otherUsers: [],
    search: ""
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    
    API.getUsers()
      .then(res => this.setState({ users: res.data.results, otherUsers: res.data.results }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });

    const sortedUsers = this.state.users.sort((userA, userB) => 
    (userA.name.last > userB.name.last) ? 1 : -1 )
    this.setState({
      users: sortedUsers
    })

    //Filter function
    const filteredUsers = this.state.otherUsers.filter(user => {
      return user.name.first.toLowerCase().includes(value.toLowerCase()) || user.name.last.toLowerCase().includes(value.toLowerCase())      
    })
    this.setState({
      users: filteredUsers
    })
  };

  //Sorting functions
  //Sort Ascending
  sortUsersASC = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });

      const sortASC = this.state.users.sort((userA, userB) => 
        (userA.name.last > userB.name.last) ? 1 : -1 )
      this.setState({
        users: sortASC
    });
  }

  //Sort Descending
  sortUsersDESC = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
    
    const sortDESC = this.state.users.sort((userA, userB) => 
        (userA.name.last < userB.name.last) ? 1 : -1 )
      this.setState({
        users: sortDESC
    })
  }

//rendering into HTML format  
  render() {
      return (
        <div className="container">
          <Header search={this.state.search} handleInputChange={this.handleInputChange} />
          <Sort sortUsersASC={this.sortUsersASC} sortUsersDESC={this.sortUsersDESC}/>
          <Body users={this.state.users}/>
        </div>
      );
  }

}

export default App;
