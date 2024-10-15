import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
    <div className='container-fluid px-5 mb-5'>
      <div className='row'>
        <div className="col-md-4">
          <h4 className='text-warning'><FontAwesomeIcon icon={faVideo}  style={{color: "#e29236",}} className='me-3' />Media Player</h4>
          <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, exercitationem unde? Voluptatum laborum quo voluptate culpa ratione quod, similique expedita iure numquam dolores ducimus. Cupiditate magni rem veritatis quasi eos?</p>
        </div>
        <div className="col-md-2 d-md-flex justify-content-center align-items-center ">
          <div>
            <h4>Links</h4>
            <Link to={'/'} style={{textDecoration:'none'}}><p>Landing Page</p></Link>
            <Link to={'/home'} style={{textDecoration:'none'}}> <p>Home</p></Link>
            <Link to={'/watchHistory'} style={{textDecoration:'none'}}><p>Watch History</p></Link>
          </div>
          
        </div>
        <div className="col-md-2 d-md-flex justify-content-center align-items-center">
        <div>
            <h4>Guides</h4>
            <p>React</p>
            <p>React Bootstrap</p>
            <p>Bootswatch</p>
          </div>
        </div>
        <div className="col-md-4 px-md-5">
          <h4>Contact Us</h4>
          <div className='d-flex'>
            <input type="text" placeholder='Email ID' className='form-control'/>
            <button className='btn btn-warning ms-3'> Subscribe</button>
          </div>
          <div className='d-flex justify-content-between mt-4 fs-4 '>
          <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} />
          <FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff",}} />
          <FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} />
          <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer