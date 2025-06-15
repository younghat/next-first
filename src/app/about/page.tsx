// app/about/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import aboutImg from '../images/about-img.png';
export const metadata :Metadata= {
  title: {
   absolute:"About"
  },
}
export default function AboutPage() {
  return (
    <div className="about_section layout_padding margim_90">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="about_taital">About Hospital</h1>
            <p className="about_text">
             has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
              making it look like readable English. Many desktop publishing packages and web page editors has a more-or-less
               normal distribution of letters, as o
            </p>
            <div className="about_bt"><a href="#">Read More</a></div>
          </div>
          <div className="col-md-6">
            <div className="about_img">
              <Image src={aboutImg} alt="About" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
