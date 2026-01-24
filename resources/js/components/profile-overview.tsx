export default function ProfileOverview() {
    return (
        <div className="p-4 shadow rounded-md bg-[#FAFAFA] mt-5 flex flex-col gap-10">
            <div className="border-l-4 border-[#DC143C] rounded">
                <p className="ml-1 font-semibold text-sm font-[Poppins]">Bookings Overview</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="border-l-4 border border-amber-500 p-5 rounded">
                    <p>Pending</p>
                </div>

                <div className="border-l-4 border border-green-500 p-5 rounded">
                    <p>Completed</p>
                </div>

                <div className="border-l-4 border border-red-500 p-5 rounded">
                    <p>Cancelled</p>
                </div>

                <div className="border-l-4 border border-blue-500 p-5 rounded">
                    Total
                </div>
            </div>
        </div>
    )
}
