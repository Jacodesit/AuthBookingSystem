import { usePage } from "@inertiajs/react"

import TimeIcon from "./time-icon"
import CompletedIcon from "./completed-icon"
import CancelledIcon from "./cancelled-icon"
import TotalIcon from "./total-icon"

import type { BookingCounts } from "@/types/booking"

type pageProps = {
    counts: BookingCounts
}

export default function ProfileOverview() {
    const { counts } = usePage<pageProps>().props

    const total = Number(counts.pending_count) + Number(counts.completed_count) + Number(counts.cancelled_count);

    return (
        <div className="p-4 shadow rounded-md bg-[#FAFAFA] mt-5 flex flex-col gap-5 overflow-y-auto">
            <div className="border-l-4 border-[#DC143C] rounded">
                <p className="ml-1 font-semibold text-sm font-[Poppins]">Bookings Overview</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-2">
                <div className="border-l-4 border border-amber-500 p-3 lg:p-5 rounded-md flex gap-4  items-center">
                    <div className="flex justify-center items-center bg-amber-500 rounded p-1 lg:p-3 ">
                        <TimeIcon />
                    </div>
                    <div>
                        <p className="text-xs font-medium text-amber-500">Pending</p>
                        <p className="text-lg lg:text-3xl">{counts.pending_count}</p>
                    </div>
                </div>

                <div className="border-l-4 border border-green-500 p-3 lg:p-5 rounded-md flex gap-4 items-center">
                    <div className="flex justify-center items-center bg-green-500 rounded p-1 lg:p-3">
                        <CompletedIcon />
                    </div>
                    <div>
                        <p className="text-xs font-medium text-green-500">Completed</p>
                        <p className="text-lg lg:text-3xl">{counts.completed_count}</p>
                    </div>
                </div>

                <div className="border-l-4 border border-red-500 p-3 lg:p-5 rounded-md flex gap-4 items-center">
                    <div className="flex items-center justify-center bg-red-500 rounded p-1 lg:p-3">
                        <CancelledIcon />
                    </div>
                    <div>
                        <p className="text-xs font-medium text-red-500">Cancelled</p>
                        <p className="text-lg lg:text-3xl">{counts.cancelled_count}</p>
                    </div>
                </div>

                <div className="border-l-4 border border-blue-500 p-3 lg:p-5 rounded-md flex gap-4 items-center">
                    <div className="flex items-center justify-center bg-blue-500 rounded p-1 lg:p-3">
                        <TotalIcon />
                    </div>
                    <div>
                        <p className="text-xs font-medium text-blue-500">Total</p>
                        <p className="text-lg lg:text-3xl">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
