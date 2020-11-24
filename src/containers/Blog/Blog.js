import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import classes from "./Blog.module.css";
import Posts from "../Blog/Posts/Posts";
import NewPost from "./NewPost/NewPost";

class Blog extends Component {
  render() {
    console.log(this.props);

    return (
      <div className={classes.Blog}>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink activeClassName="Blog_active__3Pom0" exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="Blog_active__3Pom0"
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}>
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
