import React from 'react';
import schoolEssetImage from '../../assets/img/school_esset.png';
import paperImage from '../../assets/img/paper.png';
import paper2Image from '../../assets/img/paper2.png';
import paper3Image from '../../assets/img/paper3.png';
import schoolImgImage from '../../assets/img/school_img.png';
import crape1Image from '../../assets/img/crape_1.png';
import crape2Image from '../../assets/img/crape_2.png';
import crape3Image from '../../assets/img/crape_3.png';
import crape4Image from '../../assets/img/crape_4.png';
import crape5Image from '../../assets/img/crape_5.png';

const SchoolModal = ({ onClose }) => (
  <div id="school" className="active" onClick={onClose}
    style={{
      position: 'fixed', top: 0, left: 0,
      width: '100%', height: '100%',
      zIndex: 1000, backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }}>
    <button className="popup_close_btn" onClick={onClose}>X</button>
    <div className="school_txt">
      <h2>나의 학창시절</h2>
      <h4>떠든사람<br />최율희</h4>
    </div>
    <div className="school_esset">
      <img src={schoolEssetImage} alt="학교 아이콘그림" />
      <img src={paperImage} alt="종이" />
      <img src={paper2Image} alt="종이" />
      <img src={paper3Image} alt="종이" />
      <img src={schoolImgImage} alt="학교 사진" />
    </div>
    <div className="schoo_img">
      <img src={crape1Image} alt="크랩1" />
      <img src={crape2Image} alt="크랩2" />
      <img src={crape3Image} alt="크랩3" />
      <img src={crape4Image} alt="크랩4" />
      <img src={crape5Image} alt="크랩5" />
    </div>
  </div>
);

export default SchoolModal;