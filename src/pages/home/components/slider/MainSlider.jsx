import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import "../../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { slider1, slider2, slider3 } from "../../.../../../../assets/images/images-path";
import './_slider.scss';
import { FiPhoneCall } from 'react-icons/fi';
import { AiTwotoneStar } from 'react-icons/ai';
import { MdDateRange, MdExpandLess } from 'react-icons/md';
import { DayPicker } from 'react-day-picker';

import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import { Container, Row, Col, Form } from 'react-bootstrap';

export default function MainSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        afterChange: () => {
            let slickAvtiveContent = $('.slick-active').children().find('.slider__content');
            let contentChilds = $(slickAvtiveContent).children();
            contentChilds.each((index, elem) => {
                $(elem).addClass('animate___fadeInUp');
            })
        },
        beforeChange: () => {
            let a = $('.slick-active').children().find(".slider__content").children();
            a.each((index, elem) => {
                $(elem).removeClass('animate___fadeInUp');
            })
        }
    };


    // const [checkInSelected, setcheckInSelected] = React.useState();
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

    // useEffect(() => {
    //     console.log(checkInDate);
    // }, [checkInDate])


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


    const roomFunc = (data) => {
        setroomData(data);
        if (roomDrop) {
            setroomDrop(false)
        }
        setcheckInCalToggle(false)
        setcheckOutCalToggle(false)
        setadultDrop(false)
        setchildDrop(false)


    }

    useEffect(() => {
        let slickAvtiveContent = $('.slick-active').children().find('.slider__content');
        let contentChilds = $(slickAvtiveContent).children();
        contentChilds.each((index, elem) => {
            $(elem).addClass('animate___fadeInUp');
        })

        $('.slick-slide').on('mousedown', () => {
            document.body.style.cursor = "grab";
            setcheckInCalToggle(false)
            setcheckOutCalToggle(false)
            setadultDrop(false)
            setchildDrop(false)
            setroomDrop(false)

        })

        $('.slick-slide').on('mouseup', () => {
            document.body.style.cursor = "default";
        })
    }, [])

    return (
        <>
            <div className='main__slider'>
                <Slider {...settings}>
                    <div className='sider__Wrapper'>
                        <div className='slider__bg'>
                            <img src={slider1} alt="" className='slider__bg-img' />
                        </div>

                        <div className='slider__content'>
                            <div className='slider__content-star '>
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                            </div>
                            <p className='slider__content-description'>the ultimate luxury experience</p>
                            <p className='slider__content-heading'>enjoy the best <br /> moments of life</p>
                            <button className='slider__content-button'>
                                rooms &#38; suites
                                <span></span>
                            </button>
                        </div>

                    </div>
                    <div className='sider__Wrapper'>
                        <div className='slider__bg'>
                            <img src={slider2} alt="" className='slider__bg-img' />
                        </div>


                        <div className='slider__content'>
                            <div className='slider__content-star '>
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                            </div>
                            <p className='slider__content-description'>Luxury hotel &#38; best resort</p>
                            <p className='slider__content-heading'>enjoy a luxury <br /> experience</p>
                            <button className='slider__content-button'>
                                rooms &#38; suites
                                <span></span>
                            </button>
                        </div>

                    </div>
                    <div className='sider__Wrapper'>
                        <div className='slider__bg'>
                            <img src={slider3} alt="" className='slider__bg-img' />
                        </div>


                        <div className='slider__content'>
                            <div className='slider__content-star'>
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                            </div>
                            <p className='slider__content-description'>unique place to relex &#38; enjoy</p>
                            <p className='slider__content-heading'>the prefecr base <br /> for you</p>
                            <button className='slider__content-button'>
                                rooms &#38; suites
                                <span></span>
                            </button>
                        </div>
                    </div>
                </Slider>
                <div className='slider__contact-wrapper d-none d-md-flex'>
                    <div>
                        <div className='slider__contact-botton'>
                            <FiPhoneCall />
                        </div>
                        <div className='slider__contact-text'>
                            <span>Reservation</span>
                            <p>855 100 4444</p>
                        </div>
                    </div>
                </div>
                <div className='slider__reservation-wrapper'>
                    <Container>
                        <Row>
                            <Col xs={12} md={6} lg={2} >
                                <div className='position-relative'>
                                    <div className={`reservation-calander ${checkInCalToggle === true ? 'reservation-calander-active' : ''}`}>
                                        <DayPicker
                                            mode="single"
                                            selected={checkInDate}
                                            onSelect={setcheckInDate}
                                            fromMonth={new Date()}
                                            disabled={{ before: new Date() }}
                                        />
                                    </div>
                                    <div className='reservation-selector' onClick={checkInCalander}>
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
                            </Col>

                            <Col xs={12} md={6} lg={2}>
                                <div className='position-relative'>
                                    <div className={`reservation-calander ${checkOutCalToggle === true ? 'reservation-calander-active' : ''}`}>
                                        <DayPicker
                                            mode="single"
                                            selected={checkOutDate}
                                            onSelect={setcheckOutDate}
                                            fromMonth={new Date()}
                                            disabled={{ before: checkInDate === undefined ? new Date() : checkInDate }}
                                        />
                                    </div>
                                    <div className='reservation-selector' onClick={checkOutCalander}>
                                        <input type="text" className='reservation-input'
                                            placeholder={'Check Out'}
                                            value={checkOutDate === undefined ? '' : new Date(checkOutDate).toLocaleDateString()}
                                            onChange={(e) => checkInHadler(e)}
                                        />
                                        <MdDateRange className='reservation-input-icon' />
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} md={3} lg={2}>
                                <div className='position-relative h-100'>
                                    <div className={`reservation-dropdown-menu ${adultDrop === true ? 'reservation-dropdown-menu-active' : ''}`}>
                                        <span onClick={() => adultFunc('1 Adult')}>1 Adult</span>
                                        <span onClick={() => adultFunc('2 Adult')}>2 Adult</span>
                                        <span onClick={() => adultFunc('3 Adult')}>3 Adult</span>
                                        <span onClick={() => adultFunc('4 Adult')}>4 Adult</span>
                                    </div>

                                    <div className='reservation-selector reservation-selector-drop' onClick={
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

                            <Col xs={12} md={3} lg={2}>
                                <div className='position-relative h-100'>
                                    <div className={`reservation-dropdown-menu ${childDrop === true ? 'reservation-dropdown-menu-active' : ''}`}>
                                        <span onClick={() => childFunc('Children')}>Children</span>
                                        <span onClick={() => childFunc('1 Child')}>1 Child</span>
                                        <span onClick={() => childFunc('2 Children')}>2 Children</span>
                                        <span onClick={() => childFunc('3 Children')}>3 Children</span>
                                        <span onClick={() => childFunc('4 Children')}>4 Children</span>
                                    </div>

                                    <div className='reservation-selector reservation-selector-drop' onClick={
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

                            <Col xs={12} md={3} lg={2}>
                                <div className='position-relative h-100'>
                                    <div className={`reservation-dropdown-menu ${roomDrop === true ? 'reservation-dropdown-menu-active' : ''}`}>
                                        <span onClick={() => roomFunc('1 Room')}>1 Room</span>
                                        <span onClick={() => roomFunc('2 Room')}>2 Room</span>
                                        <span onClick={() => roomFunc('3 Room')}>3 Room</span>
                                        <span onClick={() => roomFunc('4 Room')}>4 Room</span>
                                    </div>

                                    <div className='reservation-selector reservation-selector-drop' onClick={
                                        () => {
                                            if (roomDrop) {
                                                setroomDrop(false)
                                            } else {
                                                setroomDrop(true)

                                            }
                                            setcheckInCalToggle(false)
                                            setcheckOutCalToggle(false)
                                            setadultDrop(false)
                                            setchildDrop(false)
                                        }
                                    }>
                                        {roomData}
                                        <MdExpandLess className='reservation-selector-icon' />
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} md={3} lg={2}>
                                <div className='position-relative h-100'>
                                    <div className='reservation-selector reservation-submit'>

                                        CHECK NOW
                                    </div>
                                </div>
                            </Col>


                        </Row>
                    </Container>
                </div>
            </div >



        </>
    )
}
