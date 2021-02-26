import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
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
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });

    const filteredUsers = this.state.otherUsers.filter(user => {
      return user.name.first.toLowerCase().includes(value.toLowerCase()) || user.name.last.toLowerCase().includes(value.toLowerCase())      
    })
    this.setState({
      users: filteredUsers
    })
  }
 
  render() {
      return (
        <div className="container">
          <Header search={this.state.search} handleInputChange={this.handleInputChange} />
          {this.state.search}
          <Body users={this.state.users}/>
        </div>
      );
  }

}

export default App;
