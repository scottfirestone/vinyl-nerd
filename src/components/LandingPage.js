import React from 'react';
import SearchBar from './SearchBar';

class LandingPage extends React.Component {
  selectUser(user) {
    this.props.selectUser(user);
  }

  render() {
    return(
      <div>
        <h1>Vinyl Nerd</h1>
        <SearchBar selectUser={this.selectUser.bind(this)}/>
      </div>
    )
  }
}


export default LandingPage;
