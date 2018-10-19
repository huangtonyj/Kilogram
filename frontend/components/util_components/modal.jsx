
import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import PostShowModalContainer from '../post/post_show_modal_container';
import PostFormContainer from '../post/post_form_container';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;

  switch (modal.modal) {
    case 'PostShow':
      component = <PostShowModalContainer />;
      break;
    case 'PostForm':
      component = <PostFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);