/**
 *
 * Users
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
import makeSelectUsers from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Users() {
  useInjectReducer({ key: 'users', reducer });
  useInjectSaga({ key: 'users', saga });

  return (
    <div>
      <Helmet>
        <title>Users</title>
        <meta name="description" content="Description of Users" />
      </Helmet>
    </div>
  );
}

Users.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Users);
