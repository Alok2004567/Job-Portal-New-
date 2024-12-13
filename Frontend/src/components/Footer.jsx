import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
    FaSquareXTwitter,
    FaSquareInstagram,
    FaYoutube,
    FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
    const { isAuthenticated } = useSelector((state) => state.user);
    return (
        <>
            <footer>
                <div>
                    <img src="/logo.png" alt="logo" />
                </div>
                <div>
                    <h4>Support</h4>
                    <ul>
                        <li>House no. 18, Devi singh Lane, Guwahati, Assam</li>
                        <li>alokpurbey2004@gmail.com</li>
                        <li>+91 8099620616</li>
                    </ul>
                </div>

                <div>
                    <h4>Quick Links</h4>
                    <ul>
                        <li to={"/"}>
                            <Link>Home</Link>
                        </li>
                        <li to={"/jobs"}>
                            <Link>Jobs</Link>
                        </li>
                        {isAuthenticated && (
                            <li>
                                <Link to={"/dashboard"}>Dashboard</Link>
                            </li>
                        )}
                    </ul>
                </div>
                <div>
                    <h4>Follow Us</h4>
                    <ul>
                        <li>
                            <Link to={"/"}>
                                <span>
                                    <FaSquareXTwitter />
                                </span>
                                <span>Twitter (X)</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <span>
                                    <FaSquareInstagram />
                                </span>
                                <span>Instagram</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <span>
                                    <FaYoutube />
                                </span>
                                <span>Youtube</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/https://www.linkedin.com/in/alok-purbey-0b149b256/"}>
                                <span>
                                    <FaLinkedin />
                                </span>
                                <span>LinkedIn</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </footer>
            <div className="copyright">
                &copy; CopyRight 2024. All Rights Reserved By AlokPurbey
            </div>
        </>
    );
};

export default Footer;
