import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

import { ajaxSessionPost } from '../../actions/session_actions';
import SessionForm from './session_form.jsx';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session
});

const mapDispatchToProps = dispatch => ({
  signIn: (user) => dispatch(ajaxSessionPost(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);


