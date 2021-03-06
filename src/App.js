import React from 'react';
import Post from './components/Posts'
import { BrowserRouter as Router, Route, Link, Switch, Redirect, HashRouter} from 'react-router-dom'
import Detail from './components/Detail'
import Form from './components/Form'
import FormEdit from './components/FormEdit'

function App() {
  return (
      <Router>
        <div className="container">
            <Switch>
                <Route  path="/detail/:id" >
                  <Detail/>
                </Route>
                <Route path="/edit/:id">
                  <FormEdit/>
                </Route>
                <Route path="/newPost" >
                  <Form/>
                </Route>
                <Route path="/">
                  <Post/>
                </Route>     
            </Switch>
        </div>
      </Router>
    
  );
}

export default App;
