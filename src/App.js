import logo from './logo.svg';
import './App.css';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';



function App() {
  return(
    <div>
    
    <div id="wrapper">
        <div>
            <video autoplay muted loop id="myVideo">
                <source src="../PanCake/assets/Y2meta.app-SPIN Washington DC Grand Opening Party-(1080p).mp4" type="video/mp4"/>
              </video>
        </div>
        <div className="container-fluid">
            <div className="header">
                <nav className="navbar navbar-light navbar-expand-lg shadow navbar-custom bg-custom mb-4 fixed-top" id="navbar">
                    <div className="container-fluid">
                        <a className="navbar-brand fw-bold pancake" href="homepage.html">PANCAKE</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbarExample-expand-lg" aria-controls="offcanvasNavbarExample-expand-lg">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="order-3 d-none d-lg-flex justify-content-end">
                            <a href="booking.html" className="btn btn-custom">BOOK NOW</a>
                        </div>
                        <div className="offcanvas offcanvas-start bg-custom" tabindex="-1" id="offcanvasNavbarExample-expand-lg"
                            aria-labelledby="offcanvasNavbarExample-expand-lg">
                            <div className="offcanvas-header">
                                <h3 className="offcanvas-title" id="offcanvasLabel" style={{color:'black'}}>LINKS</h3>
                            </div>
                            <div className="offcanvas-body bg-custom hover">
                                <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <a className="nav-link t-color" href="au-bou.html">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link t-color" href="STORE.html">Store</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link t-color" href="Hiring.html">Hiring</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link  t-color" href="contact.html">Contact Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link  t-color" href="kitchen.html">Kitchen</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link  t-color" href="faq2.html">FAQ's</a>
                                    </li>
                                    <li className="nav-item d-lg-none">
                                        <a href="#" className="btn btn-custom w-100">BOOK NOW</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav> 
            <div className="spacer-inner-2"></div>
            </div>
            <div className="header-content">
                <div className="row">
                    <div className="table-box col-md-3">
                        <div className="inner-box">
                            <i className="fa-solid fa-table-tennis-paddle-ball"></i>
                            <p>TABLE <br/> RESERVATION</p>
                            <span>2 to 10 Guests</span>
                        </div>
                        <div className="chevron-select">
                            <select name="VENUE" id="venue-rev"  required="required" aria-required="true">
                                <option value="">SELECT VENUE</option>
									<option value="BOS">Boston</option>
									<option value="CHI">Chicago</option>
									<option value="NYC23">New York Flatiron</option>
									<option value="NYMT">New York Midtown</option>
									<option value="PHL">Philadelphia</option>
									<option value="SF">San Francisco</option>
									<option value="SEA">Seattle</option>
									<option value="YYK">Toronto</option>
									<option value="DC">Washington DC</option>
                            </select>
                        </div>
                        <div className="fuction-box">
                            <form action="booking.html">
                                <button className="btn-rev" type="submit">RESERVE NOW</button>
                            </form>
                        </div>
                    </div>
                    <div className="table-box col-md-3 table-box-event">
                        <div className="inner-box inner-box-event">
                            <i className="fa-solid fa-person-booth"></i>
                            <p>PRIVATE EVENTS</p>
                            <span>From 10 Guests to Full Buyouts <br/> Custom Hours Available</span>                        
                        </div>
                        <div className="chevron-select chevron-select-event">
                            <select name="VENUE" id="venue-event" required="required" aria-required="true">
                                <option value="">SELECT VENUE</option>
									<option value="BOS">Boston</option>
									<option value="CHI">Chicago</option>
									<option value="NYC23">New York Flatiron</option>
									<option value="NYMT">New York Midtown</option>
									<option value="PHL">Philadelphia</option>
									<option value="SF">San Francisco</option>
									<option value="SEA">Seattle</option>
									<option value="YYK">Toronto</option>
									<option value="DC">Washington DC</option>
                            </select>
                        </div>
                        <div className="fuction-box color-event color">
                            <form action="">
                                <button className="btn-party color-text" type="submit">NEXT</button>
                            </form>
                        </div>
                    </div>
                    <div className="table-box col-md-3 table-box-party">
                        <div className="inner-box inner-box-party">
                            <i className="fa-solid fa-wine-glass-empty"></i>
                            <p>PARTY<br/>PACKAGES</p>
                            <span>4 to 20 Guests | 2 hours <br/> *Limited to friday night thru Sunday</span>
                        </div>
                        <div className="chevron-select chevron-select-party">
                            <select name="VENUE" id="venue" required="required" aria-required="true">
                                <option value="">SELECT VENUE</option>
									<option value="BOS">Boston</option>
									<option value="CHI">Chicago</option>
									<option value="NYC23">New York Flatiron</option>
									<option value="NYMT">New York Midtown</option>
									<option value="PHL">Philadelphia</option>
									<option value="SF">San Francisco</option>
									<option value="SEA">Seattle</option>
									<option value="YYK">Toronto</option>
									<option value="DC">Washington DC</option>
                            </select>
                        </div>
                        <div className="fuction-box color-party color">
                            <form action="">
                                <button className="btn-party" type="submit">BOOK ONLINE</button>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="spacer-inner">
            </div>
            
            <div className="container-fluid body-content">
                <h2>
                    COME PLAY WITH US
                </h2>
                <p>
                    PANCAKE is the original ping pong social club, your offline social network, the only one that doesn’t require a membership. We encourage human connections through a game that transcends age, gender, and any boundaries. PANCAKE welcomes diversity and embraces the unconventional. From social gatherings to corporate events, we deliver an unparalleled experience.
                    <br/>#VietnamByPingPong
                </p>
            </div>
            <div className="spacer-inner-1">
            </div>
            <div className="container-fluid text-center image">
                <div className="row">
                  <div className="col-4 item-1">
                    <a href="" ><img src="assets/boston-seaport-place-spin-pingpong-interior-1780x1190.jpg" alt=""/></a>
                    <p>HANOI</p>
                  </div>
                  <div className="col-4 item-2">
                    <a href=""><img src="assets/Meet-SPIN-Header.jpg" alt=""/></a>
                    <p>HO CHI MINH</p>
                  </div>
                  <div className="col-4 item-3">
                    <a href=""><img src="assets/reserver.jpg" alt=""/></a>
                    <p>DA NANG</p>
                  </div>
                </div>
                <div className="row">
                    <div className="col-4 item-4">
                      <a href=""><img src="assets/hanoi.jpg" alt=""/></a>
                      <p>HOI AN</p>
                    </div>
                    <div className="col-4 item-5">
                      <a href=""><img src="assets/phialden.jpg" alt=""/></a>
                      <p>HUE</p>
                    </div>
                    <div className="col-4 item-6">
                      <a href=""><img src="assets/newyork.jpg" alt=""/></a>
                      <p>THAI BINH</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4 item-7">
                      <a href=""><img src="assets/hcm.avif" alt=""/></a>
                      <p>HAI DUONG</p>
                    </div>
                    <div className="col-4 item-8">
                      <a href=""><img src="assets/danang.jpg" alt=""/></a>
                      <p>HAI PHONG</p>
                    </div>
                    <div className="col-4 item-9">
                      <a href=""><img src="assets/hoian.jpg" alt=""/></a>
                      <p>HA LONG</p>
                    </div>
                  </div>
            </div>
            <div className="spacer-inner"></div>
            <div className="spacer-inner"></div>
            <div className="block-3">
                <div className="background-content">
                    <div className="inside-content">
                        <h3>CAREER AT PANCAKE</h3>
                        <p>We are always on the lookout for creative dreamers and go getters to join the PANCAKE family. Enjoy perks like unlimited ping pong, celebrity ping pong battles,
                             and the occasional dance-off (participation optional).</p>
                             <form action="Hiring.html">
                                <button className="btn-party about-btn" type="submit">VISIT CAREER PAGE</button>
                            </form>
                    </div>
                </div>
            </div>
            <div className="spacer-inner"></div>

            <div className="block-4">
                <div className="for-page">
                    <div className="page-1"><div className="background-content-block-4">
                        <div className="inside-content-block-4">
                            <h3>RESERVE YOUR TABLE</h3>
                            <p>Ping pong table reservations available for up to 10 guests. Advanced reservation pricing and exclusive options available.</p>
                            <form action="booking.html">
                                <button className="btn-party about-btn" type="submit">RESERVE NOW</button>
                            </form>
                        </div>
                    </div>
                </div>
                    <div className="page-2"></div>
                </div>
            </div>
            <div className="spacer-inner"></div>

            <div className="block-5">
                <div className="background-content">
                    <div className="inside-content">
                        <h3>OUR KITCHEN</h3>
                        <p>Our menu will surprise and delight while providing you with the perfect fuel to pong the night away.</p>
                        <form action="kitchen.html">
                            <button className="btn-party about-btn" type="submit">RESERVE NOW</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="spacer-inner"></div>

            <div className="block-4">
                <div className="for-page">
                    <div className="page-1"><div className="background-content-block-4">
                        <div className="inside-content-block-4">
                            <h3>GIVE THE GIFT OF PONG
                            </h3>
                            <p>Dear person who always waits last minute to find the perfect unique gift for anyone during the Holidays
                                . We got your back (and your forehand)! -PANCAKE</p>
                            <form action="">
                                <button className="btn-party about-btn" type="submit">PURCHASE</button>
                            </form>
                        </div>
                    </div>
                </div>
                    <div className="page-2-2"></div>
                </div>
            </div>

            <div className="spacer-inner"></div>

            <div className="block-6">
                <div className="background-content">
                    <div className="inside-content">
                        <h3>WE ARE PANCAKE</h3>
                        <p>Our story began with a series of legendary ping pong parties in the Tribeca loft hosted
                             by Jonathan Bricklin and Franck Raharinosy.</p>
                        <form action="au-bou.html">
                            <button className="btn-party about-btn" type="submit">ABOUT US</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className="spacer-inner"></div>

        <footer className="mt-5 bg-custom">
            <div className="container ">
                <div className="row py-5">
                    <div className="col-4 d-flex flex-column align-items-end justify-content-center text-end">
                        <h2 className="text-uppercase">
                            join our<br/>mailing list
                        </h2>
                    </div>
                    <div className="col-8 d-flex align-items-center pr-3">
                        <form className="w-75">
                            <div className="input-group">
                                <input type="email" className="form-control text-uppercase no-border" placeholder="your email address" aria-label="Email Address"/>
                                <button className="btn btn-custom text-uppercase no-border ms-2" type="submit">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6 d-flex flex-column align-items-center"> 
                        <p className="lead text-uppercase">connect</p>
                        <div className="social-links">
                            <a href="#" className="social-link">
                                <img src="assets/contactus/instagram.svg" alt="Instagram"/>
                                <span className="social-text">Instagram</span>
                            </a>
                            <a href="#" className="social-link">
                                <img src="assets/contactus/facebook.svg" alt="Facebook"/>
                                <span className="social-text">Facebook</span>
                            </a>
                            <a href="#" className="social-link">
                                <img src="assets/contactus/twitter.svg" alt="Twitter"/>
                                <span className="social-text">Twitter</span>
                            </a>
                            <a href="#" className="social-link">
                                <img src="assets/contactus/youtube.svg" alt="YouTube" />
                                <span className="social-text">YouTube</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-6 d-flex flex-column align-items-center"> 
                        <p className="lead text-uppercase">more about us</p>
                        <div className="social-links">
                            <a href="faq2.html" className="social-link">
                                <i className="bi bi-question-circle-fill"></i>
                                <span className="social-text">FAQ'S</span>
                            </a>
                            <a href="au-bou.html" className="social-link">
                                <i className="bi bi-info-circle-fill"></i>
                                <span className="social-text text-uppercase">about us</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</div>
  );
}





export default App;
