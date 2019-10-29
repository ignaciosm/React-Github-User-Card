import React from 'react';
import './App.css';
import Card from './components/Card';
import Followers from './components/Followers';
import axios from 'axios';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "",
      followers: [],
    };
    console.log('Constructor is running!');

  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/ignaciosm')
      .then(res => {
        // console.log('res', res.data)
        this.setState({
          user: res.data
        });
        console.log('user',this.state.user);
      })
      .catch(err => console.log(err));

      axios
      .get(`https://api.github.com/users/ignaciosm/followers`)
      .then(res => {
        // console.log('followers', res.data)
        this.setState({
          followers: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Card user={this.state.user} />
        <Followers followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
