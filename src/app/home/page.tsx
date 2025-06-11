


import { Metadata } from "next";
import HomePageComponent from './homepage';


export const metadata :Metadata= {
  title: {
   absolute:"Home"
  },
}


export default function HomePage() {
  return (
    <>
      

      {/* Appointment Section */}
      <HomePageComponent/>

    
    </>
  );
}
