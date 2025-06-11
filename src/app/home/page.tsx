


import { Metadata } from "next";
import Appointment from './homepage';


export const metadata :Metadata= {
  title: {
   absolute:"Home"
  },
}


export default function HomePage() {
  return (
    <>
      

      {/* Appointment Section */}
      <Appointment/>

    
    </>
  );
}
