import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Bird1cart.css'
import { Link } from 'react-router-dom';
import Footer from './Footer';
function Bird2Cart(){
  const [price,setPrice]=useState(17500);
  const [count,setCount]=useState(1);
  useEffect(()=>{
    setPrice(count*17500);
  },[count])
return(
  <div>
    <div className='bg-light'>
  <div >
  <Link to='/SecondBirdDetails'><i class="arrow bi bi-arrow-left"></i></Link>

  <i class="basket bi bi-cart3" data-bs-toggle="offcanvas" data-bs-target="#demo"></i>
</div>
<div class="offcanvas offcanvas-end" id="demo" >
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
</div>
</div>




    <h1 className='happyBuying text-center p-5 pb-3'>Happy Buying</h1>
    <div  >
   <Row className='shadow-lg p-3 mb-5 bg-white rounded m-5'>
    <Col lg={7} sm={10}>

      <img className="cartimage" src='https://qph.cf2.quoracdn.net/main-qimg-896a30881b647e94e145e418599159f2-lq' alt="jkdsf"></img>
    </Col >
        


    <Col className="cartDetails" lg={5} sm={2}>
    <h3>[1 pair]  SULPHUR - CRESTED COCKATOO </h3>
       <h5 className='p-3'>₹17500.00 Only</h5>
       <h3>Quantity <input type='number' min="1" max='5' onChange={(e)=>{setCount(e.target.value)}} ></input></h3>
       <h4 className='p-3 text-success'>₹{price} Only</h4>
       <div className='d-flex m-5 ms-0'>
       <Link to=''><button className='mr-5 p-2 fs-5 bg-success text-light'>Add to cart</button></Link>
        <Link to='/order'><button className='p-2 fs-5 bg-success text-light'>Buy Now</button></Link>
       </div>
    </Col>
</Row>
</div>
<Footer/>
</div>
)
}
export default Bird2Cart;