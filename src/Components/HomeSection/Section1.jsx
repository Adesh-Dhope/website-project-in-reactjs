import React,{useState} from 'react'
import './Section1.css';
import LoginForm from '../Forms/Loginform';
import SignUpForm from '../Forms/Signupform';

const Section1 = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const accordionData = [
        {
            title: 'Our Vision',
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi possimus error, vel harum perspiciatis unde dicta velit maiores ad voluptas!"
        },
        {
            title: 'Our Mission',
            content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi possimus error, vel harum perspiciatis unde dicta velit maiores ad voluptas!ReactJS allows for fast, efficient, and flexible development of dynamic web applications.'
        },
        {
            title: 'Our Expertise',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi possimus error, vel harum perspiciatis unde dicta velit maiores ad voluptas! ReactJS can be used by creating components and managing state effectively.'
        }
    ];


  return (
    <>
    <div>
        <section className='first-section'>
            <div className="h-div1">
        <p>Welcome To Digital Hospital</p>
        <h1 className='heading-h1'>We Provide best Surgery Services</h1>
        <p className="class-p">
        A digital hospital integrates cutting-edge technology to enhance patient care and operational efficiency. It utilizes electronic health records (EHRs),
         telemedicine, AI diagnostics, and IoT devices for seamless communication and data-driven decisions. These innovations ensure accurate diagnosis, personalized treatment,
         and real-time monitoring, redefining healthcare accessibility, efficiency, and patient satisfaction in the modern era.
         </p>
         <button onClick={() => setShowLogin(true)}>Login</button>
         <button onClick={() => setShowSignUp(true)}>SignUp</button>
         {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
         {showSignUp && <SignUpForm onClose={() => setShowSignUp(false)} />}
         </div>

            <div className="h-div2">  </div>
        </section>


 <section className='second-section'>

<div className="m-div1">
<img src="https://www.cdc.gov/hiv/media/images/cdc-about-hiv-treatment-thumbnail.jpg" className='section1-image' alt="" />

</div>

<div className="m-div2">
<h2 className='heading-h1'>Join the Science Movement</h2>
<p>Customized Care for Every Stage of Your Dental Journey Auctor dui magna diam potenti taciti fringilla.
     Netus felis nunc mus dolor luctus habitant. Himenaeos risus faucibus aliquet fermentum aptent eget a mi taciti est.</p>
<div className="accordion-container">
            {accordionData.map((item, index) => (
                <div className="accordion-item" key={index}>
                    <div
                        className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        {item.title}
                        <span className="accordion-icon">
                            {activeIndex === index ? '-' : '+'}
                        </span>
                    </div>
                    {activeIndex === index && (
                        <div className="accordion-content">{item.content}</div>
                    )}
                </div>
            ))}
        </div>
</div>  
    </section>
   

    </div>
    </>
  )
}

export default Section1