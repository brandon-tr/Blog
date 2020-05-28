/**
 *
 * Dashboard
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Grid, Paper, Typography } from '@material-ui/core';
import makeSelectDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';

const section = {
  padding: 50,
};

export function Dashboard(props) {
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper elevation={6} style={section}>
            <Typography variant="h5"> Total Post: 0 </Typography>
            <Typography variant="h5"> Total Users: 0 </Typography>
            <Typography variant="h5"> Total Comments: 0 </Typography>
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
};

const mapStateToProps = createStructuredSelector({
  dashboard: makeSelectDashboard(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Dashboard);
