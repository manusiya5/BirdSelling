
import React from "react";

function Footer(){
return(
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
<div >
<i  class="bi bi-facebook text-light p-2"></i>
<i  class="bi bi-whatsapp text-light p-2"></i>
<i class="bi bi-instagram text-light p-2"></i>
</div>
<div className='copyright text-light'>
<h5 >Copyright &copy; 2024 Website.com. All Rights Reserved.</h5>
</div>

</div>
)
}
export default Footer;