import React, { useState,useEffect } from 'react'
import Odometer from 'react-odometerjs';
import "./Facts.css"

const Facts = () => {
    const [customers,setCustomers]=useState(0);
    const [experience,setExperience]= useState(0);
    const [projects,setProjects]=useState(0);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setCustomers(25);
            setExperience(2);
            setProjects(36);
        }, 3500);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

  return (
    <div className='facts-container'>
        
        <div className="fact">
            {/*fact 1 start*/}
            <div className="flex-center top">
            <Odometer value={customers} className='title'/>
            <h1 className="title">+</h1>
            </div>
            <p className="muted">Happy Customers</p>
            </div>
            {/*fact 1 end */}

         {/*fact 2 start*/}
         <div className="fact">
            <div className="flex-center top">
             <Odometer value={experience} className='title'  />
            <h1 className="title">+</h1>
            </div>
            <p className="muted">Years Experience</p>
            </div>
            {/*fact 2 end*/}

            {/*fact 3 start */}
         <div className="fact">
            <div className="flex-center top">
            <Odometer value={projects} className='title'  />
            <h1 className="title">+</h1>
            </div>
            <p className="muted">Completed Project</p>
            </div>
            {/*fact 3 end */}


    </div>
  )
}

export default Facts
