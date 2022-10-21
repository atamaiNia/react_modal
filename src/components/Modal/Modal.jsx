import { createPortal } from 'react-dom';
import { Component } from 'react';
import { Backdrop, Content } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');

    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        console.log(`Натиснули ${e.code}, необхідно закрити модалку`);

        this.props.onClose();
      }
    });
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
  }

  render() {
    return createPortal(
      <Backdrop>
        <Content>{this.props.children}</Content>
      </Backdrop>,
      modalRoot
    );
  }
}
