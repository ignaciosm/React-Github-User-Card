import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div id='user' class='card'>
        <h1>{this.props.user.name}</h1>
        <img src={this.props.user.avatar_url}/>
      </div>
    );
  }
}

export default Card;
