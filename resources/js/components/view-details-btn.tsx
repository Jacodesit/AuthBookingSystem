import { useState } from "react";

import type { Booking } from "@/types/booking";

import DetailsModals from "./details-modal";
import EyeIcon from "./eye-icon";

import type { Auth } from "@/types/booking";

type pageProps = {
    booking: Booking
    formatDate: (date: string | null) => string
    formatTime: (time: string | null) => string
    statusClasses: Record<string, string>
} & Auth

export default function ViewDetailsBtn({booking, auth, formatDate, formatTime, statusClasses}:pageProps) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <button
                onClick={() => setOpenModal(true)}
                className="transition-all duration-300 hover:cursor-pointer"
            >
                <EyeIcon />
            </button>

            <DetailsModals
                booking={booking}
                openModal={openModal}
                auth={auth}
                onClose={() => setOpenModal(false)}
                formatDate={formatDate}
                formatTime={formatTime}
                statusClasses={statusClasses}
            />
        </div>

    )
}
