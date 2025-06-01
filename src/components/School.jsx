import { useState } from 'react';

function School() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
    document.body.classList.add('noscroll');
  };

  const closePopup = () => {
    setIsOpen(false);
    document.body.classList.remove('noscroll');
  };

  return (
    <>
      {/* 학교 팝업 */}
      <div id="school" className={isOpen ? 'active' : ''}>
        <button className="popup_close_btn" onClick={closePopup}>X</button>
        <div className="school_txt">
          <h2>나의 학창시절</h2>
          <h4>떠든사람<br />최율희</h4>
        </div>
        <div className="school_esset">
          <img src="/assets/img/school_esset.png" alt="학교 아이콘그림" />
          <img src="/assets/img/paper.png" alt="종이" />
          <img src="/assets/img/paper2.png" alt="종이" />
          <img src="/assets/img/paper3.png" alt="종이" />
          <img src="/assets/img/school_img.png" alt="학교 그림" />
        </div>
        <div className="schoo_img">
          <img src="/assets/img/crape_1.png" alt="크레이프1" />
          <img src="/assets/img/crape_2.png" alt="크레이프2" />
          <img src="/assets/img/crape_3.png" alt="크레이프3" />
          <img src="/assets/img/crape_4.png" alt="크레이프4" />
          <img src="/assets/img/crape_5.png" alt="크레이프5" />
        </div>
      </div>

    </>
  );
}

export default School;
