import React, { useState } from 'react';
import  './SignUp.css';
// import AllDetails from './AllBirdDetails';
import { Link } from 'react-router-dom';
const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleNameChange = (e) => {
    setName(e.target.value);
   };
   const handleEmailChange = (e) => {
    setEmail(e.target.value);
   };


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();

   
  };


  return (
    <div>
    <div className="signUpform ">
      <form onSubmit={handleFormSubmit} className="signUp ">
        <h3 className='text-center pt-2 pb-2'>SignUp</h3>
        <h5 > Name: <input className='ip'   type="email" value={name} onChange={handleNameChange}required  /></h5> <br></br>
        <h5 > Email: <input className='ip' type="email" value={email} onChange={handleEmailChange}  required  /></h5> <br></br>
          <h5 >password: <input className='ip'  type="password" value={password} onChange={handlePasswordChange}  required /></h5><br></br>
          <h5 >Confirm password: <input className='ip' type="password" value={confirmPassword} onChange={handleConfirmPasswordChange}  required /></h5><br></br>
      <Link to="/AllBirdDetails" > <button  className='signupButton fs-4 bg-info border rounded-pill' type="submit">SignUp</button></Link><br></br>
      <h3 className='p-3'>Do you have  account? <Link to="/Login" >Login</Link></h3>
      </form>
    </div>
  

    
     </div>
  );
};
export default SignUp;
 