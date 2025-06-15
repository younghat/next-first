

import Image from 'next/image';
import Link from 'next/link';
import { getTripsItem } from '../lib/wordpress';
export default async function TripComponent() {
     const trip = await getTripsItem();
      
  return (
    <>
      
      {/* Trips Section */}
     <div className="doctores_section" style={{ marginTop: 100, marginBottom: 100 }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="doctores_taital">Our Trips</h1>
            </div>
          </div>
          <div className="row">
             {trip.map((item) => (
              <div className="col-md-4" key={item.ID}>
                <div className="doctores_box">
                  <div className="image_1 image_2" >
                        <Image
                        src={item.image}
                         alt={`Trip ${item.ID}`}
                            width={300}
                            height={300}
                        
                    />
                        </div>
                  <h4 className="humour_text"><Link href={`/trips/${item.title}`} className='humour_text'>{item.title}</Link></h4>
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
