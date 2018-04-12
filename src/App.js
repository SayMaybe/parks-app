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
            <Route path='/explore' component={Explore} />
            <Route path='/connect' component={Connect}>
          <IndexRoute component={Twitterfeed} />
              <Route path='instagram' component={Instagram} />
            </Route>
          <Route path='/map' component={Map}>
            <IndexRoute components={{ title: Title, subTitle: SubTitle}} />
          </Route>
          <Route path='*' component={NotFound} />
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

const namedComponent = (props) => (
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
    <IndexLink activeClassName='active' to='/map'>Map</IndexLink>&nbsp;
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
<h1>Explore National Parks</h1>
{props.children}
</div>

const Connect = (props) => (
  <div>
    <h3>Connect with Other Parks People</h3>
  </div>

)
const Instagram = () => <h3>Instagram Feed</h3>
const Twitterfeed = () => <h3>Twitter Feed</h3>

const Map = (props) => (
  <div><h2>Find a Park </h2>
  <h2>Mark Your Park</h2>
</div>
)

const NotFound = () => <h1> 404...This page is not found.</h1>





export default App
