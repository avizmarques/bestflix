import React, { Component, Fragment } from "react";

export class MovieItem extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <h1>{this.props.title}</h1>
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
