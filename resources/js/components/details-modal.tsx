import type { Booking } from "@/types/booking"
import ModalHeader from "./modal-header"
import ActionBtns from "./actions-btns"

import type { Auth } from "@/types/booking"

type pageProps = {
    booking: Booking
    openModal: boolean;
    onClose: () => void
    formatDate: (date: string | null) => string
    formatTime: (time: string | null) => string
    statusClasses: Record<string, string>
    onSuccess: () => void
} & Auth

export default function DetailsModals({openModal, booking, onClose, auth, formatDate, formatTime, statusClasses, onSuccess}:pageProps) {
    if(!booking || !openModal) return null

    return (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center p-4 z-500">
            <div className="bg-slate-100 rounded-lg max-w-4xl w-full flex relative px-5 py-5 gap-5">
                {/* Left side */}
                <div className="w-1/2">
                    <img
                        src='/DestinationPlaceholder/Maldives.jpg'
                        alt="Maldives"
                        className="rounded-md"
                    />
                </div>

                {/* Right side */}
                <div className="w-1/2">
                    <ModalHeader onClose={onClose} />

                    <div className="mt-10 flex flex-col relative h-[62vh]">
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center border-b pb-2">
                                <p className="text-xs text-gray-500">Name</p>
                                <p className="text-sm font">{auth.user?.name}</p>
                            </div>

                            <div className="flex justify-between items-center border-b pb-2">
                                <p className="text-xs text-gray-500">Booking Title</p>
                                <p className="text-sm">{booking.booking_title}</p>
                            </div>

                            <div className="flex justify-between items-center border-b pb-2">
                                <p className="text-xs text-gray-500">Booking Date & Time</p>
                                <p className="text-sm">{formatDate(booking.booking_date)} at {formatTime(booking.booking_time)}</p>
                            </div>

                            <div className="flex justify-between items-center border-b pb-2">
                                <p className="text-xs text-gray-500">Location</p>
                                <p className="text-sm">Maldives</p>
                            </div>

                            <div className="flex justify-between items-center border-b pb-2">
                                <p className="text-xs text-gray-500">Status</p>
                                <p
                                    className={`capitalize text-xs inline px-2 py-1 font-bold ${statusClasses[booking.status] ?? ''}`}
                                    >
                                        {booking.status}
                                    </p>
                            </div>

                            <div className="flex flex-col gap-2 ">
                                <p className="text-xs text-gray-500">Booking Notes</p>
                                <p className="text-sm border h-46 p-2 rounded overflow-y-auto">{booking.notes}</p>
                            </div>
                        </div>

                        <div
                            // className="absolute bottom-0 right-0"
                            className={`
                                ${booking.status === 'pending' ? 'mt-2' : 'items-center mt-2'}
                            `}
                        >
                            <ActionBtns
                                booking={booking}
                                onSuccess={onSuccess}
                            />
                        </div>
                    </div>
                    {/*
                    <div className="mt-5 flex flex-col gap-3">

                        <div>
                            <p className="text-sm font-medium mb-1">Name</p>
                            <div className="bg-gray-200 border-l-4 border-black rounded p-3">
                                <p>{auth.user?.name}</p>
                            </div>
                        </div>


                        <div>
                            <p className="text-sm font-medium mb-1">Booking Title</p>
                            <div className="bg-gray-200 border-l-4 border-black rounded p-3">
                                <p>{booking.booking_title}</p>
                            </div>
                        </div>


                        <div>
                            <p className="text-sm font-medium mb-1">Booking Date & Time</p>
                            <div className="bg-gray-200 border-l-4 border-black rounded p-3">
                                <p>{formatDate(booking.booking_date)} at {formatTime(booking.booking_time)}</p>
                            </div>
                        </div>


                        <div>
                            <p className="text-sm font-medium mb-1">Status</p>
                            <div className="bg-gray-200 border-l-4 border-black rounded p-3">
                                <p
                                    className={`capitalize text-xs inline px-2 py-1 font-bold ${statusClasses[booking.status] ?? ''}`}
                                >
                                    {booking.status}
                                </p>
                            </div>
                        </div>


                        <div>
                            <p className="text-sm font-medium mb-1">Notes</p>
                            <div className="bg-gray-200 border-l-4 border-black rounded p-3">
                                <p>{booking.notes}</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
