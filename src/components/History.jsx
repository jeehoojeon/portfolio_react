import React from "react";
import "../assets/css/history.css";
import HistoryImg from '../assets/img/history_1999.jpeg'
import HistoryImg_2 from '../assets/img/kensington.png'
import HistoryImg_3 from '../assets/img/haevichi.jpg'
import HistoryImg_4 from '../assets/img/wolfgang.jpg'
import HistoryImg_5 from '../assets/img/petgrooming.jpg'
import HistoryImg_6 from '../assets/img/samsung.jpg'
import HistoryImg_7 from '../assets/img/ezen.png'

const History = () => {
  const timelineData = [
    {
      id: 1,
      year: "1999",
      title: "Since",
      description: "미술 선생님인 선한 어머님의 영향으로 자연스럽게 예술과 창의적인 감각을 익혔고, 어릴 적부터 다양한 봉사활동을 경험하며 타인의 입장에서 생각하는 법을 배웠습니다.",
      image: HistoryImg
    },
    {
      id: 2,
      year: "2017",
      title: "KENSINGTON JEJU HOTEL",
      description: "19살, 사회생활을 가장 먼저 시작한 공간입니다. 고객응대와 예약, 매출관리를 경험하며 서비스의 본질과 사용자 흐름에 대해 체득했습니다.",
      image: HistoryImg_2
    },
    {
      id: 3,
      year: "2020",
      title: "HAEVICHI COUNTRY CLUB",
      description: "VIP고객을 응대하며 정교한 커뮤니케이션 스킬과 매출관리 경험을 쌓았습니다. 반복되는 데이터 속에서 패턴을 읽고 문제를 개선하는 감각을 키웠습니다.",
      image: HistoryImg_3
    },
    {
      id: 4,
      year: "2020",
      title: "WOLFGANG STEAKHOUSE",
      description: "예약관리부터 고객응대, 매출분석까지 직접 총괄하며 사용자 경험이 브랜드 이미지에 어떻게 연결되는지를 현장에서 배웠습니다. 고객의 여정을 설계하는 초기 UX감각이 자라난 시기였습니다.",
      image: HistoryImg_4
    },
    {
      id: 5,
      year: "2023",
      title: "PET GROOMING",
      description: "새로운 시도를 두려워하지 않고 직접 경험하며 배우는 태도는 제 삶의 방식입니다. 애견미용에 도전했던 시간은 사용자와 대상에 대한 깊은 이해의 중요성을 다시 한 번 느끼게 해주었습니다.",
      image: HistoryImg_5
    },
    {
      id: 6,
      year: "2024",
      title: "SAMSUNG ELECTRONICS SERVICE",
      description: "고객의 불편함을 마주하고 해결하는 일을 하며, 사용자 문제의 본질을 포착하고 대응하는 훈련을 했습니다. UX기획자로서 사용자에 공감하는 태도의 밑거름이 되었습니다.",
      image: HistoryImg_6
    },
    {
      id: 7,
      year: "2024",
      title: "EZEN ACADEMY BOOTCAMP",
      description: "다양한 경험 속에서 사람을 이해하고 소통하는 능력이 결국 디자인과 기획에서 강점이 될 수 있음을 깨달았습니다. 서비스 경험자로서의 시선에서 사용자 중심 디자인을 배우며 진정으로 하고싶은일을 찾게 되었습니다.",
      image: HistoryImg_7
    }
  ];

  return (
    <section id="timeline">
      <div className="timeline-container">
        <h1 className="timeline-title">HISTORY</h1>
{/*         <div className="timeline-subtitle">Growth through Experience</div> */}
        
        <div className="demo-card-wrapper">
          {timelineData.map((item) => (
            <div key={item.id} className={`demo-card demo-card--step${item.id}`}>
              <div className="head">
                <div className="number-box">
                  <span>{item.id.toString().padStart(2, '0')}</span>
                </div>
                <h2>
                  <span className="small">{item.year}</span> 
                  {item.title}
                </h2>
              </div>
              <div className="body">
                <div className="body-content">
                  <p>{item.description}</p>
                  <div className="image-container">
                    <img src={item.image} alt={`${item.title} 이미지`} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;