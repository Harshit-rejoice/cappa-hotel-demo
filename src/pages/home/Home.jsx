import React, { useState } from 'react'
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
    testi_img_3,
    fitness_center,
    health_club,
    restaurant,
    spa_center,
    news1,
    news2,
    news3,
    news4,
    client1,
    client2,
    client3,
    client4,
    client5
} from "../.../../../assets/images/images-path";

import { AiTwotoneStar, AiOutlineArrowRight, AiOutlineCar } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { FaRegNewspaper, FaSwimmingPool } from 'react-icons/fa';
import { MdBed, MdOutlineBreakfastDining, MdOutlineFreeBreakfast } from 'react-icons/md';
import { BiBath } from 'react-icons/bi';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { BsPlay, BsChatQuote } from 'react-icons/bs'
import { IoEarthOutline, IoWifiOutline } from 'react-icons/io5'
import { MdDateRange, MdExpandLess } from 'react-icons/md';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
import Marquee from "react-fast-marquee";

import MainSlider from './components/slider/MainSlider'
import Footer from '../../components/Footer/Footer';
import { DayPicker } from 'react-day-picker';

export default function Index() {

    const [checkInCalToggle, setcheckInCalToggle] = useState(false);
    const [checkInDate, setcheckInDate] = useState();

    const [checkOutCalToggle, setcheckOutCalToggle] = useState(false);
    const [checkOutDate, setcheckOutDate] = useState();


    const [adultDrop, setadultDrop] = useState(false);
    const [adultData, setadultData] = useState('1 Adult');

    const [childDrop, setchildDrop] = useState(false);
    const [childData, setchildData] = useState('Children');

    const [roomDrop, setroomDrop] = useState(false);
    const [roomData, setroomData] = useState('1 Room');

    const checkInCalander = () => {
        if (checkInCalToggle) {
            setcheckInCalToggle(false)
        } else {
            setcheckInCalToggle(true)
        }


        setcheckOutCalToggle(false)
        setadultDrop(false)
        setchildDrop(false)
        setroomDrop(false)
    }
    const checkOutCalander = () => {
        if (checkOutCalToggle) {
            setcheckOutCalToggle(false)
        } else {
            setcheckOutCalToggle(true)
        }

        setcheckInCalToggle(false)

        setadultDrop(false)
        setchildDrop(false)
        setroomDrop(false)
    }


    const checkInHadler = (e) => {
        e.target.value = ''

    }
    const adultFunc = (data) => {
        setadultData(data);
        if (adultDrop) {
            setadultDrop(false)
        }

    }

    const childFunc = (data) => {
        setchildData(data);
        if (childDrop) {
            setchildDrop(false)
        }

    }

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
        autoplay: true,

    };
    const news_settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 3,
        arrows: false,
        autoplaySpeed: 3000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]

    };


    return (
        <>
            <MainSlider />


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
                                                <Row className='gx-xs-3 g-md-0 gx-lg-3'>
                                                    <Col xs={3} md={6} lg={3}>
                                                        <MdBed />
                                                    </Col>
                                                    <Col xs={3} md={6} lg={3}>
                                                        <BiBath />
                                                    </Col>
                                                    <Col xs={3} md={6} lg={3}>
                                                        <MdOutlineBreakfastDining />
                                                    </Col>
                                                    <Col xs={3} md={6} lg={3}>
                                                        <FaRegNewspaper />
                                                    </Col>
                                                </Row>


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
                                                <Row className='gx-xs-3 g-md-0 gx-lg-3'>
                                                    <Col xs={3} md={6} lg={3}>
                                                        <MdBed />
                                                    </Col>
                                                    <Col xs={3} md={6} lg={3}>
                                                        <BiBath />
                                                    </Col>
                                                    <Col xs={3} md={6} lg={3}>
                                                        <MdOutlineBreakfastDining />
                                                    </Col>
                                                    <Col xs={3} md={6} lg={3}>
                                                        <FaRegNewspaper />
                                                    </Col>
                                                </Row>


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
                                                <Row className='gx-xs-3 g-md-0 gx-lg-3'>
                                                    <Col xs={3} md={6} lg={3}>
                                                        <MdBed />
                                                    </Col>
                                                    <Col xs={3} md={6} lg={3}>
                                                        <BiBath />
                                                    </Col>
                                                    <Col xs={3} md={6} lg={3}>
                                                        <MdOutlineBreakfastDining />
                                                    </Col>
                                                    <Col xs={3} md={6} lg={3}>
                                                        <FaRegNewspaper />
                                                    </Col>
                                                </Row>

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
                                                <Row className='gx-xs-3 g-md-0 gx-lg-3'>
                                                    <Col xs={3}>
                                                        <MdBed />
                                                    </Col>
                                                    <Col xs={3}>
                                                        <BiBath />
                                                    </Col>
                                                    <Col xs={3}>
                                                        <MdOutlineBreakfastDining />
                                                    </Col>
                                                    <Col xs={3}>
                                                        <FaRegNewspaper />
                                                    </Col>
                                                </Row>
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
                                                <Row className='gx-xs-3 g-md-0 gx-lg-3'>
                                                    <Col xs={3}>
                                                        <MdBed />
                                                    </Col>
                                                    <Col xs={3}>
                                                        <BiBath />
                                                    </Col>
                                                    <Col xs={3}>
                                                        <MdOutlineBreakfastDining />
                                                    </Col>
                                                    <Col xs={3}>
                                                        <FaRegNewspaper />
                                                    </Col>
                                                </Row>
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


                    <div className='facilities__bg'>

                        <Container>
                            <Row className='g-0'>
                                <Col xs={12} md={6} className='overflow-hidden'>
                                    <img src={restaurant} alt="" className='extra__facilities-img' />
                                </Col>
                                <Col xs={12} md={6}>
                                    <div className='extra__facilities-description'>
                                        <span className='about__content-description '>DISCOVER</span>
                                        <p className='about__content-heading extra__facilities-heading-small'>The Restaurant</p>
                                        <p className='about__content-desc-color'>Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
                                        <button className='about__content-button'>
                                            LEARN MORE
                                            <span></span>
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='g-0'>

                                <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
                                    <div className='extra__facilities-description'>
                                        <span className='about__content-description '>Spa Center</span>
                                        <p className='about__content-heading extra__facilities-heading-small'>Spa Center</p>
                                        <p className='about__content-desc-color'>Spa center inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
                                        <button className='about__content-button'>
                                            LEARN MORE
                                            <span></span>
                                        </button>
                                    </div>
                                </Col>
                                <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} className='overflow-hidden'>
                                    <img src={spa_center} alt="" className='extra__facilities-img' />
                                </Col>
                            </Row>

                            <Row className='g-0'>
                                <Col xs={12} md={6} className='overflow-hidden'>
                                    <img src={fitness_center} alt="" className='extra__facilities-img' />
                                </Col>
                                <Col xs={12} md={6}>
                                    <div className='extra__facilities-description'>
                                        <span className='about__content-description '>MODERN</span>
                                        <p className='about__content-heading extra__facilities-heading-small'>Fitness Center</p>
                                        <p className='about__content-desc-color'>Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
                                        <button className='about__content-button'>
                                            LEARN MORE
                                            <span></span>
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='g-0'>

                                <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
                                    <div className='extra__facilities-description'>
                                        <span className='about__content-description '>EXPERIENCES</span>
                                        <p className='about__content-heading extra__facilities-heading-small'>The Health Club &#38; Pool</p>
                                        <p className='about__content-desc-color'>The health club & pool at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.The health club & pool at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
                                        <button className='about__content-button'>
                                            LEARN MORE
                                            <span></span>
                                        </button>
                                    </div>
                                </Col>
                                <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} className='overflow-hidden'>
                                    <img src={health_club} alt="" className='extra__facilities-img' />
                                </Col>
                            </Row>

                        </Container>


                    </div>

                    <div className='hotel__blog-section'>
                        <Container>

                            <p className='hotel__blog-description '>HOTEL BLOG</p>
                            <p className='hotel__blog-heading '>Our News</p>
                            <div className='news__card-slider'>
                                <SlickSlider {...news_settings}>

                                    <div className='news__card-wrapper'>
                                        <div className='news__card-img'>
                                            <img src={news1} alt="" />
                                            <div className='news__card-date'>
                                                dec <br /><span >04</span>
                                            </div>
                                        </div>
                                        <div className='news__card-desc'>
                                            <p className='card-desc-title'>spa</p>
                                            <h6 className='card-desc-heading'>Benefits of Spa <br /> Treatments</h6>
                                        </div>
                                    </div>

                                    <div className='news__card-wrapper'>
                                        <div className='news__card-img'>
                                            <img src={news2} alt="" />
                                            <div className='news__card-date'>
                                                dec <br /><span >04</span>
                                            </div>
                                        </div>
                                        <div className='news__card-desc'>
                                            <p className='card-desc-title'>Bathrooms</p>
                                            <h6 className='card-desc-heading'>Hotel Bathroom <br />Collections</h6>
                                        </div>
                                    </div>

                                    <div className='news__card-wrapper'>
                                        <div className='news__card-img'>
                                            <img src={news3} alt="" />
                                            <div className='news__card-date'>
                                                dec <br /><span >04</span>
                                            </div>
                                        </div>
                                        <div className='news__card-desc'>
                                            <p className='card-desc-title'>Health</p>
                                            <h6 className='card-desc-heading'>Weight Loss with Fitness Health<br /> Club</h6>
                                        </div>
                                    </div>

                                    <div className='news__card-wrapper'>
                                        <div className='news__card-img'>
                                            <img src={news4} alt="" />
                                            <div className='news__card-date'>
                                                dec <br /><span >04</span>
                                            </div>
                                        </div>
                                        <div className='news__card-desc'>
                                            <p className='card-desc-title'>Design</p>
                                            <h6 className='card-desc-heading'>Retro Lighting Design <br /> in The Hotels</h6>
                                        </div>
                                    </div>

                                    <div className='news__card-wrapper'>
                                        <div className='news__card-img'>
                                            <img src={news3} alt="" />
                                            <div className='news__card-date'>
                                                dec <br /><span >04</span>
                                            </div>
                                        </div>
                                        <div className='news__card-desc'>
                                            <p className='card-desc-title'>spa</p>
                                            <h6 className='card-desc-heading'>Benefits of Spa <br /> Treatments</h6>
                                        </div>
                                    </div>


                                </SlickSlider>
                            </div>
                        </Container>

                    </div>


                    <div className='contact__section'>
                        <Container>
                            <Row >
                                <Col xs={{ span: 12 }} md={{ span: 5 }}>
                                    <div className='about__content-star'>
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                    </div>
                                    <p className='contact__section-desc'>Each of our guest rooms feature a private bath, wi-fi, cable television and include full breakfast.</p>
                                    <div className='contact__section-reservation'>
                                        <FiPhoneCall />
                                        <div className='reservation-text '>
                                            <span className='services-long-description'>For information</span>
                                            <a href='tel:855-100-4444'>855 100 4444</a>
                                        </div>
                                    </div>
                                    <p className='free-call'><AiOutlineCheck /> Call us, it's toll-free.</p>
                                </Col>

                                <Col xs={{ span: 12 }} md={{ span: 5, offset: 1 }}>
                                    <div className='hotel__book-form'>
                                        <span className='about__content-description '>EXPERIENCES</span>
                                        <p className='about__content-heading extra__facilities-heading-small'>The Health Club &#38; Pool</p>
                                        <hr className='opacity-25' />

                                        <div className='position-relative my-3'>
                                            <div className={`reservation-calander ${checkInCalToggle === true ? 'reservation-calander-active' : ''}`}>
                                                <DayPicker
                                                    mode="single"
                                                    selected={checkInDate}
                                                    onSelect={setcheckInDate}
                                                    fromMonth={new Date()}
                                                    disabled={{ before: new Date() }}
                                                />
                                            </div>
                                            <div className='reservation-selector border-0' onClick={checkInCalander}>
                                                <input
                                                    type=""
                                                    className='reservation-input'
                                                    placeholder={'Check in'}
                                                    onChange={(e) => checkInHadler(e)}
                                                    value={checkInDate === undefined ? '' : new Date(checkInDate).toLocaleDateString()}
                                                />

                                                <MdDateRange className='reservation-input-icon' />
                                            </div>

                                        </div>
                                        <div className='position-relative my-3'>
                                            <div className={`reservation-calander ${checkOutCalToggle === true ? 'reservation-calander-active' : ''}`}>
                                                <DayPicker
                                                    mode="single"
                                                    selected={checkOutDate}
                                                    onSelect={setcheckOutDate}
                                                    fromMonth={new Date()}
                                                    disabled={{ before: checkInDate === undefined ? new Date() : checkInDate }}
                                                />
                                            </div>
                                            <div className='reservation-selector border-0' onClick={checkOutCalander}>
                                                <input type="text" className='reservation-input'
                                                    placeholder={'Check Out'}
                                                    value={checkOutDate === undefined ? '' : new Date(checkOutDate).toLocaleDateString()}
                                                    onChange={(e) => checkInHadler(e)}
                                                />
                                                <MdDateRange className='reservation-input-icon' />
                                            </div>
                                        </div>

                                        <Row className='my-3'>
                                            <Col >
                                                <div className='position-relative h-100'>
                                                    <div className={`reservation-dropdown-menu ${adultDrop === true ? 'reservation-dropdown-menu-active' : ''}`}>
                                                        <span onClick={() => adultFunc('1 Adult')}>1 Adult</span>
                                                        <span onClick={() => adultFunc('2 Adult')}>2 Adult</span>
                                                        <span onClick={() => adultFunc('3 Adult')}>3 Adult</span>
                                                        <span onClick={() => adultFunc('4 Adult')}>4 Adult</span>
                                                    </div>

                                                    <div className='reservation-selector reservation-selector-drop border-0' onClick={
                                                        () => {
                                                            if (adultDrop) {
                                                                setadultDrop(false)
                                                            } else {
                                                                setadultDrop(true)

                                                            }
                                                            setcheckInCalToggle(false)
                                                            setcheckOutCalToggle(false)
                                                            setchildDrop(false)
                                                            setroomDrop(false)
                                                        }
                                                    }>
                                                        {adultData}
                                                        <MdExpandLess className='reservation-selector-icon' />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className='position-relative h-100'>
                                                    <div className={`reservation-dropdown-menu ${childDrop === true ? 'reservation-dropdown-menu-active' : ''}`}>
                                                        <span onClick={() => childFunc('Children')}>Children</span>
                                                        <span onClick={() => childFunc('1 Child')}>1 Child</span>
                                                        <span onClick={() => childFunc('2 Children')}>2 Children</span>
                                                        <span onClick={() => childFunc('3 Children')}>3 Children</span>
                                                        <span onClick={() => childFunc('4 Children')}>4 Children</span>
                                                    </div>

                                                    <div className='reservation-selector reservation-selector-drop border-0' onClick={
                                                        () => {
                                                            if (childDrop) {
                                                                setchildDrop(false)
                                                            } else {
                                                                setchildDrop(true)

                                                            }
                                                            setcheckInCalToggle(false)
                                                            setcheckOutCalToggle(false)
                                                            setadultDrop(false)
                                                            setroomDrop(false)
                                                        }
                                                    }>
                                                        {childData}
                                                        <MdExpandLess className='reservation-selector-icon' />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>

                                        <div className='position-relative h-100 mt-5'>
                                            <div className='reservation-selector reservation-submit border-0'>
                                                CHECK AVAILABILITY
                                            </div>
                                        </div>

                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>

            <div className='Companys-bg'>
                <Container fluid>
                    <Marquee speed='50' gradient="false" gradientWidth={0}>
                        <img src={client1} alt="" className='opacity-75' />
                        <img src={client2} alt="" className='opacity-75' />
                        <img src={client3} alt="" className='opacity-75' />
                        <img src={client4} alt="" className='opacity-75' />
                        <img src={client5} alt="" className='opacity-75' />
                    </Marquee>
                </Container>
            </div>
            <Footer />
        </>
    )
}
