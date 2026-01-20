import { Edit } from "lucide-react"
import { CircleX } from "lucide-react"

type pageProps = {
    onClose: () => void
}

export default function EditModalHeader({onClose}:pageProps) {
    const headline = 'Edit Booking'
    const subtext = 'Update your booking details and save changes instantly.'
    return (
        <header className="">
            <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center">
                    <div className="bg-black p-3 inline-block rounded text-white">
                        <Edit />
                    </div>
                    <button
                        onClick={onClose}
                        className="hover:cursor-pointer"
                    >
                        <CircleX />
                    </button>
                </div>

                <div className="flex flex-col">
                    <h1 className="text-2xl font-semibold font-[Poppins]">{headline}</h1>
                    <p className="text-gray-500 text-sm">{subtext}</p>
                </div>
            </div>
        </header>
    )
}
