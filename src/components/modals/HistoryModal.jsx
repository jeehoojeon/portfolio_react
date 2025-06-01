import React from 'react';
import History from '../History';

const HistoryModal = ({ onClose }) => (
  <div id="history" className="wrapper active" onClick={onClose}
    style={{
      position: 'fixed', top: 0, left: 0,
      width: '100%', height: '100%',
      zIndex: 1000, backgroundColor: 'rgba(0, 0, 0, 0.7)', overflow: 'auto'
    }}>
    <button className="popup_close_btn" onClick={onClose}>X</button>
    <History />
  </div>
);

export default HistoryModal;