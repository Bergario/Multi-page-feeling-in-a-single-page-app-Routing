import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
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
                <NavLink activeClassName={classes.Active} exact to="/posts">
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
          <Route path="/new-post" exact component={NewPost} />
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
