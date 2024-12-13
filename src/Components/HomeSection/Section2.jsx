import React, { useState, useEffect } from "react";
import './Section2.css'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ["https://marketplace.canva.com/EAE8fLYOzrA/1/0/1600w/canva-health-care-bO8TgMWVszg.jpg",
     "https://img.freepik.com/premium-vector/health-care-logo-design-template_145155-2351.jpg", 
     "https://static.vecteezy.com/system/resources/previews/010/071/545/non_2x/healthcare-logo-design-medical-logo-design-template-vector.jpg",
    ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 4000);
    return () => clearInterval(intervalId);
  }, []); 
  
  return (
    <div >
             <section className="first-section2">
           <div className="carousel-div1">
                  <h2 className="section2-head">Our Clients</h2>
                  <h2 className="section2-head">Displaying images after 4 seconds continuosly</h2>
                  <p className="section2-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat eveniet fugit cum facere quisquam aliquam enim totam deserunt ab?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint iste veniam ducimus facere soluta distinctio nobis pariatur optio? Labore, dolore!
                 </p>
             </div>




              <div className="carousel-div2" >
                    {/* <button className="carousel-button prev" onClick={prevImage}>Previous</button> */}

                  <div className="carousel-images">
                   <img src={images[currentIndex]} alt={`Carousel ${currentIndex}`} className="img-class" />
                   </div>

                    {/* <button className="carousel-button next" onClick={nextImage}>Next</button> */}
               </div>
    </section>


    </div>
  );
};

export default Carousel;
