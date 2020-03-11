/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import PostList from 'containers/PostList/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Post from 'containers/Post/Loadable'

import GlobalStyle from '../../global-styles';
import './style.css'

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/post/:id" component={Post} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
