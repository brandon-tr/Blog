/**
 *
 * Admin
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  Drawer,
  AppBar,
  makeStyles,
  ListItemIcon,
  ListItemText,
  Divider,
  CssBaseline,
  Toolbar,
  Typography,
  List,
  ListItem,
} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PostAddIcon from '@material-ui/icons/PostAdd';
import BookIcon from '@material-ui/icons/Book';
import MessageIcon from '@material-ui/icons/Message';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import GroupIcon from '@material-ui/icons/Group';
import { Route, Link, Switch } from 'react-router-dom';
import Posts from 'containers/Posts/Loadable';
import Comments from 'containers/Comments/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import AddPost from 'containers/AddPost/Loadable';
import Users from 'containers/Users/Loadable';
import Media from 'containers/Media/Loadable';
import makeSelectAdmin from './selectors';
import reducer from './reducer';
import saga from './saga';
import { changeTitle } from './actions';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.primary.main,
  },
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.grey,
    padding: theme.spacing(3),
    height: 'calc(100vh - 3px)',
  },
}));

export function Admin(props) {
  useInjectReducer({ key: 'admin', reducer });
  useInjectSaga({ key: 'admin', saga });
  const classes = useStyles();
  const { title } = props.admin;
  const { titleChange } = props;
  // eslint-disable-next-line default-case
  useEffect(() => {
    switch (props.location.pathname) {
      case '/admin/dashboard':
        if (props.admin.title !== 'Dashboard') {
          titleChange({ title: 'Dashboard' });
        }
        break;
      case '/admin/comments':
        if (props.admin.title !== 'Comments List') {
          titleChange({ title: 'Comments List' });
        }
        break;
      case '/admin/media':
        if (props.admin.title !== 'Media') {
          titleChange({ title: 'Media' });
        }
        break;
      case '/admin/users':
        if (props.admin.title !== 'Users List') {
          titleChange({ title: 'Users List' });
        }
        break;
      case '/admin/posts':
        if (props.admin.title !== 'Post List') {
          titleChange({ title: 'Post List' });
        }
        break;
      case '/admin/addPost':
        if (props.admin.title !== 'Add Post') {
          titleChange({ title: 'Add Post' });
        }
        break;
      default:
        break;
    }
  }, [props.location.pathname]);

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Admin</title>
        <meta name="description" content="Description of Admin" />
      </Helmet>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List component="nav">
          {props.admin.title === 'Dashboard' ? (
            <Link to="/admin/dashboard">
              <ListItem button selected>
                <ListItemIcon className={classes.icon}>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Link>
          ) : (
            <Link to="/admin/dashboard">
              <ListItem button>
                <ListItemIcon className={classes.icon}>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Link>
          )}
          {props.admin.title === 'Post List' ? (
            <Link to="/admin/posts">
              <ListItem button selected>
                <ListItemIcon className={classes.icon}>
                  <BookIcon />
                </ListItemIcon>
                <ListItemText primary="Posts" />
              </ListItem>
            </Link>
          ) : (
            <Link to="/admin/posts">
              <ListItem button>
                <ListItemIcon className={classes.icon}>
                  <BookIcon />
                </ListItemIcon>
                <ListItemText primary="Posts" />
              </ListItem>
            </Link>
          )}
          {props.admin.title === 'Comments List' ? (
            <Link to="/admin/comments">
              <ListItem button selected>
                <ListItemIcon className={classes.icon}>
                  <MessageIcon />
                </ListItemIcon>
                <ListItemText primary="Comments" />
              </ListItem>
            </Link>
          ) : (
            <Link to="/admin/comments">
              <ListItem button>
                <ListItemIcon className={classes.icon}>
                  <MessageIcon />
                </ListItemIcon>
                <ListItemText primary="Comments" />
              </ListItem>
            </Link>
          )}
          {props.admin.title === 'Media' ? (
            <Link to="/admin/media">
              <ListItem button selected>
                <ListItemIcon className={classes.icon}>
                  <PermMediaIcon />
                </ListItemIcon>
                <ListItemText primary="Media" />
              </ListItem>
            </Link>
          ) : (
            <Link to="/admin/media">
              <ListItem button>
                <ListItemIcon className={classes.icon}>
                  <PermMediaIcon />
                </ListItemIcon>
                <ListItemText primary="Media" />
              </ListItem>
            </Link>
          )}
          {props.admin.title === 'Users List' ? (
            <Link to="/admin/users">
              <ListItem button selected>
                <ListItemIcon className={classes.icon}>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItem>
            </Link>
          ) : (
            <Link to="/admin/users">
              <ListItem button>
                <ListItemIcon className={classes.icon}>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItem>
            </Link>
          )}
          {props.admin.title === 'Add Post' ? (
            <Link to="/admin/addPost">
              <ListItem button selected>
                <ListItemIcon className={classes.icon}>
                  <PostAddIcon />
                </ListItemIcon>
                <ListItemText primary="Add Post" />
              </ListItem>
            </Link>
          ) : (
            <Link to="/admin/addPost">
              <ListItem button>
                <ListItemIcon className={classes.icon}>
                  <PostAddIcon />
                </ListItemIcon>
                <ListItemText primary="Add Post" />
              </ListItem>
            </Link>
          )}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/admin/dashboard" component={Dashboard} />
          <Route exact path="/admin/posts" component={Posts} />
          <Route exact path="/admin/media" component={Media} />
          <Route exact path="/admin/comments" component={Comments} />
          <Route exact path="/admin/users" component={Users} />
          <Route exact path="/admin/addPost" component={AddPost} />
        </Switch>
      </main>
    </div>
  );
}

Admin.propTypes = {
  dispatch: PropTypes.func,
  titleChange: PropTypes.func,
  title: PropTypes.string,
  location: PropTypes.object,
  pathname: PropTypes.object,
  admin: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  admin: makeSelectAdmin(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      titleChange: changeTitle,
    },
    dispatch,
  );
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Admin);
