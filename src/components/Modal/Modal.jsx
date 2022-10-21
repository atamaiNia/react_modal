import { createPortal } from 'react-dom';
import { Component } from 'react';
import { Backdrop, Content } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');

    window.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log(`Натиснули ${e.code}, необхідно закрити модалку`);

      this.props.onClose();
    }
  };

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');

    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      // e.currentTarget - вспливає до того елемента на якому повішаний слухач
      // e.target - показує на якому елементі клікнули
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <Content>{this.props.children}</Content>
      </Backdrop>,
      modalRoot
    );
  }
}
