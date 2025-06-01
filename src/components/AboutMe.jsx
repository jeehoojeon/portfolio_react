import React, { useEffect, useRef, useState } from 'react';
import '../assets/css/main_style.css';

import MeModal from './modals/MeModal';
import SchoolModal from './modals/SchoolModal';
import HistoryModal from './modals/HistoryModal';

import meImage from '../assets/img/me.png';
import schoolImage from '../assets/img/school.png';
import historyImage from '../assets/img/history.png';
import hobbyImage from '../assets/img/hobby.png';
import familyImage from '../assets/img/family.png';
import animalImage from '../assets/img/animal.png';
import animalModalImage from '../assets/img/animal_alt2.png';
import hobbyAlt2Image from '../assets/img/hobby_alt2.png';
import familyAlt2Image from '../assets/img/family_alt2.png';
import animalAlt2Image from '../assets/img/animal_alt2.png';
import meAltImage from '../assets/img/me_picture.png';
import schoolAltImage from '../assets/img/school_img.png';
import historyAltImage from '../assets/img/history.png';
import hobbyAltImage from '../assets/img/hobby.png';
import familyAltImage from '../assets/img/family.png';

const AboutMe = () => {
  const containerRef = useRef(null);
  const [pictures, setPictures] = useState([
    { id: 'meCard', src: meImage, title: 'ME!', x: 0, y: 0, rotation: 0, zIndex: 0, imageIndex: 0 },
    { id: 'schoolCard', src: schoolImage, title: 'SCHOOL', x: 0, y: 0, rotation: 0, zIndex: 0, imageIndex: 0 },
    { id: 'historyCard', src: historyImage, title: 'HISTORY', x: 0, y: 0, rotation: 0, zIndex: 0, imageIndex: 0 },
    { id: 'habbyCard', src: hobbyImage, title: 'HOBBY', x: 0, y: 0, rotation: 0, zIndex: 0, imageIndex: 0 },
    { id: 'familyCard', src: familyImage, title: 'FAMILY', x: 0, y: 0, rotation: 0, zIndex: 0, imageIndex: 0 },
    { id: 'animalCard', src: animalImage, title: 'MY FRIEND', x: 0, y: 0, rotation: 0, zIndex: 0, imageIndex: 0 }
  ]);

  const [activeModal, setActiveModal] = useState(null);

  const imageVariants = {
    meCard: [{ src: meImage }, { src: meAltImage }],
    schoolCard: [{ src: schoolImage }, { src: schoolAltImage }],
    historyCard: [{ src: historyImage }, { src: historyAltImage }],
    habbyCard: [{ src: hobbyImage }, { src: hobbyAltImage }, { src: hobbyAlt2Image }],
    familyCard: [{ src: familyImage }, { src: familyAltImage }, { src: familyAlt2Image }],
    animalCard: [{ src: animalImage }, { src: animalModalImage }, { src: animalAlt2Image }]
  };

  const isDragging = useRef(false);
  const currentElement = useRef(null);
  const startPos = useRef({ x: 0, y: 0 });
  const originalPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const section = containerRef.current;
    if (!section) return;

    const sectionWidth = section.offsetWidth;
    const sectionHeight = section.offsetHeight;
    const pictureWidth = 300;
    const pictureHeight = 370;

    const placed = [];

    const newPictures = pictures.map(pic => {
      let x, y, overlaps, tries = 0;
      do {
        overlaps = false;
        x = Math.floor(Math.random() * (sectionWidth - pictureWidth));
        y = Math.floor(Math.random() * (sectionHeight - pictureHeight));
        for (const placedPic of placed) {
          const aLeft = x, aRight = x + pictureWidth, aTop = y, aBottom = y + pictureHeight;
          const bLeft = placedPic.x, bRight = bLeft + pictureWidth, bTop = placedPic.y, bBottom = bTop + pictureHeight;
          if (aLeft < bRight && aRight > bLeft && aTop < bBottom && aBottom > bTop) {
            overlaps = true;
            break;
          }
        }
        tries++;
      } while (overlaps && tries < 500);
      placed.push({ x, y });
      return { ...pic, x, y, rotation: Math.random() * 20 - 10 };
    });

    setPictures(newPictures);
  }, []);

  const handleMouseDown = (e, picture) => {
    e.preventDefault();
    isDragging.current = true;
    currentElement.current = picture;
    startPos.current = { x: e.clientX, y: e.clientY };
    originalPos.current = { x: picture.x, y: picture.y };
    const maxZIndex = Math.max(...pictures.map(p => p.zIndex));
    setPictures(pictures.map(p => p.id === picture.id ? { ...p, zIndex: maxZIndex + 1 } : p));
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !currentElement.current) return;
    const dx = e.clientX - startPos.current.x;
    const dy = e.clientY - startPos.current.y;
    setPictures(pictures.map(p => p.id === currentElement.current.id ? { ...p, x: originalPos.current.x + dx, y: originalPos.current.y + dy } : p));
  };

  const handleMouseUp = (e, picture) => {
    if (isDragging.current) {
      isDragging.current = false;
      currentElement.current = null;
    } else if (['meCard', 'schoolCard', 'historyCard'].includes(picture.id)) {
      setActiveModal(picture.id);
      document.body.classList.add('noscroll');
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', () => { isDragging.current = false; currentElement.current = null; });
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', () => { isDragging.current = false; currentElement.current = null; });
    };
  }, [pictures]);

  const handleCardImageClick = (e, picture) => {
    e.stopPropagation();
    if (isDragging.current) return;
    if (['habbyCard', 'familyCard', 'animalCard'].includes(picture.id)) {
      const variants = imageVariants[picture.id];
      const nextIndex = (picture.imageIndex + 1) % variants.length;
      setPictures(pictures.map(p => p.id === picture.id ? { ...p, src: variants[nextIndex].src, imageIndex: nextIndex } : p));
    } else {
      setActiveModal(picture.id);
      document.body.classList.add('noscroll');
    }
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    document.body.classList.remove('noscroll');
    const menuBtn = document.querySelector('.menu_btn');
    if (menuBtn) menuBtn.style.display = 'block';
  };

  useEffect(() => {
    const menuBtn = document.querySelector('.menu_btn');
    if (menuBtn) menuBtn.style.display = activeModal ? 'none' : 'block';
  }, [activeModal]);

  return (
    <>
      <section id="aboutme"></section>
      <section id="aboutme_2"></section>
      <section id="aboutme_card" ref={containerRef}>
        <div className="Container">
          {pictures.map((picture) => (
            <div
              key={picture.id}
              className="Picture"
              id={picture.id}
              style={{
                left: `${picture.x}px`,
                top: `${picture.y}px`,
                transform: `rotate(${picture.rotation}deg)`,
                position: 'absolute',
                zIndex: picture.zIndex,
                cursor: 'pointer'
              }}
              onMouseDown={(e) => handleMouseDown(e, picture)}
              onMouseUp={(e) => handleMouseUp(e, picture)}
            >
              <img
                className="Picture-img"
                src={picture.src}
                alt={picture.title}
                onClick={(e) => handleCardImageClick(e, picture)}
              />
              <div className="Picture-note">
                <span onClick={(e) => handleCardImageClick(e, picture)}>{picture.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {activeModal === 'meCard' && <MeModal onClose={handleCloseModal} />}
      {activeModal === 'schoolCard' && <SchoolModal onClose={handleCloseModal} />}
      {activeModal === 'historyCard' && <HistoryModal onClose={handleCloseModal} />}
    </>
  );
};

export default AboutMe;
