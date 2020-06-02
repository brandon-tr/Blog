/**
 *
 * Media
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
import makeSelectMedia from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Media() {
  useInjectReducer({ key: 'media', reducer });
  useInjectSaga({ key: 'media', saga });

  return (
    <div>
      <Helmet>
        <title>Media</title>
        <meta name="description" content="Description of Media" />
      </Helmet>
    </div>
  );
}

Media.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  media: makeSelectMedia(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Media);
