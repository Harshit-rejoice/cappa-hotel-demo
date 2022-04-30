import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './footer.scss'
import { FiPhoneCall } from 'react-icons/fi';
import { RiTwitterLine, RiFacebookCircleLine, RiPinterestLine } from 'react-icons/ri';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { MdLanguage } from 'react-icons/md';



export default function Footer() {
    return (
        <>
            <div className='footer__wrapper-bg'>
                <Container>
                    <Row className='gy-5'>
                        <Col xs={12} md={4}>
                            <p className='footer__about-heading'>About Hotel</p>
                            <p className='footer__about-desc'>Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat.</p>

                            <div className='d-flex'>

                                <div className='footer__about-language'>
                                    English
                                    <MdLanguage className='language-icon' />
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} className="d-flex justify-content-md-center justify-content-start" >
                            <div >
                                <p className='footer__about-heading'>Explore</p>
                                <ul className='footer__explore-ul'>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">Rooms &#38; Suites</a></li>
                                    <li><a href="/">Restaurant</a></li>
                                    <li><a href="/">HoSpa &#38; Wellnessme</a></li>
                                    <li><a href="/">About Hotel</a></li>
                                    <li><a href="/">Contact</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} md={4} >
                            <div>
                                <p className='footer__about-heading'>Contact</p>
                                <p className='footer__about-desc'>1616 Broadway NY, New York 10001 <br />United States of America</p>
                                <div className='contact__section-reservation mt-4'>
                                    <FiPhoneCall />
                                    <div className='reservation-text '>
                                        <a href='tel:855-100-4444'>855 100 4444</a>
                                    </div>
                                </div>
                                <a href="mailto:info@luxuryhotel.com" className='footer__about-email'>info@luxuryhotel.com</a>

                                <div className='footer__social-icons mt-4'>
                                    <AiOutlineInstagram />
                                    <RiTwitterLine />
                                    <AiOutlineYoutube />
                                    <RiFacebookCircleLine />
                                    <RiPinterestLine />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='footer-copyright'>
                © Copyright 2022 by <a href="/">&nbsp;The Cappa Luxury Hotel</a>
            </div>
        </>
    )
}
