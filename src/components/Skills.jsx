import { useEffect } from 'react';

function Skills() {
  useEffect(() => {
    const circle = document.querySelector('#skills_2 .circle');
    const circleContainer = document.querySelector('#skills_2 .circle_container');

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

  return (
    <>
      {/* 스킬 첫 섹션 */}
      <section id="skills"></section>

      {/* 스킬 두 번째 섹션 */}
      <section id="skills_2">
        <div className="circle_container">
          <div className="circle">
            <span className="arrow">→</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
