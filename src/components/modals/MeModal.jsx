import React from 'react';
import mePictureImage from '../../assets/img/me_picture.png';
import meEsset2Image from '../../assets/img/me_esset2.png';

const MeModal = ({ onClose }) => (
  <div id="aboutme_me" className="active" onClick={onClose}
    style={{
      position: 'fixed', top: 0, left: 0,
      width: '100%', height: '100%',
      zIndex: 1000, backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }}>
    <button className="popup_close_btn" onClick={onClose}>X</button>
    <div id="me">
      <div className="me_esset">
        <img src={mePictureImage} alt="me" />
        <p>ME!</p>
        <img src={meEsset2Image} alt="esset" className="shake" />
      </div>
      <div className="me_txt">
        <p>이름 : 전지후</p>
        <p>나이 : 1999년생 🐰토끼띠</p>
        <p>이메일 : iamjeehoo@gmail.com</p>
        <p>취미 : 독서📚</p>
        <p>장점 : 긍정적인 마인드와 실행력💪</p>
        <p>관심분야 : UI/UX디자인, 서비스 기획</p>
        <p>한줄소개 : 디자인과 사용자경험 사이의 연결고리를 찾는 기획자</p>
      </div>
    </div>
  </div>
);

export default MeModal;
