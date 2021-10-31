import { useEffect } from "react";
import {Link, Route, Switch, Redirect} from "react-router-dom"
import HomePage from "./HomePageContent"
import ContentA from "./ContentA";
import ContentB from "./ContentB";
import Messages from "./Messages/Messages";

export default function RoutingApp(){
  return (
    <div className="App">
      <h1> Learning routing </h1>
      {/* Anything outside of browser will be rendered on any page
      - good place for sitewide context */}
      
        {/* The nav for links must be in BrowserRouter to ensure 
        they controlled by it */}
      <nav>
        <ul style={{listStyleType:"none", position: "relative", right:"15px"}}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/A">Content A</Link></li>
          <li><Link to="/B">Content B</Link></li>
          <li><Link to="/Messages">Messages</Link></li>
        </ul>
      </nav>

      <HomePage />
      <Switch>
        <Route path="/A">
          <ContentA/>
        </Route>
        
        <Route path="/B">
          <ContentB/>
        </Route>
        
        {/* when called this way, match and location is accessible by props
        otherwise, only can be gotten using hook */}
        {/* <Route path="/Messages">
          <Messages />
        </Route> */}
        <Route path="/messages" component={Messages}/>

        {/* Default back to homepage */}
        <Redirect to={HomePage}/>
      </Switch>
    </div>
  );
}