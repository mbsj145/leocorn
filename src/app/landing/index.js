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

class Landing extends Component {
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

        <section className="header-section" style={{ backgroundImage: `url(${require("../../static/images/landing-leocorn/background-main.png")})` }}>
          <img src={require("../../static/images/landing-leocorn/background-main-head.png")} className="main-heads-one" alt="" />
          <div className="auto-container">
            <div className="main-head">
              <h1>LeoCorn Pools</h1>
              <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
              <button> <img src={require("../../static/images/landing-leocorn/button-mamin-head.png")} alt="" />Buy on PancakeSwap</button>
            </div>
          </div>
        </section>

        <section className="featured-pool">
          <div className="auto-container">
            <div className="row  ">
              <div className="searchbar">
                <h1>Featured Pools</h1>
                <div className="searchContainer">
                  <i class="fa fa-search" aria-hidden="true"></i>
                  <input className="searchBox" type="search" name="search" placeholder="Search Pool" />
                </div>
                <div className="main-slider ">
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                  <p>Show Eligible Pools only</p></div>
              </div>
            </div>

            <div className="row main-pool-featured">
              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                <div className=" card-main">
                  <div className="main-image">
                    <img src={require("../../static/images/landing-leocorn/cards.png")} alt="" />
                    <h1>Fanadise <br></br><span>$FAN</span></h1>
                    <button>Tier 2</button>
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
                    <div className="min-max">
                      <p className="one">Min: 0.1 BNB</p>
                      <p>Min: 0.1 BNB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                <div className=" card-main">
                  <div className="main-image">
                    <img src={require("../../static/images/landing-leocorn/cards.png")} alt="" />
                    <h1>Fanadise <br></br><span>$FAN</span></h1>
                    <button>Tier 2</button>
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
                    <div className="min-max">
                      <p className="one">Min: 0.1 BNB</p>
                      <p>Min: 0.1 BNB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                <div className=" card-main">
                  <div className="main-image">
                    <img src={require("../../static/images/landing-leocorn/cards.png")} alt="" />
                    <h1>Fanadise <br></br><span>$FAN</span></h1>
                    <button>Tier 2</button>
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
                    <div className="min-max">
                      <p className="one">Min: 0.1 BNB</p>
                      <p>Min: 0.1 BNB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                <div className=" card-main">
                  <div className="main-image">
                    <img src={require("../../static/images/landing-leocorn/cards.png")} alt="" />
                    <h1>Fanadise <br></br><span>$FAN</span></h1>
                    <button>Tier 2</button>
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
                    <div className="min-max">
                      <p className="one">Min: 0.1 BNB</p>
                      <p>Min: 0.1 BNB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section className="featured-pool-coming-soon">

          <div className="auto-container">
            <h1>Pools Coming Soon</h1>
            <div className="row main-pool-featured">
              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                <div className=" card-main">
                  <div className="main-image">
                    <img src={require("../../static/images/landing-leocorn/coming-soon.png")} alt="" />
                    <h1>PureFi <br></br><span>$UFI</span></h1>
                    <button>Tier 4</button>
                  </div>
                  <div className="calender">
                    <h1>Opens In</h1>
                    <div className="main-calender">
                      <h1>01 <br></br><span>DAYS</span></h1>
                      <h1>04 <br></br><span>HRS</span></h1>
                      <h1>18 <br></br><span>MIN</span></h1>
                      <h1>04 <br></br><span>SEC</span></h1>
                    </div>
                    <p>August 7, 2021 13:00:00 UTC</p>
                  </div>
                  <div className="progress-baar">
                    <div className="percentage">
                      <p className="one">Pending</p>
                      <p>--</p>
                    </div>
                    <div class="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="percent">
                      <p className="one">--</p>
                      <p>--</p>
                    </div>
                    <div className="min-max">
                      <p className="one">Min: 0.1 BNB</p>
                      <p>Min: 0.1 BNB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                <div className=" card-main">
                  <div className="main-image">
                    <img src={require("../../static/images/landing-leocorn/coming-soon.png")} alt="" />
                    <h1>PureFi <br></br><span>$UFI</span></h1>
                    <button>Tier 4</button>
                  </div>
                  <div className="calender">
                    <h1>Opens In</h1>
                    <div className="main-calender">
                      <h1>01 <br></br><span>DAYS</span></h1>
                      <h1>04 <br></br><span>HRS</span></h1>
                      <h1>18 <br></br><span>MIN</span></h1>
                      <h1>04 <br></br><span>SEC</span></h1>
                    </div>
                    <p>August 7, 2021 13:00:00 UTC</p>
                  </div>
                  <div className="progress-baar">
                    <div className="percentage">
                      <p className="one">Pending</p>
                      <p>--</p>
                    </div>
                    <div class="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="percent">
                      <p className="one">--</p>
                      <p>--</p>
                    </div>
                    <div className="min-max">
                      <p className="one">Min: 0.1 BNB</p>
                      <p>Min: 0.1 BNB</p>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                <div className=" card-main">
                  <div className="main-image">
                    <img src={require("../../static/images/landing-leocorn/coming-soon.png")} alt="" />
                    <h1>PureFi <br></br><span>$UFI</span></h1>
                    <button>Tier 4</button>
                  </div>
                  <div className="calender">
                    <h1>Opens In</h1>
                    <div className="main-calender">
                      <h1>01 <br></br><span>DAYS</span></h1>
                      <h1>04 <br></br><span>HRS</span></h1>
                      <h1>18 <br></br><span>MIN</span></h1>
                      <h1>04 <br></br><span>SEC</span></h1>
                    </div>
                    <p>August 7, 2021 13:00:00 UTC</p>
                  </div>
                  <div className="progress-baar">
                    <div className="percentage">
                      <p className="one">Pending</p>
                      <p>--</p>
                    </div>
                    <div class="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="percent">
                      <p className="one">--</p>
                      <p>--</p>
                    </div>
                    <div className="min-max">
                      <p className="one">Min: 0.1 BNB</p>
                      <p>Min: 0.1 BNB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                <div className=" card-main">
                  <div className="main-image">
                    <img src={require("../../static/images/landing-leocorn/coming-soon.png")} alt="" />
                    <h1>PureFi <br></br><span>$UFI</span></h1>
                    <button>Tier 4</button>
                  </div>
                  <div className="calender">
                    <h1>Opens In</h1>
                    <div className="main-calender">
                      <h1>01 <br></br><span>DAYS</span></h1>
                      <h1>04 <br></br><span>HRS</span></h1>
                      <h1>18 <br></br><span>MIN</span></h1>
                      <h1>04 <br></br><span>SEC</span></h1>
                    </div>
                    <p>August 7, 2021 13:00:00 UTC</p>
                  </div>
                  <div className="progress-baar">
                    <div className="percentage">
                      <p className="one">Pending</p>
                      <p>--</p>
                    </div>
                    <div class="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="percent">
                      <p className="one">--</p>
                      <p>--</p>
                    </div>
                    <div className="min-max">
                      <p className="one">Min: 0.1 BNB</p>
                      <p>Min: 0.1 BNB</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </section>

