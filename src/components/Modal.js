import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import ModalContent from './ModalContent';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';
import Icon from '../components/Icon';

class Modal extends Component {

  static propTypes = {
    children: PropTypes.any,
    closeIcon: PropTypes.bool,
    modalSize: PropTypes.string
  }

  static Content = ModalContent
  static Header = ModalHeader
  static Footer = ModalFooter

  render() {
    const { modalSize, closeIcon, children } = this.props;
    let modalClass = classnames({
      ui: true,
      modal: true,
      [modalSize]: modalSize
    });

    let icon;
    if (closeIcon) {
      icon = (
        <Icon icon="close" />
      );
    }

    return (
      <div {...this.props} className={modalClass}>
        {icon}
        {children}
      </div>
    );
  }
}

export default Modal;
