import { usePage } from "@inertiajs/react"
import { useState } from "react"

import AuthLayout from "@/layouts/authenticated-layout"
// import { useRoute } from '../../../../vendor/tightenco/ziggy'

import CalendarIcon from "@/components/calendar-icon"
import EditButton from "@/components/edit-btn"
import ViewDetailsBtn from "@/components/view-details-btn"
import PlusIcon from "@/components/plus-icon"
import AddBookingModal from "@/components/add-modal"

import type { Booking } from "@/types/booking"
import type { Auth } from "@/types/booking"

type pageProps = {
    name: string
    bookings: Booking[]
    formatDate: (date: string | null) => string
    formatTime: (time: string | null) => string
    onSuccess: () => void
} & Auth

export default function ViewBookings({name, auth, onSuccess}:pageProps) {
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

    const [openModal, setOpenModal] = useState(false)

    const handleSuccess = () => {
        setOpenModal(false);
    }

    const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'completed' | 'cancelled'>('all');

    const filteredStatus = bookings.filter(booking => {
        if(statusFilter === 'all') return true;
        return booking.status === statusFilter;
    })

    return (
        <AuthLayout name={name}>
            <div className="mb-5 flex justify-between items-center">
                <div className="flex flex-col gap-1 text-3xl">
                    <p className="font-[Poppins] text-[#DC143C] font-semibold">{headline}</p>
                    <p className="text-sm text-gray-500">{subtext}</p>
                </div>

                <div>
                    <button
                        onClick={() => setOpenModal(true)}
                        className="flex items-center gap-2 px-5 py-2 border rounded transition-all duration-300 hover:bg-black hover:text-white hover:cursor-pointer"
                    >
                        <PlusIcon />
                        Add booking
                    </button>
                </div>
            </div>

            <div className="flex gap-2 mb-5 justify-end">
                {/* All */}
                <button
                    onClick={() => setStatusFilter('all')}
                    className={`px-5 py-1 rounded transition-all duration-300 hover:cursor-pointer text-xs ${statusFilter === 'all' ?
                        'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-blue-400 hover:text-white'
                    }`}
                >
                    All
                </button>

                {/* Pending */}
                <button
                    onClick={() => setStatusFilter('pending')}
                    className={`px-5 py-1 rounded transition-all duration-300 hover:cursor-pointer text-xs ${statusFilter === 'pending' ?
                        'bg-amber-100 text-amber-700' : 'bg-gray-200 hover:bg-amber-400 hover:text-white'
                    }`}
                >
                    Pending
                </button>

                {/* Completed */}
                <button
                    onClick={() => setStatusFilter('completed')}
                    className={`px-5 py-1 rounded transition-all duration-300 hover:cursor-pointer text-xs ${statusFilter === 'completed' ?
                        'bg-green-100 text-green-700' : 'bg-gray-200 hover:bg-green-400 hover:text-white'
                    }`}
                >
                    Completed
                </button>

                {/* Cancelled */}
                <button
                    onClick={() => setStatusFilter('cancelled')}
                    className={`px-5 py-1 rounded transition-all duration-300 hover:cursor-pointer text-xs ${statusFilter === 'cancelled' ?
                        'bg-red-100 text-red-700' : 'bg-gray-200 hover:bg-red-400 hover:text-white'
                    }`}
                >
                    Cancelled
                </button>
            </div>

            <div>
                {bookings.length === 0 ?
                    <div className="h-96 flex items-center justify-center flex-col gap-5">
                        <img
                            src='/Empty/no-booking.svg'
                            alt="No-booking"
                            className="h-50 flex opacity-50"
                        />
                        <p className="text-gray-500 items-center text-sm">You dont have a booking yet!</p>
                    </div>
                    :
                    <div className="grid grid-cols-3 gap-3">
                        {filteredStatus.map(booking => (
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
                                                onSuccess={onSuccess}
                                            />
                                            <EditButton
                                                onSuccess={onSuccess}
                                                booking={booking}
                                                auth={auth}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
            <AddBookingModal
                openModal={openModal}
                onClose={() => setOpenModal(false)}
                onSuccess={handleSuccess}
            />
        </AuthLayout>
    )
}
