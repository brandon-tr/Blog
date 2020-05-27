/**
 *
 * Post
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
import { makeStyles } from '@material-ui/core/styles';

import Menu from 'components/Menu';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import CardHeader from '@material-ui/core/CardHeader';
import saga from './saga';
import reducer from './reducer';
import makeSelectPost from './selectors';

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

export function Post() {
  const classes = useStyles();
  useInjectReducer({ key: 'post', reducer });
  useInjectSaga({ key: 'post', saga });

  return (
    <div>
      <Helmet>
        <title>Post</title>
        <meta name="description" content="Description of Post" />
      </Helmet>
      <Menu />
      <div className="center">
        <Card className={classes.root} raised>
          <CardMedia
            className="media"
            image="https://picsum.photos/id/237/200/100"
            title="Contemplative Reptile"
          />
          <CardHeader title="Title" className="text-center" />
          <Divider light />
          <CardContent>
            <Typography variant="body1" color="" paragraph align="center">
              Exercitation magna ut ullamco labore magna ipsum eiusmod esse id
              ullamco consectetur.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

Post.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  post: makeSelectPost(),
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
)(Post);
