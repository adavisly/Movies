import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './custom.css'

const Home = () => <div>this is home</div>
const Borum = () => <div>this is a Borum</div>

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/borum' component={Borum} />
          </Switch>
        </Router>
      </>
    );
  }
}

/*
<Router>
        <div>
          <Routes>
            <Layout>
              <Route exact path='/' element={<Forum />} />
              <Route exact path='/question' element={<Question />}  />
              <Route exact path='/tags' element={<Tags />}  />
              <Route exact path='/ask-question' element={<AskQuestion />}  />
              <Route exact path='/tag' element={<Tag />} />
            </Layout>
          </Routes>
        </div>
      </Router>
*/
