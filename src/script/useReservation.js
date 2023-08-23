import {useState} from "react";


export function useReservation(){
    const [reservationStatus, setReservationStatus] = useState("reserve reserve-hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const reserveMenu = () => {
        if (!isMenuClicked) {
            setReservationStatus("reserve reserve-visible")
            setIsMenuClicked(true)
        } else {
            setReservationStatus("reserve reserve-hidden")
            setIsMenuClicked(false)
        }
    }
    return {reservationStatus, reserveMenu}
}