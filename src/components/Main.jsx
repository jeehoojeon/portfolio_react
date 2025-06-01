import { useState } from 'react';
import FullGnb from './FullGnb';
import videoSrc from '../assets/video/aboutme_videocut.mp4';

function Main() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (e) => {
    e.preventDefault();
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="main">
      <header>
        <nav>
          <a href="#!" className={`menu_btn ${isMenuOpen ? 'menu_close_btn' : ''}`} onClick={handleMenuClick}>
            {isMenuOpen ? 'X' : 'MENU'}
          </a>
        </nav>
      </header>

      {/* 비디오 백그라운드 */}
      <div className="video_wrap">
        <video autoPlay muted loop id="bgvideo">
        <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="video_overlay"></div>
      </div>

      {/* 텍스트 */}
      <div className="main_txt">
        <h3>Portfolio<br />안녕하세요<br />전지후입니다.</h3>
      </div>

      {/* GNB 메뉴 레이어 */}
      <FullGnb isMenuOpen={isMenuOpen} handleMenuClose={handleMenuClose} />
    </div>
  );
}

export default Main;
