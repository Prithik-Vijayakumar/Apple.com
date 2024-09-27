import React, { useEffect, useState } from "react";
import "./Home.css";

function Home () {

    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [isNavVisible, setIsNavVisible] = useState(false)
    const [isNavOpen, setIsNavOpen] = useState(false)

    const handleScrollNav = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop

        if (scrollTop > 560) {
            setIsNavOpen(true)
            setTimeout(() => {
                setIsNavVisible(true)
            }, 0);
        } else {
            setIsNavOpen(false)
            setTimeout(() => {
                setIsNavVisible(false)
            }, 500);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollNav)

        return () => {
            window.removeEventListener('scroll', handleScrollNav)
        }
    }, [])

    const openMenu = () => {
        setIsOpen(true)
        setTimeout(() => {
            setIsVisible(true)
        }, 0)
    }

    const closeMenu = () => {
        setIsOpen(false)
        setTimeout(() => {
            setIsVisible(false)
        }, 800)
    }

    const openStore = () => {
        window.location.href = "https://www.apple.com/store"
    }

    const openMac = () => {
        window.location.href = "https://www.apple.com/mac"
    }

    const openiPad = () => {
        window.location.href = "https://www.apple.com/ipad"
    }

    const openiPhone = () => {
        window.location.href = "https://www.apple.com/iphone"
    }

    const openWatch = () => {
        window.location.href = "https://www.apple.com/watch"
    }

    const openVision = () => {
        window.location.href = "https://www.apple.com/apple-vision-pro"
    }

    const openAirpods = () => {
        window.location.href = "https://www.apple.com/airpods"
    }

    const openTV = () => {
        window.location.href = "https://www.apple.com/tv-home"
    }

    const openEntertainment = () => {
        window.location.href = "https://www.apple.com/services"
    }

    const openAccessories = () => {
        window.location.href = "https://www.apple.com/shop/accessories/all"
    }

    const openSupport = () => {
        window.location.href = "https://support.apple.com/?cid=gn-ols-home-hp-explore"
    }

    const handlelink = () => {
        window.location.href = "https://www.apple.com/"
    }
    const handleBuy = () => {
        window.location.href = "https://www.apple.com/shop/buy-iphone/iphone-16-pro"
    }

    const bgImage = `${process.env.PUBLIC_URL}/Images/iPhone16Pro/FrontImage.jpg`

    useEffect(() => {
        document.body.style.backgroundImage = `url(${bgImage})`

        return () => {
            document.body.style.backgroundImage = ""
        }
    }, [])

    return (
        <>
            <div className="container">
                <nav className="nav-item-container">
                    <img src={process.env.PUBLIC_URL + "/Images/iPhone16Pro/AppleLogo.png"} className="logo" onClick={handlelink}/>
                    <img src={process.env.PUBLIC_URL + "/Images/iPhone16Pro/MenuIcon.png"} className="menu" onClick={openMenu}/>
                </nav>
                <div className="home-img-container">
                    <p className="heading">
                        iPhone 16 Pro
                    </p>
                    <img src={process.env.PUBLIC_URL + "/Images/iPhone16Pro/HelloImage.png"} className="hello-img"/>
                </div>
                <div className="buy-btn-container">
                    <button className="buy-btn" onClick={handleBuy}>
                        Buy
                    </button>
                </div>
                <div className="detail-container">
                    <p className="buy-detail-1">
                        From $999 or $41.62/mo. for 24 mo.
                    </p>
                    <p className="buy-detail-2">
                        Apple Intelligence coming this fall
                    </p>
                </div>
                {isVisible && (
                <div className={`menu-container ${isOpen ? 'show' : 'hide'}`}>
                    <nav className="close-btn-container">
                        <img src={process.env.PUBLIC_URL + "/Images/iPhone16Pro/Close.png"} className="close-btn" onClick={closeMenu}/>
                    </nav>
                    <div className="menu-list-container">
                        <p className="menu-list" onClick={openStore}>
                            Store
                        </p>
                        <p className="menu-list" onClick={openMac}>
                            Mac
                        </p>
                        <p className="menu-list" onClick={openiPad}>
                            iPad
                        </p>
                        <p className="menu-list" onClick={openiPhone}>
                            iPhone
                        </p>
                        <p className="menu-list" onClick={openWatch}>
                            Watch
                        </p>
                        <p className="menu-list" onClick={openVision}>
                            Vision
                        </p>
                        <p className="menu-list" onClick={openAirpods}>
                            Airpods
                        </p>
                        <p className="menu-list" onClick={openTV}>
                            TV & Home
                        </p>
                        <p className="menu-list" onClick={openEntertainment}>
                            Entertainment
                        </p>
                        <p className="menu-list" onClick={openAccessories}>
                            Accessories
                        </p>
                        <p className="menu-list" onClick={openSupport}>
                            Support
                        </p>
                    </div>
                </div>
                )}
                {isNavVisible && (
                        <nav className= {`pop-up-nav ${isNavOpen ? 'show' : 'hide'}`}>
                            <p className="pop-up-heading">
                                iPhone 16 Pro
                            </p>
                            <button className="pop-up-buy" onClick={handleBuy}>Buy</button>
                        </nav>
                )}
            </div>
                
        </>
    )
}

export default Home;