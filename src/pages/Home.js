// import React from "react";
//  import "./Home.css";
//  import Nav from 'react-bootstrap/Nav';
// import { Link } from 'react-router-dom';
// const Home=()=>{
//     const home=[
//         {
//             Name:"Flip Flop",
//             heading:"Birds Online Shoping",
//             content:"Birds Selling"
//         }
//     ]
//     return(
//         <div class="home">
//           <div className="homebtn text-end p-3 ">
//            <Link to='/Login' className="adminButton"> Admin  </Link>
//            <Link to='/SignUp' className="userButton p-6"> User</Link><br></br><br></br>
//            </div> 
//            <a><h1 className="text-center pb-5">Shop now</h1></a>
//            <img class="himg d-block w-100"  src="https://images.pexels.com/photos/110812/pexels-photo-110812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={350} height={5000} alt="Yellow Fischer Love Bird" />
       
//   </div>
//     )
// }
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Home.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Footer';


 

function Home() {
  const cardData = [
    {
      id: "FirstBird",
     Name:"Fischer Love Bird",
     videoSrc:"https://media.istockphoto.com/id/997531522/photo/fischers-lovebirds-on-branch.jpg?s=612x612&w=0&k=20&c=KoBHFffK4D5BwQjeRsWD635wbxj7dKXMRlUyFgqVE6Y=",
       path:"/FirstBirdDetails"
    },
    {
      id: "SecondBird",
      Name:"Sulpher - Crested Cockatatoo",
      videoSrc:"https://i.pinimg.com/736x/fa/2f/2f/fa2f2f41705902239dc41aea5ac71042.jpg",
      path:"/SecondBirdDetails"
    },
    {
      id: "ThirdBird",
     Name:"Blue And Gold Macaw",
     videoSrc:"https://c1.wallpaperflare.com/preview/58/653/211/zoo-parrots-exotic-colorful.jpg",
     path:"/ThirdBirdDetails"
    },
    {
      id: "FourthBird",
      Name:"Zebra Finch Bird",
      videoSrc:"https://media.istockphoto.com/id/530563124/photo/zebra-finch.jpg?s=612x612&w=0&k=20&c=HyIIZYQkOj7JU21cL74_tbDZHmXdZsJyztLC6vugbo8=",
      path:"/FourthBirdDetails"
    },
    {
      id: "FifthBird",
      Name:"Pigeon",
      videoSrc:"https://blog.nature.org/wp-content/uploads/2022/08/2997756625_de45c60cd1_o-2.jpg",
      path:"/FifthBirdDetails"
    },
  ];
  return (
     <div class="home" className='' >  
      <Navbar className='homenav shadow-lg p-3 mb-5 bg-white rounded'  bg="light" data-bs-theme="dark">
        <Container className=' text-dark'>
          <Nav><i class="bi bi-shop-window"></i> SHOP</Nav>
          <Nav.Link href="/" ><i class="bi bi-house-fill"></i> Home</Nav.Link>
          <Nav.Link href="/Contact"><i class="bi bi-telephone-fill"></i> Contact Us</Nav.Link>
          <Nav className="homeNav ">
            <Nav.Link href="/Login" className=" text-dark"><i class="bi bi-person-circle"></i>  Admin</Nav.Link>
            <Nav.Link href="/SignUp" className=" text-dark">User</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
           <div className="homecarosal" id="carousel" class="carousel slide " data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" intervel={5000}>
      <img class="homeimg1 d-block w-100" src="https://images.pexels.com/photos/10933926/pexels-photo-10933926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Yellow Fischer Love Bird" />
    </div>
    <div class="carousel-item" intervel={5000}>
      <img class="homeimg1 d-block w-100" src="https://images.pexels.com/photos/268496/pexels-photo-268496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Yellow Fischer Love Bird" />
    </div>
    <div class="carousel-item" intervel={5000}>
      <img class="homeimg1 d-block w-100" src="https://images.pexels.com/photos/775316/pexels-photo-775316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Yellow Fischer Love Bird" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    <div id="homebird">
    <h1 className='text-center text-secondary pb-5 fst-roman'>MOST DEMANDING BIRDS</h1>
       <Row  className='m-0'>
      {cardData.map((card,i) => (
         <Col lg={4} md={6}   > 
           <Card className='m-3'>
             <img className="homeimg2 pt-2 "variant="top" src={card.videoSrc} type="video/mp4" />
             <Card.Body>
               <Card.Text>
                 <h5 className='text-center'>{card.Name}</h5>
               </Card.Text>
             </Card.Body>
           </Card>
         </Col>
      ))}
       </Row>
      <Link to='/SignUp'> <Button className='homeButton ' variant="success" > More Details</Button></Link>
    </div>
 

   <Footer/>


   </div>
  );
}
 export default Home;