import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { Home } from './modules/home.jsx'
import { Awards } from './modules/awards.jsx'
import { Layout } from './modules/layout.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

const history = createBrowserHistory()

const App = () => (
  <Router history={ history }>
    <Layout>
      <Route exact path='/' component={ Home }/>
      <Route path='/home' component={ Home } />
      <Route path='/awards' component={ Awards } />
    </Layout>
  </Router>
)

render(<App/>, document.getElementById('app'));
