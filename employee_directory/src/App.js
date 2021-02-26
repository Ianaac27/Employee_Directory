import React from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Body from "./components/Body";
import API from "./utils/API";

class App extends React.Component {

  state = {
    users : [],
    search: ""
  }

//look up how to dynamically pass data from API to screen. Anthony says to review previous assignments from Saturday

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    
    API.getUsers()
      .then(res => this.setState({ users: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };
 
  render() {
      return (
        <div className="Container">
          <Header />
          <Filters handleInputChange={this.handleInputChange}/>
          {this.state.search}
          <Body users={this.state.users} search={this.state.search}/>
        </div>
      );
  }

}

export default App;
