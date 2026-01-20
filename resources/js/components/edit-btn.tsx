import { useState } from "react";

import EditIcon from "./edit-icon";

import EditModal from "./edit-modal";

import type { Booking } from "@/types/booking";
import type { Auth } from "@/types/booking";

type pageProps = {
    booking: Booking
    onSuccess: () => void
} & Auth;

export default function EditButton({booking, auth}:pageProps) {
    const [openModal, setOpenModal] = useState(false)

    const handleSuccess = () => {
        setOpenModal(false)
    }

    return (
        <div
            className={`${booking.status !== 'pending' ? 'hidden' : 'block'}`}
        >
            <button
                onClick={() => setOpenModal(true)}
                className="transition-all duration-300 hover:cursor-pointer"
            >
                <EditIcon />
            </button>

            <EditModal
                booking={booking}
                auth={auth}
                openModal={openModal}
                onSuccess={handleSuccess}
                onClose={() => setOpenModal(false)}
            />
        </div>
    )
}
