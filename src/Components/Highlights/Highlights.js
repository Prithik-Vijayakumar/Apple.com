import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Highlights.css";

function Highlights () {

    const play = `${process.env.PUBLIC_URL}/Images/iPhone16Pro/Highlights/PlayIcon.png`;
    const stop = `${process.env.PUBLIC_URL}/Images/iPhone16Pro/Highlights/StopIcon.png`;
    const playback = `${process.env.PUBLIC_URL}/Images/iPhone16Pro/Highlights/ReturnIcon.png`;

    const [activeIndex, setActiveIndex] = useState(0)
    const [autoPlay, setAutoPlay] = useState(true)
    const [indicatorImage, setIndicatorImage] = useState(stop)
    const [isVideoOpen, setIsVideoOpen] = useState(false)
    
    const openFilm = () => {
        setIsVideoOpen(true)
    }

    const closeFilm = () => {
        setIsVideoOpen(false)
    }

    useEffect (() => {
        if (isVideoOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

        return () => {
            document.body.style.overflow = "auto"
        }
    }, [isVideoOpen])

    const handleIndicator = (selectedIndex) => {
        handleIndex(selectedIndex)
        handleIndicatorControl()
    }

    const handleIndicatorControl = () => {
        setAutoPlay(false)
        setIndicatorImage(indicatorImage === stop ? play : play)
    }

    const handleIndex = (selectedIndex) => {
        setActiveIndex(selectedIndex)

        if (activeIndex === 4 && indicatorImage === stop) {
            setTimeout (() => {setIndicatorImage(playback)}, 5000)
        } else if (activeIndex !== 4) {
            setIndicatorImage(stop)
        }
    }

    const handleAutoPlay = () => {
        if (activeIndex !== 5) {
            setAutoPlay(!autoPlay)
            setIndicatorImage(indicatorImage === stop ? play : stop)
        } else if (activeIndex === 5 && indicatorImage === play) {
            setAutoPlay(!autoPlay)
            setIndicatorImage(indicatorImage === play ? stop : play)
            setTimeout (() => {setIndicatorImage(playback)}, 5000)
        } else if (activeIndex === 5 && indicatorImage === playback) {
            setIndicatorImage(indicatorImage === playback ? stop : stop)
            setActiveIndex(0)
        }
    }

    return (
        <>
            <div className="highlights-container">
                <div className="hlts-heading-container">
                    <p className="hlts-heading">
                        Get the highlights.
                    </p>
                </div>    
                    <div className="hlts-film-link" onClick={openFilm}>
                        <p className="film-link">
                            Watch the film
                        </p>
                        <img className="film-play" src={process.env.PUBLIC_URL + "/Images/iPhone16Pro/Highlights/FilmPlay.png"} />
                    </div>
                    {isVideoOpen && (
                        <div className="film-container">
                            <nav className="film-close">
                                <button className="film-close-btn" onClick={closeFilm}>&times;</button>   
                            </nav>
                            <div className="video-container">
                                <video controls autoPlay>
                                    <source src={process.env.PUBLIC_URL + "/Images/iPhone16Pro/Highlights/HighlightsFilm.mp4"} type="video/mp4" />
                                    <track
                                        src={process.env.PUBLIC_URL + "/Images/iPhone16Pro/Highlights/FilmSubtitle.vtt"}
                                        kind="subtitles"
                                        srcLang="en"
                                        label="English"
                                        default
                                    />
                                </video>
                            </div>
                        </div>
                    )}
                    <div className="carousel">
                    <Carousel activeIndex={activeIndex} onSelect={handleIndex} className="carousel" indicators= {false} interval={autoPlay ? 5000 : null} wrap={false} >
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
                <div className="indicators-container">
                <button className="indicators-play-btn" onClick={handleAutoPlay}><img className="play" src={indicatorImage} /></button>
                <div className="indicators">
                    <button className={`indicator ${activeIndex === 0 ? "active" : ""}`} onClick={() => handleIndicator(0)}></button>
                    <button className={`indicator ${activeIndex === 1 ? "active" : ""}`} onClick={() => handleIndicator(1)}></button>
                    <button className={`indicator ${activeIndex === 2 ? "active" : ""}`} onClick={() => handleIndicator(2)}></button>
                    <button className={`indicator ${activeIndex === 3 ? "active" : ""}`} onClick={() => handleIndicator(3)}></button>
                    <button className={`indicator ${activeIndex === 4 ? "active" : ""}`} onClick={() => handleIndicator(4)}></button>
                    <button className={`indicator ${activeIndex === 5 ? "active" : ""}`} onClick={() => handleIndicator(5)}></button>
                </div>
                </div>
            </div>
        </>
    )
}

export default Highlights;