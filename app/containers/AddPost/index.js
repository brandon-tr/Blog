/**
 *
 * AddPost
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
import makeSelectAddPost from './selectors';
import reducer from './reducer';
import saga from './saga';

export function AddPost() {
  useInjectReducer({ key: 'addPost', reducer });
  useInjectSaga({ key: 'addPost', saga });

  return (
    <div>
      <Helmet>
        <title>AddPost</title>
        <meta name="description" content="Description of AddPost" />
      </Helmet>
    </div>
  );
}

AddPost.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addPost: makeSelectAddPost(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(AddPost);
