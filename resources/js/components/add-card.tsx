import { useState } from "react";

import CalendarIcon from "@/components/calendar-icon";
import Arrow from "@/components/arrow-icon";

import AddBookingModal from "./add-modal";

type pageProps = {
    headline1: string
    subtext1: string
    onSuccess: () => void
}

export default function AddCard({headline1, subtext1}:pageProps) {
    const [openModal, setOpenModal] = useState(false);

    const handleSuccess = () => {
        setOpenModal(false);
    }

    return (
        <div>
            <div
                onClick={() => setOpenModal(true)}
                className="h-full border p-10 lg:p-25 rounded-md hover:cursor-pointer transform transition-all duration-300 hover:border-[#DC143C] hover:-translate-y-3"
            >
                <div className="flex items-center flex-col gap-5 ">
                    <div className="bg-[#DC143C] text-white p-3 rounded">
                        <CalendarIcon />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex gap-1 items-center">
                            <h1 className="text-lg lg:text-2xl font-medium text-[#DC143C]">{headline1}</h1>
                            <Arrow />
                        </div>
                        <p className="text-xs lg:text-base text-center text-gray-500">{subtext1}</p>
                    </div>
                </div>
            </div>
            <AddBookingModal
                openModal={openModal}
                onClose={() => setOpenModal(false)}
                onSuccess={handleSuccess}
            />
        </div>
    )
}
