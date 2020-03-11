/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import PostList from '../PostList/Loadable'
import {Helmet} from 'react-helmet'
import Menu from 'components/Menu';
import './style.css'



export default function HomePage() {
  return (
    <div className="">
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of Homepage" />
      </Helmet>
      <Menu></Menu>
      <PostList />
    </div>
  );
}
