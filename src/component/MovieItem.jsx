import React, { Component, Fragment } from "react";
import "./css/MovieItem.css";

export class MovieItem extends Component {
  render() {
    return (
      <Fragment>
        <div className="MovieItem">
          <h1 className="title">{this.props.title}</h1>
          <img src={this.props.imgUrl} alt={this.props.title} width="200px" />
          <p>{this.props.year}</p>
          <p>{this.props.overview}</p>
          <button>favorite</button>
          <button>upvote</button>
          <button>downvote</button>
        </div>
      </Fragment>
    );
  }
}

export default MovieItem;
