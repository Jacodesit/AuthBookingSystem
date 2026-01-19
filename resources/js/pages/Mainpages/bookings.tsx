import { usePage } from "@inertiajs/react"
import AuthLayout from "@/layouts/authenticated-layout"
// import { useRoute } from '../../../../vendor/tightenco/ziggy'

import CalendarIcon from "@/components/calendar-icon"
import EditButton from "@/components/edit-btn"
import ViewDetailsBtn from "@/components/view-details-btn"

import type { Booking } from "@/types/booking"
import type { Auth } from "@/types/booking"

type pageProps = {
    name: string
    bookings: Booking[]
    formatDate: (date: string | null) => string
    formatTime: (time: string | null) => string
} & Auth

export default function ViewBookings({name, auth}:pageProps) {
    const { bookings } = usePage<pageProps>().props
    // const route = useRoute();

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

    const statusClasses: Record<string, string> = {
        pending: 'text-amber-600 bg-amber-200 rounded',
        completed: 'text-green-600 bg-green-200 rounded',
        cancelled: 'text-red-600 bg-red-200 rounded'
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
                        className="shadow rounded-md flex bg-[#FAFAFA] p-2"
                    >
                        <div className="flex justify-center items-center px-6">
                            <CalendarIcon />
                        </div>
                        <div className="py-4 w-full pr-5">
                            <p className="text-lg font-medium font-[Poppins] mb-2">{booking.booking_title}</p>
                            <p className="text-xs">{formatDate(booking.booking_date)} at {formatTime(booking.booking_time)}</p>
                            <hr className="my-3" />
                            <div className="flex justify-between items-center">
                                <p className={`capitalize text-xs inline px-2 py-1 font-bold
                                    ${statusClasses[booking.status] ?? 'text-gray-600 bg-gray-300'}`}
                                >
                                    {booking.status}
                                </p>

                                <div className="flex gap-2">
                                    <ViewDetailsBtn
                                        booking={booking}
                                        auth={auth}
                                        formatDate={formatDate}
                                        formatTime={formatTime}
                                        statusClasses={statusClasses}
                                    />
                                    <EditButton />
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </AuthLayout>
    )
}
