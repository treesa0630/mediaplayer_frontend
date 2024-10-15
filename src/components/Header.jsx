import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
    <Navbar className="bg-body-transparent">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
            <Navbar.Brand className='text-warning fs-3'>
            <FontAwesomeIcon icon={faVideo} beat style={{color: "#e29236",}} />{' '}
              Media Player
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header