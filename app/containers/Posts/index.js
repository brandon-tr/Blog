/**
 *
 * Posts
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPosts from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Posts() {
  useInjectReducer({ key: 'posts', reducer });
  useInjectSaga({ key: 'posts', saga });

  return (
    <div>
      <Helmet>
        <title>Posts</title>
        <meta name="description" content="Description of Posts" />
      </Helmet>
      Hello
    </div>
  );
}

Posts.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Posts);
