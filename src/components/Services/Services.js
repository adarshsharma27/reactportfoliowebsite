import React from 'react'
import data from './data'
const Services = () => {
  return (
    <>
        <div className="container-fluid bg-light">
<section className="container py-4" id="service">
        <h2 className=" text-start py-2">My Services</h2>
  <div className="row">
{
  data.map((element)=>{
    return(
      
      <div className=" col-lg-3 col-md-6 col-sm-12 " key={element.id}>
    <div className="card-service"  data-aos="flip-up"  data-aos-offset="200" data-aos-delay="50">
        <div className="icon"> <img className=" inverted" src={element.image} alt={element.heading}/></div>
      <main>
      <h2>{element.heading}</h2>
      <p>{element.description}</p>
   
      </main>
  
  </div>
</div>
      
    )
  })
}

          </div>
  
</section>
</div>
    </>
  )
}

export default Services