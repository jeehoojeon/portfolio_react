import React, { useEffect, useRef } from 'react';
import '../assets/css/main_style.css';

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const circle = document.querySelector('#projects_2 .circle');
    const circleContainer = document.querySelector('#projects_2 .circle_container');

    const moveCircle = (e) => {
      const rect = circleContainer.getBoundingClientRect();
      const x = e.clientX - rect.left - circle.offsetWidth / 2;
      const y = e.clientY - rect.top - circle.offsetHeight / 2;
      circle.style.transform = `translate(${x}px, ${y}px)`;
      circle.style.display = 'block';
    };

    const hideCircle = () => {
      circle.style.display = 'none';
    };

    if (circleContainer) {
      circleContainer.addEventListener('mousemove', moveCircle);
      circleContainer.addEventListener('mouseleave', hideCircle);
    }

    return () => {
      if (circleContainer) {
        circleContainer.removeEventListener('mousemove', moveCircle);
        circleContainer.removeEventListener('mouseleave', hideCircle);
      }
    };
  }, []);

  // 클릭 시 새 탭 열기
  const handleClick = () => {
    window.open('/project-detail.html', '_blank');
  };

  return (
    <>
      <section id="projects" ref={containerRef}>
        <div className="Container">
          {/* 프로젝트 내용이 들어갈 섹션 */}
        </div>
      </section>
      <section id="projects_2">
        <div className="circle_container" onClick={handleClick}>
          <div className="circle">
            <span className="arrow">→</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
