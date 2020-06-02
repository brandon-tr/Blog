/**
 *
 * Comments
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
import makeSelectComments from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Comments() {
  useInjectReducer({ key: 'comments', reducer });
  useInjectSaga({ key: 'comments', saga });

  return (
    <div>
      <Helmet>
        <title>Comments</title>
        <meta name="description" content="Description of Comments" />
      </Helmet>
    </div>
  );
}

Comments.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  comments: makeSelectComments(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Comments);
