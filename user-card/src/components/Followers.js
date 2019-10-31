import React from 'react';

class Followers extends React.Component {
  render() {
    console.log("Followers:", this.props)
    return (
      <div>
      <hr></hr>
      <h1>Followers:</h1>
        <div class='cards'>

          {this.props.followers.map(follower => (
            <div class='card'>
              <img src={follower.avatar_url}/>
              <p>{follower.login}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Followers;
