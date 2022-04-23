import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './_home.scss';
import { hotel_dine, hotel_room } from "../.../../../assets/images/images-path";
import { AiTwotoneStar } from 'react-icons/ai';

import Slider from './components/slider/MainSlider'

export default function index() {
    return (
        <>
            <Slider />


            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className=''>
                            <div className='about__content-star'>
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                            </div>
                            <p className='about__content-description'>THE CAPPA LUXURY HOTEL</p>
                            <p className='about__content-heading'>Enjoy a Luxury Experience</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
