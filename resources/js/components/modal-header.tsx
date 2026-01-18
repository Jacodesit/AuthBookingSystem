import { UserRoundPlus } from "lucide-react"
import { CircleX } from "lucide-react"
import { CalendarPlus } from "lucide-react"

type pageProps = {
    onClose: () => void;
}

export default function ModalHeader({onClose}:pageProps) {
    const currentPath = window.location.pathname

    const headline = 'Get Started Today'
    const subtext = 'Sign up to start booking fast and manage everything in one place.'

    const headline1 = 'Add a Booking'
    const subtext1 = 'Fill in the details and confirm your reservation in seconds.'
    return (
        <header className="">
            <div className="flex flex-col gap-5">
                <div className="flex justify-between">
                    <div className="bg-black p-3 inline-block rounded text-white">
                        {currentPath === '/' ? <UserRoundPlus /> : <CalendarPlus />}
                    </div>
                    <button
                        onClick={onClose}
                        className="hover:cursor-pointer"
                    >
                        <CircleX />
                    </button>
                </div>
                <div>
                    {currentPath === '/' ? (
                        <div>
                            <h1 className="text-2xl font-semibold font-[Poppins]">{headline}</h1>
                            <p className="text-gray-500 text-sm">{subtext}</p>
                        </div>

                    ) : (
                        <div>
                            <h1 className="text-2xl font-semibold font-[Poppins]">{headline1}</h1>
                            <p className="text-gray-500 text-sm">{subtext1}</p>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}
