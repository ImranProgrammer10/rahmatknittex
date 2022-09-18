import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import nantu from '../../images/nantu Frame.png';
import montu from '../../images/mantu1.png';
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1dvwess', 'template_aa007w7', form.current, 'kegCkOWndtTSe2tHN')
      .then((result) => {
         alert("Message sent successfully");
      }, (error) => {
          alert(error.text);
      });
      e.target.reset();
  };
    return (
        <section className='contactbig bg-dark' >
            <div className="contact-form">
                <h1>Contact <span>Us</span></h1>
                <small>
                    <ul className="ms-3 fw-light text-white">
                      <li>
                        <i>House #27 (2nd Floor) Road #6,</i>
                      </li>
                      <li>
                        <i>Block # H,Eastern Housing Phase-2</i>
                      </li>
                      <li>
                        <i>Pallabi,Mirour,Dhaka-1216, Bangladesh.</i>
                      </li>
                    </ul>
                    {/* <br /> */}

                    {/* <br /> */}
                  </small>
                <ul className="ms-2 fw-light  text-white">
                    <li className="mb-1">
                      <FaPhoneAlt  ></FaPhoneAlt>{" "}
                      +8801728-533054
                    </li>
                    <li>
                      <MdMail className="me-2 colour"></MdMail>{" "}
                      <a
                        className="text-decoration-none fst-italic text-white  "
                        target="blank"
                        href="mailto:nantu@rahmatknittexltd.com"
                      >
                      nantu@rahmatknittexltd.com
                      </a>
                    </li>
                    <li>
                      <MdMail className="me-2 colour"></MdMail>{" "}
                      <a
                        className="text-decoration-none fst-italic text-white  "
                        target="blank"
                        href="mailto:mahmud@rahmatknittexltd.com"
                      >
                      mahmud@rahmatknittexltd.com
                      </a>
                    </li>
                  </ul>
                <form ref={form} onSubmit={sendEmail} action="">
                    <input type="" placeholder='Your Name' name="client-name" required />
                    <input type="email" email='email' id='' placeholder='E-Mail' required />
                    <input type=" "  placeholder='Write a Subject' required />
                    <textarea name='message' id='' cols='30' rows='10' placeholder="Your Message" required></textarea>

                    <input type="submit" name='' value='submit' class='btn' />
                </form>
                </div>
                <Container className='contact-img'>
      <Row className='contact-img'>
      {/* <h4 className="  text-white mb-3 text-start ms-5">Address</h4> */}
      
        <Col   md={6} sm={12}>
            <h3 style={{"fontSize":"50px","color":"white"}}>CEO</h3>
            <h3 style={{"fontSize":"20px","color":"white"}}>Md.Mahmudul Hasan</h3>
            
            <img style={{"height":"340px","width":"250px"}} src={nantu} alt="" />
        </Col>
        
        <Col  className='nantu-img' md={6} sm={12}>
        <h3 style={{"fontSize":"50px","color":"white"}}>Managing Director</h3>
        <h3 style={{"fontSize":"20px","color":"white"}}>Md.Rabiul Alam (Nantu) </h3>
         
             <img style={{"height":"340px","width":"250px"}} src={montu} alt="" />
          
             
             </Col>
      </Row>
   
    </Container>
            
        </section>
    );
};

export default ContactUs;