        <section className="featured-pool-closed">

          <div className="auto-container">
            <h1>Pools Closed</h1>
            <div className="row main-pool-featured">
              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                <div className=" card-main">
                  <div className="main-image">
                    <img src={require("../../static/images/landing-leocorn/card-closed.png")} alt="" />
                    <h1>Polker <br></br><span>$PKR</span></h1>
                    <button>Tier 1</button>
                  </div>
                  <div className="progress-baar">
                    <div className="percentage">
                      <p className="one">Progress</p>
                      <p>100%</p>
                    </div>
                    <div class="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="percent">
                      <p className="one">Participants <span>153</span></p>
                      <p>195,089/200,000</p>
                    </div>
                    <div className='button text-center'>
                      <button>closed</button>
                    </div>

                    <div className="min-max">
                      <p className="one">Min: 0.1 BNB</p>
                      <p>Min: 0.1 BNB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                <div className=" card-main">
                  <div className="main-image">
                    <img src={require("../../static/images/landing-leocorn/card-closed.png")} alt="" />
                    <h1>Polker <br></br><span>$PKR</span></h1>
                    <button>Tier 1</button>
                  </div>
                  <div className="progress-baar">
                    <div className="percentage">
                      <p className="one">Progress</p>
                      <p>100%</p>
                    </div>
                    <div class="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="percent">
                      <p className="one">Participants <span>153</span></p>
                      <p>195,089/200,000</p>
                    </div>
                    <div className='button text-center'>
                      <button>closed</button>
                    </div>

                    <div className="min-max">
                      <p className="one">Min: 0.1 BNB</p>
                      <p>Min: 0.1 BNB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                <div className=" card-main">
                  <div className="main-image">
                    <img src={require("../../static/images/landing-leocorn/card-closed.png")} alt="" />
                    <h1>Polker <br></br><span>$PKR</span></h1>
                    <button>Tier 1</button>
                  </div>
                  <div className="progress-baar">
                    <div className="percentage">
                      <p className="one">Progress</p>
                      <p>100%</p>
                    </div>
                    <div class="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="percent">
                      <p className="one">Participants <span>153</span></p>
                      <p>195,089/200,000</p>
                    </div>
                    <div className='button text-center'>
                      <button>closed</button>
                    </div>

                    <div className="min-max">
                      <p className="one">Min: 0.1 BNB</p>
                      <p>Min: 0.1 BNB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                <div className=" card-main">
                  <div className="main-image">
                    <img src={require("../../static/images/landing-leocorn/card-closed.png")} alt="" />
                    <h1>Polker <br></br><span>$PKR</span></h1>
                    <button>Tier 1</button>
                  </div>
                  <div className="progress-baar">
                    <div className="percentage">
                      <p className="one">Progress</p>
                      <p>100%</p>
                    </div>
                    <div class="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="percent">
                      <p className="one">Participants <span>153</span></p>
                      <p>195,089/200,000</p>
                    </div>
                    <div className='button text-center'>
                      <button>closed</button>
                    </div>

                    <div className="min-max">
                      <p className="one">Min: 0.1 BNB</p>
                      <p>Min: 0.1 BNB</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Landing);