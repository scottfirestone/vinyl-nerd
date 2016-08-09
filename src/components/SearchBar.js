import React from 'react';

class SearchBar extends React.Component {
  searchForUser(event) {
    event.preventDefault();
    console.log("foobar!")
  }

  render() {
    return (
      <form onSubmit={this.searchForUser}>
        <h2>Enter a discogs username, or use mine!</h2>
        <input type="text" ref="username" defaultValue="mingus_amongus" required />
        <input type="submit" />
      </form>
    )
  }
}

export default SearchBar;
