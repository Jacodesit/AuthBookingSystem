import BookingForm from "./add-booking-form"
import ModalHeader from "./modal-header"

type pageProps = {
    openModal: boolean
    onClose: () => void;
    onSuccess: () => void
}

export default function AddBookingModal({openModal, onClose, onSuccess}:pageProps) {
    if(!openModal) return null

    return (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center p-4 z-500">
            <div className="bg-slate-100 rounded-lg max-w-xl w-full flex flex-col relative px-8 py-5">
                <ModalHeader onClose={onClose} />
                <BookingForm
                    onSuccess={onSuccess}
                />
            </div>
        </div>
    )
}
