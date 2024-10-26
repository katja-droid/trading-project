import React from 'react';
import './Registration.css';
import QuickRegistration from './QuickRegistration';
import RegistrationBenefits from './RegistrationBenefits';

const Registration = () => {
  return (
    <div style={{marginBottom: '150px'}}> 
    
     <h1 className='main-heading' style={{marginBottom: '50px'}}>запись на курс:<span className='main-heading-span'>  всё очень просто</span></h1>
   
    <div className="registration-container">

      <div className="registration-block block-one">
       <QuickRegistration/>
      </div>
      <div className="registration-block block-two">
       <RegistrationBenefits/>
      </div>
    </div>
    </div>
  );
};

export default Registration;
