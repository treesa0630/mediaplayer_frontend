import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Landing() {
  return (
    <>
    <Container className='d-flex justify-content-center align-items-center py-5 px-4'>
      <Row className='mt-5 d-flex justify-content-center align-items-center'>
        {/* <Col md={1}></Col> */}
        <Col md={6}>
          <h2 className='mt-md-5'><FontAwesomeIcon icon={faVideo} style={{color: "#e29236",}} /> Welcome to <span className='text-warning'>Media Player</span></h2>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi saepe velit cumque provident amet molestiae error, reprehenderit minima aperiam dolorem voluptatem deserunt? Ex, incidunt sunt. Libero tempore vel necessitatibus in.</p>

          <Link to={'/home'}><button className='btn btn-warning'>Get Started</button></Link>
        </Col>
        <Col md={1}></Col>
        <Col md={5} className='d-flex justify-content-center mt-5 mt-md-0'>
        <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="" className='w-75' />
        </Col>
      </Row>
    </Container>

    <Container className='py-5 '>
      <h2 className='text-center'>Features</h2>
        <Col md={1}></Col>
        <Col md={10}>
        <Row className='mt-5 d-flex justify-content-center align-items-center'>
          <Col md={4} className='p-3'>
          <Card style={{ width: '100%' }} className='p-3'>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/6f/5f/f3/6f5ff36fd8ffefa40bf466df6c693ef1.gif" className='w-100' height={'300px'}/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          
        </Card.Body>
      </Card>
      </Col>
          <Col md={4} className='p-3'>
          <Card style={{ width: '100%' }} className='p-3'>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/18/de/42/18de42ff1fc8b8d5e04a37687dae47ca.gif" className='w-100' height={'300px'} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          
        </Card.Body>
      </Card>
          </Col>
          <Col md={4} className='p-3'>
          <Card style={{ width: '100%' }} className='p-3'>
        <Card.Img variant="top" src="https://scitechdaily.com/images/Music-Rhythm-Frequency-Waveform.gif" className='w-100' height={'300px'}/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          
        </Card.Body>
      </Card>
          </Col>
  
        </Row>
        </Col>
        <Col md={1}></Col>
      </Container>

     <Container>
     <div className="container py-5 my-3">
        <div className="row p-md-5 p-3  border border-secondary">
          <div className="col-md-6" >
            <h2 className='text-warning'>Simple fast and Powerful</h2>
            <p><span className='mt-2'>Play Everthing</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem commodi, ipsum quod eum quos odit ipsam pariatur consequatur labore itaque ratione id amet. Incidunt praesentium ab rem. Cupiditate, laborum rem!</p>
            <p><span className='mt-2'>Play Everthing</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem commodi, ipsum quod eum quos odit ipsam pariatur consequatur labore itaque ratione id amet. Incidunt praesentium ab rem. Cupiditate, laborum rem!</p>
            <p><span className='mt-2'>Play Everthing</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem commodi, ipsum quod eum quos odit ipsam pariatur consequatur labore itaque ratione id amet. Incidunt praesentium ab rem. Cupiditate, laborum rem!</p>
          </div>
          <div className="col-md-6">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/38e5IyroBrY?si=8CRvKGGBQYHQRuQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      </Container> 
    </>
  )
}

export default Landing