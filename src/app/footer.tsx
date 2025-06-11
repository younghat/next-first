'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      {/* Footer Section */}
      <div className="footer_section">
        <div className="container">
          <div className="input_bt">
            <input type="text" className="mail_bt" placeholder="Enter Your Email" />
            <span className="subscribe_bt" id="basic-addon2"><a href="#">Subscribe</a></span>
          </div>
          <div className="footer_section_2">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <h3 className="footer_taital">Address</h3>
                <ul className="location_main">
                  <li><a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i><span className="padding_15">Making this the first true</span></a></li>
                  <li><a href="#"><i className="fa fa-phone" aria-hidden="true"></i><span className="padding_15">Call : +01 1234567890</span></a></li>
                  <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i><span className="padding_15">Email : demo@gmail.com</span></a></li>
                </ul>
                <div className="footer_social_icon">
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <h3 className="footer_taital">Useful Link</h3>
                <ul className="footer_menu">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/doctors">Doctors</Link></li>
                  <li><Link href="/news">News</Link></li>
                  <li><Link href="/treatment">Treatment</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                </ul>
              </div>
              <div className="col-lg-3 col-sm-6">
                <h3 className="footer_taital">Help & Support</h3>
                <p className="ipsum_text">Opposed to using 'Content here, content here', making it look like readable English.</p>
              </div>
              <div className="col-lg-3 col-sm-6">
                <h3 className="footer_taital">News</h3>
                <div className="dryfood_text">
                  <Image src="/images/img-4.png" alt="News 1" width={50} height={50} />
                  <span className="padding_15">Normal distribution</span>
                </div>
                <div className="dryfood_text">
                  <Image src="/images/img-5.png" alt="News 2" width={50} height={50} />
                  <span className="padding_15">Normal distribution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">2024 All Rights Reserved. Design by <a href="https://html.design">Free Html Templates</a></p>
        </div>
      </div>
    </>
  );
}
