import React from "react";
import "./Home.css";

function Home () {

    const handlelink = () => {
        window.location.href = "https://www.apple.com/"
    }
    const handleBuy = () => {
        window.location.href = "https://www.apple.com/shop/buy-iphone/iphone-16-pro"
    }

    return (
        <>
            <div className="container">
                <nav className="nav-item-container">
                    <img src={process.env.PUBLIC_URL + "/Images/iPhone 16 Pro/AppleLogo.png"} className="logo" onClick={handlelink}/>
                    <img src={process.env.PUBLIC_URL + "/Images/iPhone 16 Pro/MenuIcon.png"} className="menu"/>
                </nav>
                <div className="home-img-container">
                    <p className="heading">
                        iPhone 16 Pro
                    </p>
                    <img src={process.env.PUBLIC_URL + "/Images/iPhone 16 Pro/Hello Image.jpg"} className="hello-img"/>
                    <img src={process.env.PUBLIC_URL + "/Images/iPhone 16 Pro/Front Image.jpg"} className="home-img"/>
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
            </div>
        </>
    )
}

export default Home;