import React from 'react';
import {BsInstagram} from "react-icons/bs";
import {FiFacebook, FiTwitter} from "react-icons/fi";
import icon1 from "../img/icon1.svg"
import icon2 from "../img/icon2.svg"
import icon3 from "../img/icon3.svg"
import icon4 from "../img/icon4.svg"
import icon5 from "../img/icon5.svg"

const Footer = () => {
    return (
        <div id="Footer" className="bg-[#191919] py-10">
            <div className="container">
                <div className="flex items-start justify-around">
                    <div className="footer-logo"><h1 className="text-4xl font-semibold text-white ">Castaway</h1>
                        <div className="footer-icons flex py-3"><h2 className="text-2xl text-white"><BsInstagram/></h2>
                            <h2 className="text-2xl text-white mx-2"><FiTwitter/></h2>                            <h2
                                className="text-2xl text-white"><FiFacebook/></h2></div>
                    </div>
                    <div className=""><p className="text-white">Home</p>                        <p
                        className="text-white">About</p>                        <p className="text-white">Episodes</p>
                        <p className="text-white">Contact</p></div>
                    <div className=""><p className="text-white">Style Guide</p>                        <p
                        className="text-white">Instructions</p>                        <p
                        className="text-white">Changelog</p>                        <p className="text-white">Credit</p>
                        <p className="text-white">Powered by Webflow</p>                        <p
                            className="text-white">Licenses</p></div>
                    <div className="flex"><img src={icon1} alt=""/>
                        <img src={icon2} alt="" className="mx-2"/>
                        <img src={icon3}
                                                                                                                alt=""/>


                        <img src={icon4} alt="" className="mx-2"/> <img src={icon5} alt=""/></div>
                </div>
            </div>
        </div>);
};
export default Footer;