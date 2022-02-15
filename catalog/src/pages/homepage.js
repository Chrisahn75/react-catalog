import React from "react";
import data from "../info.json";
import { Link } from "react-router-dom";

class Homepage extends React.Component {

  constructor() {
    super();
    this.homepage = this.homepage.bind(this);
  }

  homepage() {
    return data.map((res, i) => {
      return <Link className="container mt-5 d-flex justify-content-center text-decoration-none" to={`Movie/${i}`}>{res.title}</Link>;
    });
  }
  render() {
    return (
      <>
        <h1 className="text-center mt-5">Homepage</h1>
        {this.homepage()}
      </>
    );
  }
}
export default Homepage;