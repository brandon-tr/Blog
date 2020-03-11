/**
 *
 * PostList
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPostList from './selectors';
import reducer from './reducer';
import saga from './saga';
import './PostList.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider'
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export function PostList() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  useInjectReducer({ key: 'postList', reducer });
  useInjectSaga({ key: 'postList', saga });

  return (
      <div className="center">
        <Card className={classes.root} raised={true}>
          <CardMedia
            className="media"
            image="https://picsum.photos/id/237/200/100"
            title="Contemplative Reptile"
          />
          <CardHeader title="Title" className="text-center"/>
          <Divider light />
          <CardContent>
            <Typography variant="body1" color="" paragraph={true} align="center">
              Exercitation magna ut ullamco labore magna ipsum eiusmod esse id ullamco consectetur.
            </Typography>
          </CardContent>
        </Card>
      </div>
  );
}

PostList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  postList: makeSelectPostList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PostList);
