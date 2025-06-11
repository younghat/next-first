
import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from './appointment';
export default function HomePageComponent() {
  

    return (
      <>
      {/* Banner Section */}
      <div className="banner_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="banner_taital">We care Of You</h1>
              <p className="banner_text">When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
              <div className="read_bt"><Link href="#">Read More</Link></div>
            </div>
          </div>
        </div>
      </div>
   <AppointmentForm/>
            {/* About Section */}
      <div className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="about_taital">About Hospital</h1>
              <p className="about_text">has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              <div className="about_bt"><a href="#">Read More</a></div>
            </div>
            <div className="col-md-6">
              <div className="about_img">
                <Image src="/images/about-img.png" alt="About" width={500} height={300} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Treatment Section */}
      <div className="treatment_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="treatment_taital">Hospital Treatment</h1>
            </div>
          </div>
          <div className="treatment_section_2">
            <div className="row">
              {[
                { id: 1, title: 'Nephrologist Care', text: 'alteration in some form, by injected humour, or randomised words which don\'t look even slightly e sure there isn\'t anything' },
                { id: 2, title: 'Eye Care', text: 'alteration in some form, by injected humour, or randomised words which don\'t look even' },
                { id: 3, title: 'Pediatrician Clinic', text: 'alteration in some form, by injected humour, or randomised words which don\'t look even' },
                { id: 4, title: 'Prenatal Care', text: 'alteration in some form, by injected humour, or randomised words which don\'t look even' }
              ].map(item => (
                <div className="col-lg-3 col-sm-6" key={item.id}>
                  <h1 className="number_text">0{item.id}</h1>
                  <h2 className="care_text">{item.title}</h2>
                  <p className="treatment_text_1">{item.text}</p>
                  <div className="readmore_bt"><a href="#">Read More</a></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Doctors Section */}
      <div className="doctores_section">
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

      {/* Testimonial Section */}
      <div className="testimonial_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="testimonial_taital">Our Testimonial</h1>
            </div>
          </div>
          <div className="customer_section_2">
            <div className="row">
              <div className="col-md-12">
                <div className="box_main">
                  <div className="customer_main">
                    <div className="customer_right">
                      <h3 className="customer_name">Morijorch <span className="quick_icon">
                        <Image src="/images/quick-icon.png" alt="quote" width={30} height={30} /></span></h3>
                      <p className="default_text">Default model text,</p>
                      <p className="enim_text">editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various editors now use Lorem Ipsum as their default model text.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact_section layout_padding">
        <div className="container-fluid">
          <div className="contact_section_2">
            <div className="row">
              <div className="col-md-6">
                <h1 className="contact_taital">Get In Touch</h1>
                <form action="">
                  <div className="mail_section_1">
                    <input type="text" className="mail_text" placeholder="Name" name="Name" />
                    <input type="text" className="mail_text" placeholder="Phone Number" name="Phone Number" />
                    <input type="text" className="mail_text" placeholder="Email" name="Email" />
                    <textarea className="massage-bt" placeholder="Message" rows={5} name="Message"></textarea>
                    <div className="send_bt"><a href="#">SEND</a></div>
                  </div>
                </form>
              </div>
              <div className="col-md-6 padding_left_15">
                <div className="map_main">
                  <div className="map-responsive">
                    <iframe
                      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France"
                      width="600"
                      height="600"
                      style={{ border: 0, width: '100%' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          </>
    )
}