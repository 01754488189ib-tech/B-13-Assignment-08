import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-6">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-gray-900 tracking-tight">
                            Skill<span className="text-blue-600">Sphere</span>
                        </h2>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Your One-Stop Destination for Skill Development and Learning.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="hover:text-blue-600">Terms & Conditions</li>
                            <li className="hover:text-blue-600">Privacy Policy</li>
                            <li className="hover:text-blue-600">Contact Us</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center md:items-end">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">Get In Touch</h3>
                        <div className="flex flex-col items-center md:items-end space-y-2 text-sm text-gray-600 mb-4">
                            <span className="flex items-center gap-2">01754-488189 <FaPhoneAlt className="text-blue-600" /></span>
                            <span className="flex items-center gap-2">01754488189ib@gmail.com <FaEnvelope className="text-blue-600" /></span>
                        </div>
                        <div className="flex gap-4">
                            <a className="text-xl text-gray-400 hover:text-blue-600 transition"><FaFacebook /></a>
                            <a  className="text-xl text-gray-400 hover:text-blue-400 transition"><FaTwitter /></a>
                            <a className="text-xl text-gray-400 hover:text-blue-700 transition"><FaLinkedin /></a>
                            <a className="text-xl text-gray-400 hover:text-gray-900 transition"><FaGithub /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-200 text-center">
                    <p className="text-xs text-gray-400 font-medium tracking-wide">
                        © {new Date().getFullYear()} SKILLSPHERE ACADEMY. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;