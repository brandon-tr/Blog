/**
 *
 * Register
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';

import Menu from 'components/Menu';
import {
  Container,
  TextField,
  Grid,
  Paper,
  Button,
  Typography,
} from '@material-ui/core';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectRegister from './selectors';
import reducer from './reducer';
import saga from './saga';
import '../HomePage/style.css';
import { register } from './actions';
const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'username',
    'firstName',
    'lastName',
    'email',
    'password',
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};
const warn = (values) => {
  const warnings = {};
  if (values.email && /.+@aol\.com/.test(values.email)) {
    warnings.email = 'You still use AOL?';
  }
  return warnings;
};
const renderField = ({
                       // eslint-disable-next-line react/prop-types
  label,
  input,
  name,
  meta: { touched, invalid, error, warning },
  ...custom
}) => (
  <div>
    <TextField
      label={label}
      placeholder={label}
      name={name}
      variant="outlined"
      fullWidth
      error={touched && invalid}
      helperText={touched && error}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...input}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...custom}
    />
    <div>
      {touched && warning && (
        <span>
          <Typography align="center" color="primary" variant="h5">
            {warning}
          </Typography>
        </span>
      )}{' '}
    </div>
  </div>
);

const submit = (e, reduxDev, props) => {
  props.test(e);
};

export function Register(props) {
  useInjectReducer({ key: 'register', reducer });
  useInjectSaga({ key: 'register', saga });
  // eslint-disable-next-line react/prop-types
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div>
      <Helmet>
        <title>Registration</title>
        <meta name="description" content="Registration Page" />
      </Helmet>
      <Menu />
      <Container maxWidth="sm">
        <Paper elevation={3}>
          <form onSubmit={handleSubmit(submit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  name="username"
                  label="Username"
                  component={renderField}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="firstName"
                  label="First Name"
                  component={renderField}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="lastName"
                  label="Last Name"
                  component={renderField}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  label="password"
                  type="password"
                  name="password"
                  component={renderField}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  component={renderField}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={submitting}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
Register.propTypes = {};

const mapStateToProps = createStructuredSelector({
  register: makeSelectRegister(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      test: register,
    },
    dispatch,
  );
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  memo,
  reduxForm({ form: 'registerValidation', validate, warn, submit }),
)(Register);
