import React, { Component } from "react";
import Axios from "../../../Axios";
import Post from "../../../components/Post/Post";
import classes from "./Posts.module.css";
import { Route, Link } from "react-router-dom";
import FullPost from "../FullPost/FullPost";

export default class Posts extends Component {
  state = {
    posts: [],
    postID: null,
    error: false,
  };
  componentDidMount() {
    console.log(this.props);

    Axios.get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const postUpdate = posts.map((post) => {
          return { ...post, author: "Bey" };
        });
        this.setState({ posts: postUpdate });
      })
      .catch((error) => {
        console.log(error);

        // this.setState({ error: true })
      });
  }

  postSelectedHandler(postID) {
    this.setState({ postID });
  }
  render() {
    let author = "";

    let posts = this.state.posts.map((post) => {
      author = post.author;
      return (
        <Link to={"/posts/" + post.id} key={post.id}>
          <Post
            title={post.title}
            author={author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        </Link>
      );
    });

    if (this.state.error === true) {
      posts = (
        <p style={{ textAlign: "center", color: "red" }}>
          Something went wrong..!
        </p>
      );
    }
    return (
      <div>
        <section className={classes.Posts}>{posts}</section>
        <Route
          path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}
