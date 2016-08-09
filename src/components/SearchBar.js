import React from 'react';
import Request from 'superagent';

class SearchBar extends React.Component {
  searchForUser(event) {
    event.preventDefault();
    let username = this.refs.username.value;

    Request
      .get('https://api.discogs.com/users/'+ username)
      .end(function(err, res) {
        if (err || !res.ok) {
          alert('There seems to be a problem with that username or the discogs api');
        } else {
          alert('yay got '+ JSON.stringify(res.body));
        }
      });
  }

  render() {
    return (
      <form onSubmit={this.searchForUser.bind(this)}>
        <h2>Enter a discogs username, or use mine!</h2>
        <input type="text" ref="username" defaultValue="mingus_amongus" required />
        <input type="submit" />
      </form>
    )
  }
}

export default SearchBar;
