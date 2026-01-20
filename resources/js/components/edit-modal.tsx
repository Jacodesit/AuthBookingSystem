import EditModalHeader from "./edit-modal-header";
import EditForm from "./edit-form";

import type { Booking } from "@/types/booking"
import type { Auth } from "@/types/booking"

type pageProps = {
    booking: Booking
    openModal: boolean
    onClose: () => void
    onSuccess: () => void
} & Auth;

export default function EditModal({booking, openModal, onClose, onSuccess, auth}:pageProps) {
    if(!booking || !openModal) return null

    return (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center p-4 z-500">
            <div className="bg-slate-100 rounded-lg max-w-xl w-full  relative px-5 py-5 gap-5">
                <EditModalHeader onClose={onClose} />
                <EditForm
                    booking={booking}
                    auth={auth}
                    onSuccess={onSuccess}
                />
            </div>
        </div>
    )
}
