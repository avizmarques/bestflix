import React, { Component } from "react";
import MovieItem from "./MovieItem";

export class Categorie extends Component {
  state = {
    loading: true,
    error: false
  };

  componentDidMount() {
    return fetch(
      "http://api.themoviedb.org/3/search/movie?api_key=b8bbda4fdff3d12c92a0ff51ac4cf6d9&query=batman"
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
      return <p>loaded</p>
    }
  }
}

export default Categorie;
