import React from 'react'
import './style.css'

// IMPORT IMGES FOR SIDEBAR
import ic_baby_care from './images/baby-care.png'
import ic_pet_care from './images/pet-care.png';
import ic_popular from './images/popular.png';
import ic_food from './images/food.png';
import ic_beauty from './images/beauty-health.png'
import ic_home from './images/home-cleaning.png'
import ic_office from './images/office-products.png'
import ic_home_app from './images/home-appliances.png'
import ic_vehicle from './images/vehicle-essentials.png'

import landingBanner from './images/landingBanner.jpg'
import prod from './images/prod.jpg'

class HomePage extends React.Component {
    state = {
        isSidebarOpen: true,
        isRightSidbarOpen: false
    }
    sidebarOpenCloseHandler = () => {
        this.setState({isSidebarOpen: !this.state.isSidebarOpen})
    }

    rightSidbarOpenClose = () => {
        this.setState({isRightSidbarOpen: !this.state.isRightSidbarOpen})
    }
    render(){
        return (
            <div className={`full_wrapper ${this.state.isSidebarOpen ? "" : "sidebar_hide" }`}>
                <header>
                    <div className="bar">
                        <button onClick={this.sidebarOpenCloseHandler}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div className="logo">
                        BD Shop
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Search for products (e.g. eggs, milk, alu)"/>
                        <button>Search</button>
                    </div>
                    <div className="need_help">
                        <button>Need Help <span>?</span></button>
                    </div>
                    <div className="language">
                        <span>EN</span> <span>|</span> <span>BN</span>
                    </div>
                    <div className="auth">
                        <button>Sign in</button>
                    </div>
                </header>

                <section className="full_width">
                    <aside>
                        <ul className="first_nav">
                            <li className="active">Offers <span>47</span></li>
                            <li>Recipes</li>
                            <li>Discounts</li>
                            <li>Product Request</li>
                        </ul>
                        <ul className="second_nav">
                            <li><img src={ic_baby_care} /> Baby Care</li>
                            <li><img src={ic_pet_care} /> Pet Care</li>
                            <li><img src={ic_popular} /> Popular</li>
                            <li><img src={ic_food} /> Food</li>
                            <li><img src={ic_home} /> Home & Clearing</li>
                            <li><img src={ic_office} /> Office Products</li>
                            <li><img src={ic_beauty} /> Beauty & Health</li>
                            <li><img src={ic_home_app} /> Home Appliances</li>
                            <li><img src={ic_vehicle} /> Vehicle Essentials</li> 
                        </ul>
                    </aside>
                    <div className={`main_contents ${this.state.isRightSidbarOpen ? "rm_321" : ""}`}>
                        <div className="home_banner" style={{backgroundImage: "url("+landingBanner+")"}}>
                        </div>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                        <h1>lorem skjflsjf sfjsl fjslf jslkfjlskdfj</h1>
                    </div>



                    <div className="right_bar_fx_btn" onClick={this.rightSidbarOpenClose}>
                            <span className="p_item">4 Items</span>
                            <span className="p_tk">৳ 345</span>
                        </div>
                    <div className={`right_bar ${this.state.isRightSidbarOpen ? "rb_hop" : ""}`}>
                        <div className="close_btn" onClick={this.rightSidbarOpenClose}>
                            >
                        </div>

                        <div className="cart_list">
                            <ul>
                                <li>
                                    <div className="quantity">
                                        <span>x</span>
                                        <span>2</span>
                                        <span>x</span>
                                    </div>
                                    <div className="thumb">
                                        <img src={prod} />
                                    </div>
                                    <div className="detls">
                                        <h5>Goodies Dog Food Energy Treat Cut Bone Shape</h5>
                                        <p>৳ 350 / 125 gm</p>
                                    </div>
                                    <div className="amout"><p>৳ 60</p></div>
                                    <div></div>
                                    <div className="clr"></div>
                                </li>
                            </ul>
                        </div>
                    </div>




                </section>

            </div>
        )
    }
}   

export default HomePage;