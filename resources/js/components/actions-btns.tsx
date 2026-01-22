import { router } from "@inertiajs/react"
import { useRoute } from '../../../vendor/tightenco/ziggy'
import toast from "react-hot-toast"

import Trash from "./trash-icon"

import type { Booking } from "@/types/booking"

type pageProps = {
    booking: Booking
    onSuccess: () => void
}

export default function ActionBtns({booking, onSuccess}:pageProps) {
    const route = useRoute();

    const handleCancel = (bookingId: number) => {
        router.put(
            route('booking.update.status', {booking: bookingId}),
            {
                status: 'cancelled'
            },
            {
                onSuccess: () => {
                    onSuccess()
                    toast.success('Booking has been cancelled!');
                }
            }
        )
    }

    const handleComplete = (bookingId: number) => {
        router.put(
            route('booking.update.status', {booking: bookingId}),
            {
                status: 'completed'
            },
            {
                onSuccess: () => {
                    onSuccess()
                    toast.success('Booking has been completed');
                }
            }
        )
    }

    const handleDelete = (bookingId: number) => {
        router.delete(route('bookings.destroy', {booking: bookingId}), {
            onSuccess: () => {
                onSuccess()
                toast.success('Booking deleted!');
            }
        })
    }

    return (
        <div className="text-sm">
                <div
                    className={`${booking.status === 'pending' ? 'flex justify-between items-center' : 'flex justify-end mt-2'}`}
                >
                    <div className="flex justify-end">
                        <button
                            onClick={() => handleDelete(booking.id)}
                        >
                            <Trash />
                        </button>
                    </div>

                    <div
                        className={`flex gap-2
                            ${booking.status === 'completed' || booking.status === 'cancelled' ? 'hidden' : 'block'}
                        `}
                    >
                        <button
                            onClick={() => handleCancel(booking.id)}
                            className="px-4 py-2 transition-all duration-300 hover:text-red-700 hover:cursor-pointer"
                        >
                            Cancel Booking
                        </button>

                        <button
                            onClick={() => handleComplete(booking.id)}
                            className="bg-green-600 text-white px-4 py-2 rounded transition-all duration-300 hover:bg-green-700 hover:cursor-pointer"
                        >
                            Complete
                        </button>
                    </div>
                </div>

        </div>
    )
}
