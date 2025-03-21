// src/Modal.jsx
import React from 'react';

const Modal = ({ info, onClose }) => {
  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeBtn} onClick={onClose}>✕</button>
        <div>{info}</div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '20px',
    maxWidth: '400px',
    width: '90%',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    top: '10px',
    right: '12px',
    border: 'none',
    background: 'transparent',
    fontSize: '18px',
    cursor: 'pointer',
  }
};

export default Modal;
