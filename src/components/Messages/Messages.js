import React from "react";
import {useRouteMatch, Link, Switch, Route} from "react-router-dom";
import Message from "./Message";

export default function Messages({match}) {
  // const {path} = useRouteMatch();
  const path = match.path;

  return (
    <section
      className="Messages"
    >
      <h2> This is the messages pages {path}</h2>
      <nav>
        <ul>
          {
            [...Array(5).keys()].map(n=>{
              return (
              <li key={n}>
                <Link to= {path + "/" + n}>Message {n}</Link>
              </li>);
            })
          }
        </ul>
      </nav>

      <Switch>
        <Route path={`${path}/:id`} component={Message}/>
      </Switch>
    </section>
  );
}
