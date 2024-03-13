import React from "react";
import './Success.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Home.css'
import "bootstrap/dist/css/bootstrap.min.css";
import './Contact.css'
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className='contactPage'>
       <Navbar className='homenav' bg="dark" data-bs-theme="dark">
        <Container className=' text-light p-3'>
          <Nav.Link href="/" >Report</Nav.Link>
          <Nav.Link href="/Contact"> Contact Us</Nav.Link>
            <Nav.Link href="/" className=" text-light">Rating</Nav.Link>
            <Nav.Link href="/" className=" text-light">Home</Nav.Link>
        </Container>
      </Navbar>
      <h3 className="text-center text-secondary pt-5 pb-0 mt-5">Contact Us</h3>
       <div className="contactForm shadow-lg p-3 pt-5  bg-body rounded">
       Name: <br></br><input type="text" className='userName p-2 mb-4'  placeholder='Enter your Name'/><br></br>
       Email:<br></br> <input type="mail" className='userMail p-2 mb-4' placeholder='Enter your Mail'/><br></br>
       Message: <br></br><textarea  className='message p-2 mb-4' placeholder='Enter your Message'/><br></br>
       <Link to="/" className=" text-light"><button  className='messageSubmit p-2 mb-4'>Submit</button></Link> 
       </div>
       <div className='footerbody bg-dark text-center '>
       
       <div className='footerlink'>
       <a href="/" className='text-light pr-5'>Privacy</a>
       <a href="/Contact" className='text-light'>Terms and  Conditions</a>
       </div>
       <div className='footercontent text-light'>
       <h5 >888 Griffiths Way, Mainland ML 12345</h5>
       <h5 >(987) 654-3210</h5>
       <h5 >info@yoursite.com</h5>
       </div>
       <div>
       <i class="bi bi-facebook"></i>
       <i class="bi bi-whatsapp"></i>
       <i class="bi bi-instagram"></i>
       </div>
       <div className='copyright text-light'>
       <h5 >Copyright 2024 Website.com. All Rights Reserved.</h5>
       </div>
   </div>
    </div>
  )
  
}

export default Contact;