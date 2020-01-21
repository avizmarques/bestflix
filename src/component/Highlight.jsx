import React, { Component } from "react";

export class Highlight extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    return fetch(
      "https://api.themoviedb.org/3/movie/550?api_key=b8bbda4fdff3d12c92a0ff51ac4cf6d9"
    )
      .then(res => res.json())
      .then(info => console.log(info));
  }

  render() {
    return (
      <div>
        <h1>title</h1>
        <img />
        <p>Description</p>
        <button>favorite</button>
        <button>upvote</button>
        <button>downvote</button>
      </div>
    );
  }
}

export default Highlight;
