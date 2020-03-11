/**
 *
 * Menu
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Menu() {
  const classes = useStyles();
  return (
    <div className="move-down30m">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} align="center">
            <Link href="/" color="inherit">Website Name</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )}

Menu.propTypes = {};

export default Menu;
