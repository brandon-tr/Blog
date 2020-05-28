/**
 *
 * Admin
 *
 */

import React, { memo } from 'react';
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
import { Route } from 'react-router-dom';
import Dashboard from 'containers/Dashboard/Loadable';
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
  console.log(props);
  switch (props.location.pathname) {
    case '/admin/dashboard':
      if (props.admin.title !== 'Dashboard') {
        titleChange({ title: 'Dashboard' });
      }
      break;
    default:
      break;
  }
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
            <ListItem button selected>
              <ListItemIcon className={classes.icon}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          ) : (
            <ListItem button>
              <ListItemIcon className={classes.icon}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          )}
          {props.admin.title === 'Posts' ? (
            <ListItem button selected>
              <ListItemIcon className={classes.icon}>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary="Posts" />
            </ListItem>
          ) : (
            <ListItem button>
              <ListItemIcon className={classes.icon}>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary="Posts" />
            </ListItem>
          )}
          {props.admin.title === 'Comments' ? (
            <ListItem button selected>
              <ListItemIcon className={classes.icon}>
                <MessageIcon />
              </ListItemIcon>
              <ListItemText primary="Comments" />
            </ListItem>
          ) : (
            <ListItem button>
              <ListItemIcon className={classes.icon}>
                <MessageIcon />
              </ListItemIcon>
              <ListItemText primary="Comments" />
            </ListItem>
          )}
          {props.admin.title === 'Media' ? (
            <ListItem button selected>
              <ListItemIcon className={classes.icon}>
                <PermMediaIcon />
              </ListItemIcon>
              <ListItemText primary="Media" />
            </ListItem>
          ) : (
            <ListItem button>
              <ListItemIcon className={classes.icon}>
                <PermMediaIcon />
              </ListItemIcon>
              <ListItemText primary="Media" />
            </ListItem>
          )}
          {props.admin.title === 'Users' ? (
            <ListItem button selected>
              <ListItemIcon className={classes.icon}>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
          ) : (
            <ListItem button>
              <ListItemIcon className={classes.icon}>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
          )}
          {props.admin.title === 'Add-Post' ? (
            <ListItem button selected>
              <ListItemIcon className={classes.icon}>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary="Add Post" />
            </ListItem>
          ) : (
            <ListItem button>
              <ListItemIcon className={classes.icon}>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary="Add Post" />
            </ListItem>
          )}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Route exact path="/admin/dashboard" component={Dashboard} />
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
