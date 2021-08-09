import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Phone, Room, Email } from '@material-ui/icons'
import { Link } from 'react-router-dom';
import './index.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <footer>
          <div className="main-footer">
        <img src={require("../../static/images/landing-leocorn/3-fot.png")} className="first-image" alt="" />
        <img src={require("../../static/images/landing-leocorn/1-fot.png")} className="first-images" alt="" />
        <img src={require("../../static/images/landing-leocorn/2-fot.png")} className="first-imagess" alt="" />
          <div className="auto-container main-fottt">
          <div className="row">
            <div className="col-lg-6">
              <div className="community">
                <h1>Join the communty</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="socials">
              <Link className='linkss' to='#'><img src={require("../../static/images/landing-leocorn/1-fot1.png")} alt="" /></Link>
              <Link className='linkss' to='#'><img src={require("../../static/images/landing-leocorn/2-fot-1.png")} alt="" /></Link>
              <Link className='linkss' to='#'><img src={require("../../static/images/landing-leocorn/3-fot-1.png")} alt="" /></Link>
              <Link className='linkss' to='#'><img src={require("../../static/images/landing-leocorn/4-fot-1.png")} alt="" /></Link>
              <Link className='linkss' to='#'><img src={require("../../static/images/landing-leocorn/5-fot-1.png")} alt="" /></Link>
              </div>
            </div>
          </div>
          </div>
       
        </div>
        <div className="all-right-reserved">
          <div className="auto-container">
            <div className="main-terms">
            <p className="main-termss">© 2021 LEOCORN, All Right Reserved</p>
          <p className="main-term">Term & Conditions</p>
            </div>
          </div>
        </div>          
            </footer>
        );
    }
}

export default Footer;