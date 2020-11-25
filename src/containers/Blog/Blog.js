import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import classes from "./Blog.module.css";
import Posts from "../Blog/Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

class Blog extends Component {
  render() {
    console.log(this.props);

    return (
      <div className={classes.Blog}>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink activeClassName={classes.Active} exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={classes.Active}
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/post/:id" exact component={FullPost} />
          <Route path="/new-post" component={NewPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
