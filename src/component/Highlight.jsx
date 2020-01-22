import React, { Component } from "react";

export class Highlight extends Component {
  state = {
    loading: true,
    error: false
  };

  componentDidMount() {
    return fetch(
      "https://api.themoviedb.org/3/movie/550?api_key=b8bbda4fdff3d12c92a0ff51ac4cf6d9"
    )
      .then(res => res.json())
      .then(info =>
        this.setState({
          loading: false,
          movie: {
            title: info.title,
            year: info.release_date.substring(0, 4),
            imgUrl: "https://image.tmdb.org/t/p/w500" + info.poster_path,
            overview: info.overview
          }
        })
      )
      .catch(error => this.setState({ error: true }));
  }

  render() {
    const { loading, error } = this.state;
    if (loading) {
      return <h1>Loading</h1>;
    } else if (error) {
      return <h1>Error!</h1>;
    } else {
      const { title, year, imgUrl, overview } = this.state.movie;
      return (
        <div>
          <h1>{title}</h1>
          <img src={imgUrl} alt={title} width="200px" />
          <p>{year}</p>
          <p>{overview}</p>
          <button>favorite</button>
          <button>upvote</button>
          <button>downvote</button>
        </div>
      );
    }
  }
}

export default Highlight;
