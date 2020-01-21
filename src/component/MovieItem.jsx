import React, { Component } from "react";

export class MovieItem extends Component {
  state = {
    loading: true,
    error: false
  };

  componentDidMount() {
    return fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=b8bbda4fdff3d12c92a0ff51ac4cf6d9&sort_by=popularity.desc"
    )
      .then(res => res.json())
      .then(info =>
        this.setState({
          loading: false,
          movies: info.results.map(movie => ({
            title: movie.title,
            year: movie.release_date,
            overview: movie.overview,
            imgUrl: "https://image.tmdb.org/t/p/w500" + movie.poster_path
          }))
        })
      );
  }

  render() {
    const { loading, error } = this.state;
    if (loading) {
      return <p>Loading...</p>;
    } else if (error) {
      return <p>Error!</p>;
    } else {
      return <p>Loaded!</p>;
    }
  }
}

export default MovieItem;
