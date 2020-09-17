import React from 'react';
import Post from './components/Posts'
import { BrowserRouter as Router, Route, Link, Switch, Redirect, HashRouter} from 'react-router-dom'
import Detail from './components/Detail'
function App() {
  return (
      <Router>
        <div className="container">
            <Switch>
              <Route  path="/detail/:id">
                <Detail/>
              </Route>
              <Route path='/'>
                <Post/>
              </Route>   
            </Switch>
        </div>
      </Router>
    
  );
}

export default App;
