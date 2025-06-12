import { Metadata } from "next";
import TripComponent from "./tripspage";
export const metadata :Metadata= {
  title: {
   absolute:"Trips"
  },
}
export default function TripPage() {

    return (
        <>
        <TripComponent/>
        </>
    )
}