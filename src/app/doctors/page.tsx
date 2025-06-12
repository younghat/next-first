import Image from 'next/image';
import { Metadata } from "next";
export const metadata :Metadata= {
  title: {
   absolute:"Doctors"
  },
}

export default function HomePage() {
  return (
    <>
      
      {/* Doctors Section */}
     <div className="doctores_section" style={{ marginTop: 100, marginBottom: 100 }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="doctores_taital">Our Doctors</h1>
            </div>
          </div>
          <div className="row">
            {[1, 2, 3].map(i => (
              <div className="col-md-4" key={i}>
                <div className="doctores_box">
                  <div className="image_1">
                    <Image src={`/images/img-${i}.png`} alt={`Doctor ${i}`} width={300} height={300} />
                  </div>
                  <h4 className="humour_text">Doctor {i} <br /><span className="mbbs_text">MBBS</span></h4>
                  <div className="social_icon">
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook" /></a></li>
                      <li><a href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                      <li><a href="#"><i className="fa fa-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
