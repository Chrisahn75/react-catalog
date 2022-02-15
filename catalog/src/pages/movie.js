import React from "react";
import data from "../info.json";
import { Link } from "react-router-dom";

class Movie extends React.Component {
  render() {
    return (
      <>
        <Link className="text-decoration-none" to="/">Homepage</Link>
        <h2 className="container mt-5 d-flex justify-content-center text-decoration-underline">{data[this.props.match.params.id].title}</h2>
        <p className="container mt-5 d-flex justify-content-center ">Réalisateur : {data[this.props.match.params.id].director}</p>
        <p className="container d-flex justify-content-center mt-3"> Acteurs : </p>
        <ul className="container d-flex justify-content-center list-style-none;">{data[this.props.match.params.id].stars}</ul>
        <img
          className="container d-flex justify-content-center w-25"
          src={data[this.props.match.params.id].image}
          alt="affiche du film"
        />
        <p className="container d-flex justify-content-center">Description : {data[this.props.match.params.id].description}</p>
      </>
    );
  }
}

export default Movie;