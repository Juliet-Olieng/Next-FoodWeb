import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest, faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="bg-red-200 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-500">Foodish</h3>
            <p>Continue Foodish 2023 all rights reserved</p>
            <h3 className="text-xl font-semibold mt-6 text-red-500">Follow Us On</h3>
            {/* <div className="flex space-x-4 mt-2">
              <FontAwesomeIcon className="text-white text-2xl" icon={faPinterest} />
              <FontAwesomeIcon className="text-white text-2xl" icon={faInstagram} />
              <FontAwesomeIcon className="text-white text-2xl" icon={faTwitter} />
              <FontAwesomeIcon className="text-white text-2xl" icon={faFacebook} />
            </div> */}
            <div className="flex space-x-4 mt-2">
  <FontAwesomeIcon className="text-black" icon={faPinterest} style={{ fontSize: '50px' }} />
  <FontAwesomeIcon className="text-black" icon={faInstagram} style={{ fontSize: '1.5rem' }} />
  <FontAwesomeIcon className="text-black" icon={faTwitter} style={{ fontSize: '1.5rem' }} />
  <FontAwesomeIcon className="text-black" icon={faFacebook} style={{ fontSize: '1.5rem' }} />
</div>

          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-black" >Menu</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Offers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Menu</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Quality</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Make a Choice</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Salad With Vegetable</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Fast Delivery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Subscribe</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">+123 456 789</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Explore</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">info@foodish.com</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Salad With Vegetable</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">1245, New York, USA</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Subscribe</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
