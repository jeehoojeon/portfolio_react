function Contact() {
    return (
      <>
        {/* Contact 섹션 첫번째 */}
        <section id="contact"></section>
  
        {/* Contact 섹션 두번째 */}
        <section id="contact_2"></section>
  
        {/* Contact 섹션 세번째 */}
        <section id="contact_3">
          {/* 물고기 애니메이션 */}
          <div className="fish" id="fish"></div>
          <div className="fish" id="fish2"></div>
          <div className="fish" id="fish3"></div>
  
          {/* 연락처 텍스트 */}
          <div className="contact_txt_wrap">
            <div className="contact_item linkedin">
              <a href="https://www.linkedin.com/in/iamjeehoo" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
                <p>LINKEDIN</p>
              </a>
            </div>
            <div className="contact_item gmail">
              <a href="#">
                <i className="fa-solid fa-envelope"></i>
                <p>GMAIL</p>
              </a>
            </div>
            <div className="contact_item instagram">
              <a href="#">
                <i className="fa-brands fa-square-instagram"></i>
                <p>INSTAGRAM</p>
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default Contact;
  