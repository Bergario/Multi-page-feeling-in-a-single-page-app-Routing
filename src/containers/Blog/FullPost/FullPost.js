import React, { Component } from "react";
import Axios from "axios";

import classes from "./FullPost.module.css";

class FullPost extends Component {
  state = {
    postData: null,
  };
  componentDidMount() {
    console.log(this.state.postData);
    if (
      !this.state.postData ||
      (this.state.postData &&
        this.state.postData.id !== this.props.match.params.id)
    )
      Axios.get("/posts/" + this.props.match.params.id).then((response) => {
        this.setState({ postData: response.data });
      });
  }

  deletePostHandler = () => {
    Axios.delete("/posts/" + this.props.match.params.id).then((response) =>
      console.log(response)
    );
  };

  render() {
    console.log(this.props.match.params.id);
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.match.params.id) {
      post = <p style={{ textAlign: "center" }}>Loading....!</p>;
    }
    if (this.state.postData) {
      post = (
        <div className={classes.FullPost}>
          <h1>{this.state.postData.title}</h1>
          <p>{this.state.postData.body}</p>
          <div className={classes.Edit}>
            <button onClick={this.deletePostHandler} className="Delete">
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
