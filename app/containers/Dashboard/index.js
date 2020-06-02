/**
 *
 * Dashboard
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { RESTART_ON_REMOUNT } from 'utils/constants';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Grid, Paper, Typography } from '@material-ui/core';
import { getStatsDashboard } from './actions';
import makeSelectDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';

const section = {
  padding: 50,
};

export function Dashboard(props) {
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });
  useEffect(() => {
    props.onLoad();
    return () => {};
  }, []);
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper elevation={6} style={section}>
            <Typography variant="h5">
              Total Post: {props.dashboard.post}
            </Typography>
            <Typography variant="h5"> Total Users: {props.dashboard.users} </Typography>
            <Typography variant="h5"> Total Comments: {props.dashboard.comments} </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={6} style={section}>
            <Typography variant="h5"> Another Box </Typography>
            <Typography variant="h5"> Another Box </Typography>
            <Typography variant="h5"> Another Box </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Dashboard.propTypes = {
  dispatch: PropTypes.func,
  onLoad: PropTypes.func,
  dashboard: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  dashboard: makeSelectDashboard(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => dispatch(getStatsDashboard()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Dashboard);
