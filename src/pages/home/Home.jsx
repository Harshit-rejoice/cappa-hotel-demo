import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './_home.scss';
import {
    hotel_dine,
    hotel_room_2,
    hotel_room_1,
    hotel_room_3,
    hotel_room_4,
    slider2,
    serviceSlide1,
    serviceSlide2,
    serviceSlide3,
    serviceSlide4,
    testi_img_1,
    testi_img_2,
    testi_img_3
} from "../.../../../assets/images/images-path";

import { AiTwotoneStar, AiOutlineArrowRight, AiOutlineCar } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { FaRegNewspaper, FaSwimmingPool } from 'react-icons/fa';
import { MdBed, MdOutlineBreakfastDining, MdOutlineFreeBreakfast } from 'react-icons/md';
import { BiBath } from 'react-icons/bi';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { BsPlay, BsChatQuote } from 'react-icons/bs'
import { IoEarthOutline, IoWifiOutline } from 'react-icons/io5'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";


import Slider from './components/slider/MainSlider'

export default function index() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 2,
        slidesToShow: 2,
        arrows: false,
        autoplaySpeed: 3000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]
    };
    const teti_settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        autoplaySpeed: 3000,
        // autoplay: true,

    };

    return (
        <>
            <Slider />


            <Container className='about__content-section'>
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
                            <div>
                                <span className='about__content-description'>THE CAPPA LUXURY HOTEL</span>
                                <p className='about__content-heading'>Enjoy a Luxury<br /> Experience</p>
                            </div>

                            <p className='about__content-long-description'>
                                Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.
                            </p>
                            <p className='about__content-long-description mt-4'>
                                Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine.
                            </p>

                            <div className='about__content-reservation'>
                                <FiPhoneCall />

                                <div className='reservation-text'>
                                    <span>Reservation</span>
                                    <a href='tel:855-100-4444'>855 100 4444</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row>
                            <Col xs={6}>
                                <div className='position-relative'>
                                    <img src={hotel_dine} alt="hotel-done" className='img-fluid img-top-fix' />
                                </div>
                            </Col>
                            <Col xs={6}>
                                <div className='position-relative'>
                                    <img src={hotel_room_2} alt="hotel-done" className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <div className='rooms__section'>

                <Container>

                    <div>
                        <span className='about__content-description'>THE CAPPA LUXURY HOTEL</span>
                        <p className='about__content-heading'>Rooms &#38; Suites</p>
                    </div>


                    <Row >
                        <Col xs={12} md={4} >
                            <div className='room__card'>
                                <img src={hotel_room_1} alt="hotel-room-1" className='img-fluid' />
                                <span className='room_card-book-btn'>BOOK</span>


                                <div className='room_card-bg'>
                                    <div className='room__card-wrapper'>
                                        <div className='room__card-description'>
                                            <span className='card__description-price'>150$ / NIGHT</span>
                                            <div className='card__description-heading'>Junior Suite</div>
                                        </div>

                                        <div className='card__description-details '>
                                            <div className='description__details-icon'>
                                                <MdBed />
                                                <BiBath />
                                                <MdOutlineBreakfastDining />
                                                <FaRegNewspaper />

                                            </div>
                                            <div className='description__details-btn'>
                                                <span className='me-2'>details</span>
                                                <AiOutlineArrowRight />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} >
                            <div className='room__card'>
                                <img src={hotel_room_2} alt="hotel-room-1" className='img-fluid' />
                                <span className='room_card-book-btn'>BOOK</span>


                                <div className='room_card-bg'>
                                    <div className='room__card-wrapper'>
                                        <div className='room__card-description'>
                                            <span className='card__description-price'>200$ / NIGHT</span>
                                            <div className='card__description-heading'>Family Room</div>
                                        </div>

                                        <div className='card__description-details '>
                                            <div className='description__details-icon'>
                                                <MdBed />
                                                <BiBath />
                                                <MdOutlineBreakfastDining />
                                                <FaRegNewspaper />

                                            </div>
                                            <div className='description__details-btn'>
                                                <span className='me-2'>details</span>
                                                <AiOutlineArrowRight />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} >
                            <div className='room__card'>
                                <img src={hotel_room_3} alt="hotel-room-1" className='img-fluid' />
                                <span className='room_card-book-btn'>BOOK</span>


                                <div className='room_card-bg'>
                                    <div className='room__card-wrapper'>
                                        <div className='room__card-description'>
                                            <span className='card__description-price'>250$ / NIGHT</span>
                                            <div className='card__description-heading'>Double Room</div>
                                        </div>

                                        <div className='card__description-details '>
                                            <div className='description__details-icon'>
                                                <MdBed />
                                                <BiBath />
                                                <MdOutlineBreakfastDining />
                                                <FaRegNewspaper />

                                            </div>
                                            <div className='description__details-btn'>
                                                <span className='me-2'>details</span>
                                                <AiOutlineArrowRight />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} >
                            <div className='room__card'>
                                <img src={slider2} alt="hotel-room-1" className='img-fluid' />
                                <span className='room_card-book-btn'>BOOK</span>


                                <div className='room_card-bg'>
                                    <div className='room__card-wrapper'>
                                        <div className='room__card-description'>
                                            <span className='card__description-price'>250$ / NIGHT</span>
                                            <div className='card__description-heading'>Double Room</div>
                                        </div>

                                        <div className='card__description-details '>
                                            <div className='description__details-icon'>
                                                <MdBed />
                                                <BiBath />
                                                <MdOutlineBreakfastDining />
                                                <FaRegNewspaper />

                                            </div>
                                            <div className='description__details-btn'>
                                                <span className='me-2'>details</span>
                                                <AiOutlineArrowRight />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} >
                            <div className='room__card'>
                                <img src={hotel_room_4} alt="hotel-room-1" className='img-fluid' />
                                <span className='room_card-book-btn'>BOOK</span>


                                <div className='room_card-bg'>
                                    <div className='room__card-wrapper'>
                                        <div className='room__card-description'>
                                            <span className='card__description-price'>250$ / NIGHT</span>
                                            <div className='card__description-heading'>Double Room</div>
                                        </div>

                                        <div className='card__description-details '>
                                            <div className='description__details-icon'>
                                                <MdBed />
                                                <BiBath />
                                                <MdOutlineBreakfastDining />
                                                <FaRegNewspaper />
                                            </div>
                                            <div className='description__details-btn'>
                                                <span className='me-2'>details</span>
                                                <AiOutlineArrowRight />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='services__section'>
                <Container>

                    <Row className='gy-5'>
                        <Col xs={12} md={4}>
                            <div>
                                <span className='about__content-description services-description'>services-description</span>
                                <p className='about__content-heading services-heading'>Extra Services</p>
                            </div>

                            <p className='about__content-long-description services-long-description'>
                                The best prices for your relaxing vacation. The utanislen quam nestibulum ac quame odion elementum sceisue the aucan.
                            </p>
                            <p className='about__content-long-description mt-4 services-long-description'>
                                Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus mus nellen etesque habitant morbine.
                            </p>

                            <div className='about__content-reservation'>
                                <FiPhoneCall />

                                <div className='reservation-text'>
                                    <span className='services-long-description'>For information</span>
                                    <a href='tel:855-100-4444'>855 100 4444</a>
                                </div>
                            </div>

                        </Col>

                        <Col xs={12} md={8}>
                            <div className='service__slider'>
                                <SlickSlider {...settings}>
                                    <div className='service__slider__card-wrapper'>
                                        <img src={serviceSlide1} alt="" className='slider__card-img' />
                                        <div className='slider__card-details'>
                                            <div className='card__details-heading'>Room cleaning</div>
                                            <div className='card__details-price'><span>$50</span>/ month</div>
                                            <ul className='card__details-facility'>
                                                <li><AiOutlineCheck />Hotel ut nisan the duru</li>
                                                <li> <AiOutlineCheck />Orci miss natoque vasa ince</li>
                                                <li> <AiOutlineClose />Clean sorem ipsum morbin</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='service__slider__card-wrapper'>
                                        <img src={serviceSlide2} alt="" className='slider__card-img' />
                                        <div className='slider__card-details'>
                                            <div className='card__details-heading'>Drinks included</div>
                                            <div className='card__details-price'><span>$30</span>/ month</div>
                                            <ul className='card__details-facility'>
                                                <li><AiOutlineCheck />Hotel ut nisan the duru</li>
                                                <li> <AiOutlineCheck />Orci miss natoque vasa ince</li>
                                                <li> <AiOutlineClose />Clean sorem ipsum morbin</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='service__slider__card-wrapper'>
                                        <img src={serviceSlide3} alt="" className='slider__card-img' />
                                        <div className='slider__card-details'>
                                            <div className='card__details-heading'>Room Breakfast</div>
                                            <div className='card__details-price'><span>$15</span>/ month</div>
                                            <ul className='card__details-facility'>
                                                <li><AiOutlineCheck />Hotel ut nisan the duru</li>
                                                <li> <AiOutlineCheck />Orci miss natoque vasa ince</li>
                                                <li> <AiOutlineClose />Clean sorem ipsum morbin</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='service__slider__card-wrapper'>
                                        <img src={serviceSlide4} alt="" className='slider__card-img' />
                                        <div className='slider__card-details'>
                                            <div className='card__details-heading'>Safe &#38; Secure</div>
                                            <div className='card__details-price'><span>$10</span>/ month</div>
                                            <ul className='card__details-facility'>
                                                <li><AiOutlineCheck />Hotel ut nisan the duru</li>
                                                <li> <AiOutlineCheck />Orci miss natoque vasa ince</li>
                                                <li> <AiOutlineClose />Clean sorem ipsum morbin</li>
                                            </ul>
                                        </div>
                                    </div>

                                </SlickSlider>
                            </div>
                        </Col>
                    </Row>
                </Container>


            </div >

            <div className='promo__bg'>
                <div className='promo__bg-opacity'>
                    <Container>
                        <div className='promo__video'>
                            <div className='about__content-star'>
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                            </div>
                            <span className='about__content-description text-light'>THE CAPPA LUXURY HOTEL</span>
                            <p className='about__content-heading services-heading'>Promotional Video</p>
                            <div className='play__wrapepr'>
                                <div className='play__btn'>
                                    <BsPlay />
                                </div>
                            </div>
                        </div>
                    </Container>


                    <div className='facilities__bg'>
                        <Container>

                            <span className='about__content-description '>OUR SERVICES</span>
                            <p className='about__content-heading '>Hotel Facilities</p>

                            <div className='facilities__card-wrapper'>
                                <Row className='g-4'>
                                    <Col xs={12} md={4} >
                                        <div className='facilities__card'>
                                            <IoEarthOutline className='facilities__card-icn' />
                                            <IoEarthOutline className='facilities__card-bg-icn' />
                                            <h6 className='facilities__card-heading'>Pick Up &#38; Drop</h6>
                                            <p className='facilities__card-description'>We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.</p>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={4} >
                                        <div className='facilities__card'>
                                            <AiOutlineCar className='facilities__card-icn' />
                                            <AiOutlineCar className='facilities__card-bg-icn' />
                                            <h6 className='facilities__card-heading'>Parking Space</h6>
                                            <p className='facilities__card-description'>Fusce tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.</p>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={4} >
                                        <div className='facilities__card'>
                                            <MdBed className='facilities__card-icn' />
                                            <MdBed className='facilities__card-bg-icn' />
                                            <h6 className='facilities__card-heading'>Room Service</h6>
                                            <p className='facilities__card-description'>Room tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.</p>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={4} >
                                        <div className='facilities__card'>
                                            <FaSwimmingPool className='facilities__card-icn' />
                                            <FaSwimmingPool className='facilities__card-bg-icn' />
                                            <h6 className='facilities__card-heading'>Swimming Pool</h6>
                                            <p className='facilities__card-description'>Swimming pool tincidunt nise ace park norttito sit space, mus nellentesque habitant.</p>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={4} >
                                        <div className='facilities__card'>
                                            <IoWifiOutline className='facilities__card-icn' />
                                            <IoWifiOutline className='facilities__card-bg-icn' />
                                            <h6 className='facilities__card-heading'>Fibre Internet</h6>
                                            <p className='facilities__card-description'>Wifi tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.</p>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={4} >
                                        <div className='facilities__card'>
                                            <MdOutlineFreeBreakfast className='facilities__card-icn' />
                                            <MdOutlineFreeBreakfast className='facilities__card-bg-icn' />
                                            <h6 className='facilities__card-heading'>Breakfast</h6>
                                            <p className='facilities__card-description'>Eat tincidunt nisa ace park norttito sit amet space, mus nellentesque habitant</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </div>

                    <Container>
                        <Row>
                            <Col xs={12} md={{ span: 8, offset: 2 }} >
                                <div className='testi__wrapper'>
                                    <span className='about__content-description text-light'>TESTIMONIALS</span>
                                    <p className='about__content-heading testi-heading'>What Client's Say?</p>


                                    <SlickSlider {...teti_settings}>
                                        <div className='testi__person-wrapper'>
                                            <p className='testi__person-description'>
                                                Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.
                                            </p>

                                            <div className='testi__person-profile-wrapper'>
                                                <img src={testi_img_1} alt="" />
                                                <div className='testi__person-profile-details'>
                                                    <div className='about__content-star'>
                                                        <AiTwotoneStar />
                                                        <AiTwotoneStar />
                                                        <AiTwotoneStar />
                                                        <AiTwotoneStar />
                                                        <AiTwotoneStar />
                                                    </div>
                                                    <p className='testi__person-profile-name'>Emily Brown</p>
                                                    <span className='testi__person-profile-type'>Guest review</span>
                                                </div>
                                            </div>

                                            <BsChatQuote className='testi__person-quote' />
                                        </div>
                                        <div className='testi__person-wrapper'>
                                            <p className='testi__person-description'>
                                                Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.
                                            </p>

                                            <div className='testi__person-profile-wrapper'>
                                                <img src={testi_img_2} alt="" />
                                                <div className='testi__person-profile-details'>
                                                    <div className='about__content-star'>
                                                        <AiTwotoneStar />
                                                        <AiTwotoneStar />
                                                        <AiTwotoneStar />
                                                        <AiTwotoneStar />
                                                        <AiTwotoneStar />
                                                    </div>
                                                    <p className='testi__person-profile-name'>Emily Brown</p>
                                                    <span className='testi__person-profile-type'>Guest review</span>
                                                </div>
                                            </div>

                                            <BsChatQuote className='testi__person-quote' />
                                        </div>
                                        <div className='testi__person-wrapper'>
                                            <p className='testi__person-description'>
                                                Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.
                                            </p>

                                            <div className='testi__person-profile-wrapper'>
                                                <img src={testi_img_3} alt="" />
                                                <div className='testi__person-profile-details'>
                                                    <div className='about__content-star'>
                                                        <AiTwotoneStar />
                                                        <AiTwotoneStar />
                                                        <AiTwotoneStar />
                                                        <AiTwotoneStar />
                                                        <AiTwotoneStar />
                                                    </div>
                                                    <p className='testi__person-profile-name'>Emily Brown</p>
                                                    <span className='testi__person-profile-type'>Guest review</span>
                                                </div>
                                            </div>

                                            <BsChatQuote className='testi__person-quote' />
                                        </div>

                                    </SlickSlider>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>



        </>
    )
}
