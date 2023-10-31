import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import SearchInput from '../../common-file/search-input/SearchInput';

function Header() {
    const [show, setShow] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const handleShowSearch = () => setShowSearch(true);
    const handleCloseSearch = () => setShowSearch(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" className="header-bg">
                <Container>
                    <div className="col-lg-2">
                        <div className="company-logo">
                            <Link to="/home"><img src="/src/assets/image/company-logo/Final-logo2.png" alt="" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-8 header-menu-wrapper sticky-top">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav " className='justify-content-center'>
                            <Nav className=" nab-bar-link d-flex gap-5 ">
                                {/* <Nav.Link href="/about-us">Features</Nav.Link> */}
                                <Link to='/about-us'><p>About Us</p> </Link>
                                <Link to='/Our-service'><p>Our Service</p> </Link>
                                <Link to='/portfolio'><p> Portfolio</p></Link>
                                <Link to='/blog'><p>Blog</p> </Link>
                                <Link to='/contact-us'><p>Contact Us</p> </Link>
                            </Nav>

                        </Navbar.Collapse>
                    </div>
                    <div className="col-lg-2 d-none d-lg-block ">
                        <div className="nav-right d-flex justify-content-between align-items-center">
                            <div className="search-input-header">
                                <InputGroup id='hederInputSearch' className="">
                                    <Button onClick={handleShowSearch} className='magnifying-glass-btn'>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </Button>

                                    <Modal show={showSearch} onHide={handleCloseSearch} size="lg"
                                        aria-labelledby="example-modal-sizes-title-lg">
                                        <Modal.Body>
                                            <div className="search-header">
                                                <SearchInput></SearchInput>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    {/* <Button variant="outline-secondary" onClick={handleSearch} id="button-addon2">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </Button> */}
                                </InputGroup>
                            </div>
                            <button className='off-canvas-btn' onClick={handleShow}> <div className="burger-btn">
                                <span className='line-1'></span>
                                <span className='line-2'></span>
                            </div> </button>
                            <Offcanvas show={show} onHide={handleClose} placement="end">
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    Some text as placeholder. In real life you can have the elements you
                                    have chosen. Like, text, images, lists, etc.
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                    </div>

                </Container>
            </Navbar>
        </>
    );
}
export default Header;