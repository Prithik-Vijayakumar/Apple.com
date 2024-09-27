import React from "react";
import { Carousel } from "react-bootstrap";
import "./Highlights.css";

function Highlights () {

    return (
        <>
            <div className="highlights-container">
                <div className="hlts-heading-container">
                    <p className="hlts-heading">
                        Get the highlights.
                    </p>
                </div>    
                    <div className="hlts-film-link">
                        <p className="film-link">
                            Watch the film
                        </p>
                    </div>
                    <div className="carousel">
                    <Carousel className="carousel" indicators= {true} interval={5000}>
                        <Carousel.Item>
                            <div className="hlts-container">
                                <p className="hlts-details">
                                    The first iPhone built for Apple Intelligence.
                                    Personal, private, powerful. 
                                </p>
                                <img className="hlts-images" src={process.env.PUBLIC_URL + "/Images/iPhone16Pro/Highlights/Img-1.jpg"} />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="hlts-container">
                                <p className="hlts-details">
                                    So fast. So fluid. 
                                    Get a feel for the all-new Camera Control
                                </p>
                                <img className="hlts-images" src={process.env.PUBLIC_URL + "/Images/iPhone16Pro/Highlights/Img-2.jpg"} />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="hlts-container">
                                <p className="hlts-details">
                                    4K 120 fps Dolby Vision. 
                                    4 Studio-quality mics. A Pro 
                                    studio in your pocket.
                                </p>
                                <img className="hlts-images" src={process.env.PUBLIC_URL + "/Images/iPhone16Pro/Highlights/Img-3.jpg"} />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="hlts-container">
                                <p className="hlts-details">
                                    Our thinnest borders yet - for 
                                    even larger displays. Brilliant.
                                </p>
                                <img className="hlts-images" src={process.env.PUBLIC_URL + "/Images/iPhone16Pro/Highlights/Img-4.jpg"} />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="hlts-container">
                                <p className="hlts-details">
                                    All-new A18 Pro chip 
                                    powers unrivaled intelligence. 
                                    And unprecedented performance.
                                </p>
                                <img className="hlts-images" src={process.env.PUBLIC_URL + "/Images/iPhone16Pro/Highlights/Img-5.jpg"} />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="hlts-container">
                                <p className="hlts-details">
                                    A huge leap in battery life. 
                                    Game on.
                                </p>
                                <img className="hlts-images" src={process.env.PUBLIC_URL + "/Images/iPhone16Pro/Highlights/Img-6.jpg"} />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Highlights;