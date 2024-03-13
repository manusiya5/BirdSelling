 import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./AllBirds.css"
import {Routes, Route,Link} from 'react-router-dom';
 import Button from 'react-bootstrap/Button';
 import Card from 'react-bootstrap/Card';
 import { Row,Col } from 'react-bootstrap';
import Footer from './Footer';
const CardList = () => {
  const cardData = [
    {
      id: "FirstBird",
     Name:"Fischer Love Bird",
     videoSrc:"https://cdn.pixabay.com/vimeo/333604625/parrot-23223.mp4?width=640&hash=ee68dd78342ad14601344b9de794ad4c3c793c43",
       path:"/FirstBirdDetails"
    },
    {
      id: "SecondBird",
      Name:"Sulpher - Crested Cockatatoo",
      videoSrc:"https://player.vimeo.com/external/561637688.sd.mp4?s=4dcb3efb9d5e62666af343f1efcedfb5fe849be1&profile_id=164&oauth2_token_id=57447761",
      path:"/SecondBirdDetails"
    },
    {
      id: "ThirdBird",
     Name:"Blue And Gold Macaw",
     videoSrc:"https://player.vimeo.com/external/639340579.sd.mp4?s=5629f05120018a25fdc0d1241ec75e927ffed21c&profile_id=164&oauth2_token_id=57447761",
     path:"/ThirdBirdDetails"
    },
    {
      id: "FourthBird",
      Name:"Zebra Finch Bird",
      videoSrc:"https://player.vimeo.com/external/200784922.sd.mp4?s=4b3a769727d083fbb1825b7601f49847ea95ffab&profile_id=164&oauth2_token_id=57447761",
      path:"/FourthBirdDetails"
    },
    {
      id: "FifthBird",
      Name:"Pigeon",
      videoSrc:"https://player.vimeo.com/progressive_redirect/playback/744773327/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=1c84e067a8164a5854e08a42bb3b0ceb548358d18bf2c3c326cebc47d5c4ae1a",
      path:"/FifthBirdDetails"
    },
  ];
  return (
    <div>
    <div id="bird">
       <Row  >
      {cardData.map((card,i) => (
         <Col lg={4} md={6}   > 
           <Card className='m-4'>
             <video claaName="pt-2"variant="top" src={card.videoSrc} type="video/mp4" autoPlay muted loop />
             <Card.Body>
               <Card.Text>
                 <h5 className='text-center'>{card.Name}</h5>
               </Card.Text>
               <Link to={card.path}><Button  className=" allDetail " variant="primary">Click me!!</Button></Link>
             </Card.Body>
           </Card>
         </Col>
      ))}
       </Row>
      <Link to='/'> <Button className=' homeButton justify-content-end align-items-end' variant="success" size="lg">Go Home</Button></Link>
      </div>
      <Footer/>
    </div>
  );
};
export default CardList;
