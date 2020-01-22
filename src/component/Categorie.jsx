import React, { Component } from "react";
import MovieItem from "./MovieItem";
import "./css/Categorie.css";

export class Categorie extends Component {
  state = {
    loading: true,
    error: false
  };

  componentDidMount = () => {
    return fetch(
      "http://api.themoviedb.org/3/search/movie?api_key=b8bbda4fdff3d12c92a0ff51ac4cf6d9&query=batman"
    )
      .then(res => res.json())
      .then(info =>
        this.setState({
          loading: false,
          movies: info.results.map(movie => ({
            id: movie.id,
            title: movie.title,
            year: movie.release_date.substring(0, 4),
            overview: movie.overview,
            imgUrl: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
            votes: 0
          }))
        })
      );
  };

  showMovieItems = movies => {
    return movies.map(movie => {
      return (
        <MovieItem
          key={movie.id}
          title={movie.title}
          year={movie.year}
          imgUrl={movie.imgUrl}
          overview={movie.overview}
        />
      );
    });
  };

  render() {
    const { loading, error } = this.state;
    if (loading) {
      return <p>Loading...</p>;
    } else if (error) {
      return <p>Error!</p>;
    } else {
      return (
        <div className="Categorie">
          {this.showMovieItems(this.state.movies)}
        </div>
      );
    }
  }
}

export default Categorie;
