import { CircleX } from "lucide-react"

type pageProps = {
    onClose: () => void
}

export default function ProfileHeader({onClose}:pageProps) {
    const heading = 'Profile'
    return (
        <header className="flex justify-between">
            <h1 className="font-[Poppins] font-semibold text-2xl">{heading}</h1>
            <button
                onClick={onClose}
                className="hover:cursor-pointer"
            >
                <CircleX />
            </button>
        </header>
    )
}
