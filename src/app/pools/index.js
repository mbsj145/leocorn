import EventBus from "eventing-bus";
import { connect } from "react-redux";
import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { Send, CheckCircle, Info, Error, Done, Facebook, Twitter, Instagram, LinkedIn, LiveTvRounded } from '@material-ui/icons';
import OwlCarousel from 'react-owl-carousel';
import './index.css';
import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Pool extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    };



    render() {

        const owl_option = {
            margin: 30,
            nav: true,
            dots: true,
            dotsEach: true,
            loop: true,
            infinite: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                700: {
                    items: 3,
                },
                1000: {
                    items: 3,
                }
            },
        };



        return (
            <div className='landing-nft'>

                <Navbar />

                <section className="header-section main-pool">
                    <img src={require("../../static/images/landing-leocorn/background-main-head.png")} className="main-heads-one" alt="" />
                    <div className="auto-container">
                        <div className="row main-pool-page">
                            <div className="col-xl-5 col-lg-6 col-md-12 col-12">
                                <div className="main-left-side">
                                    <div className="upper">
                                        <div className="left-inner">
                                            <div className="image">
                                                <img src={require("../../static/images/landing-leocorn/pool-page.png")} alt="" />
                                            </div>
                                            <div className="name-socials">
                                                <h1>Fanadise<br></br><span>$FAN</span></h1>
                                                <div className="socials">
                                                    <Link className='linkss' to='#'><img src={require("../../static/images/landing-leocorn/pool-page1.png")} alt="" /></Link>
                                                    <Link className='linkss' to='#'><img src={require("../../static/images/landing-leocorn/pool-page2.png")} alt="" /></Link>
                                                    <Link className='linkss' to='#'><img src={require("../../static/images/landing-leocorn/pool-page3.png")} alt="" /></Link>
                                                    <Link className='linkss' to='#'><img src={require("../../static/images/landing-leocorn/pool-page4.png")} alt="" /></Link>
                                                    <Link className='linkss' to='#'><img src={require("../../static/images/landing-leocorn/pool-page5.png")} alt="" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="right-inner">
                                            <button type="button">Opened</button>
                                        </div>
                                    </div>
                                    <div className="para">
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia.</p>
                                    </div>
                                    <div className="approved">
                                        <button type="button">Approve</button>
                                        <button type="button">Join Pool</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-12 offset-xl-1   offset-0">
                                <div className="main-right-side">

                                    <div className="main-details">
                                        <div className="inner-heading">
                                        <div className="inne-one">
                                        <p>Your Balance</p>
                                        <p className="secondrow">0.0000 BUSD</p>
                                        </div>
                                        <div className="inne-one">
                                        <p>Your approved amount:</p>
                                        <p className="secondrow">0.0000 BUSD</p>
                                        </div>
                                        <div className="inne-one">
                                        <p>Your Tier</p>
                                        <p className="secondrow">--</p>
                                        </div>
                                        </div>
                                    </div>

                                    <hr className="main-hr-line"></hr>

                                    <div className="main-details-2nd">
                                        <div className="inner-heading">
                                        <div className="inne-one">
                                        <p>Swapped</p>
                                        <p className="secondrow">0.0000 BUSD</p>
                                        </div>
                                        <div className="inne-one">
                                        <p>Remaining Allocation:</p>
                                        <p className="secondrow">0.0000 BUSD</p>
                                        </div>
                                      
                                        </div>
                                    </div>


                                    <div className="progress-baar">
                                        <div className="percentage">
                                            <p className="one">Progress</p>
                                            <p>95%</p>
                                        </div>
                                        <div class="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="percent">
                                            <p className="one">Participants <span>153</span></p>
                                            <p>195,089/200,000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />



            </div>
        );
    }
}


const mapDispatchToProps = {
};

const mapStateToProps = ({ }) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Pool);