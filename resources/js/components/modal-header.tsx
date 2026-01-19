import { UserRoundPlus } from "lucide-react"
import { CircleX } from "lucide-react"
import { CalendarPlus } from "lucide-react"
import { InfoIcon } from "lucide-react"

type pageProps = {
    onClose: () => void;
}

export default function ModalHeader({onClose}:pageProps) {
    const currentPath = window.location.pathname

    const pageContent: Record<string, { headline: string; subtext: string; icon: JSX.Element }> = {
        "/": {
            headline: 'Get Started Today',
            subtext: 'Sign up to start booking fast and manage everything in one place.',
            icon: <UserRoundPlus />
        },
        "/home": {
            headline: 'Add a Booking',
            subtext: 'Fill in the details and confirm your reservation in seconds.',
            icon: <CalendarPlus />
        },
        "/view-bookings": {
            headline: 'Booking Details',
            subtext: 'See all information about your reservation in one place.',
            icon: <InfoIcon />
        }
    }

    const content = pageContent[currentPath] ?? {
        headline: 'Dashboard',
        subtext: '',
        icon: <UserRoundPlus />
    }

    return (
        <header className="">
            <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center">
                    <div className="bg-black p-3 inline-block rounded text-white">
                        {content.icon}
                    </div>
                    <button
                        onClick={onClose}
                        className="hover:cursor-pointer"
                    >
                        <CircleX />
                    </button>
                </div>

                <div className="flex flex-col">
                    <h1 className="text-2xl font-semibold font-[Poppins]">{content.headline}</h1>
                    <p className="text-gray-500 text-sm">{content.subtext}</p>
                </div>
            </div>
        </header>
    )
}
