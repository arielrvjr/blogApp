import React from 'react';
import './App.css';
import BlogHome from './containers/BlogHome';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Navigation from './components/Navigation';
import PostEdit from './components/PostEdit';
import PostCreate from './components/PostCreate';
import PostShow from './components/PostShow';

const App = () => (
  <Router>
      <div>
          <Navigation/>
        <Route exact path='/' component={BlogHome} />
        <Route path='/post/:id/edit' component={PostEdit} />
        <Route path='/post/create' component={PostCreate} />
        <Route path='/post/:id' component={PostShow} />
      </div>
  </Router>)
export default App;