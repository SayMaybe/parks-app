import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
            <Route path='/connect' component={Connect}>
          <IndexRoute component={Twitterfeed} />
            <Route path='instagram' component={Instagram} />
            <Route path='query' component={Query}>
          </Route>
          <Route path='/explore(/:name)' component={Connect} />
          <Route path='/map' component={Map}>
            <IndexRoute components={{ title: Title, subTitle: SubTitle}} />
          </Route>
          <Route path='*' component={NotFound} />
      </Route>
    </Route>
  </Router>
    )
  }
}

const Title = () => (
  <h1>Home</h1>
)

const SubTitle = () => (
  <h2>Hello from subTitle</h2>
)

const NamedComponents = (props) => (
  <div>
    {props.title}<br />
    {props.subTitle}
  </div>
)

const Nav = () => (
  <div>
    <IndexLink activeClassName='active' to='/'>Home</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/explore'>Explore</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/connect'>Connect</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/namedComponent'>Map</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='social'>Social</IndexLink>&nbsp;
  </div>
)
const Container = (props) => <div>
  <Nav />
  {props.children}
</div>

const Home = () => <h1>Parks App Home</h1>

const Explore = (props) => <div>
  <br />
<h1>We are located at 4117 Castleman Ave.</h1>
{props.children}
</div>

const Connect = (props) => (
  <div>
    <h3>Welcome to the Connect page</h3>
  </div>

)
const Instagram = () => <h3>Instagram Feed</h3>
const Twitterfeed = () => <h3>Twitter Feed</h3>

const Query = (props) => (
  <h2> {props.location.query.message} </h2>
)

const NotFound = () => <h1> 404...This page is not found.</h1>





export default App
