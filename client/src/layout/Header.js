import React from 'react'
import PropTypes from 'prop-types'
import { Container, Navbar } from 'react-bootstrap'

const Header = props => {
    return (
        <Navbar bg='white' variant='white' className='header'>
            <Container>
                <Navbar.Brand href='/'>
                    <img
                        alt=''
                        src='/assets/logo/moon.png'
                        width='30'
                        height='30'
                        className='d-inline-block align-top'
                    />{' '}
                    Simple Survey Application
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

Header.propTypes = {}

export default Header