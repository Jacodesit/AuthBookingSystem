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
            {booking.status === 'completed' || booking.status === 'cancelled' ?
                <div
                    className={`w-full p-3 rounded text-xs text-center
                        ${booking.status === 'cancelled' ? 'bg-red-200 border border-red-700 text-red-700 ' : '' }
                        ${booking.status === 'completed' ? 'bg-green-200 border border-green-700 text-green-700 ' : ''}
                    `}
                >
                    {booking.status === 'cancelled' ? <p>This booking cannot be completed because its already <span className="font-bold">{booking.status}</span></p> : ''}
                    {booking.status === 'completed' ? <p>This booking cannot be cancelled because its already <span className="font-bold">{booking.status}</span></p> : ''}
                </div>

                :
                <div
                    className='flex justify-between items-center'
                >

                    <button
                        onClick={() => handleDelete(booking.id)}
                    >
                        <Trash />
                    </button>

                    <div className="flex gap-2">
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
            }
        </div>
    )
}
