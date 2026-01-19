import { usePage } from "@inertiajs/react"
import AuthLayout from "@/layouts/authenticated-layout"

import CalendarIcon from "@/components/calendar-icon"

import type { Booking } from "@/types/booking"

type pageProps = {
    name: string
    bookings: Booking[]
}

export default function ViewBookings({name}:pageProps) {
    const { bookings } = usePage<pageProps>().props

    const headline =  'Manage Your Bookings'
    const subtext = 'Check details, update schedules, or cancel with ease.'

    function formatDate(date: string | null) {
        if (!date) return '';
        return new Date(date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

    function formatTime(time: string | null) {
        if (!time) return '';
        return new Date(`1970-01-01T${time}`).toLocaleTimeString([], {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    }

    return (
        <AuthLayout name={name}>
            <div className="mb-10">
                <div className="flex items-center gap-1 text-3xl">
                    <p className="font-[Poppins] text-[#DC143C] font-semibold">{headline}</p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">{subtext}</p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
                {bookings.map(booking => (
                    <div
                        key={booking.id}
                        className="shadow rounded-md flex"
                    >
                        <div className="flex justify-center items-center px-6">
                            <CalendarIcon />
                        </div>
                        <div className="py-4 w-full pr-5">
                            <p className="text-lg font-medium font-[Poppins] mb-2">{booking.booking_title}</p>
                            <p className="text-xs">{formatDate(booking.booking_date)} at {formatTime(booking.booking_time)}</p>
                            <hr className="my-3" />
                            <p className="capitalize text-xs">{booking.status}</p>
                        </div>
                    </div>
                ))}
            </div>
        </AuthLayout>
    )
}
