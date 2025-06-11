import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from "next";
export const metadata :Metadata= {
  title: {
   absolute:"Treatment"
  },
}

export default function HomePage() {
  return (
    <>
     
    

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

    </>
  );
}
