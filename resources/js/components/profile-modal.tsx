import ProfileHeader from "./ui/profile-header"
import ProfileDetails from "./profile-details"
import ProfileOverview from "./profile-overview"

import type { Auth } from "@/types/booking"

type pageProps = {
    openProfile: boolean
    onClose: () => void;
} & Auth

export default function ProfileModal({openProfile, onClose}:pageProps) {
    if(!openProfile) return null
    return (
        <main className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-end z-500">
            <div className="bg-slate-100 rounded-lg max-w-xl w-full flex flex-col relative px-8 py-5 h-screen">
                <ProfileHeader onClose={onClose} />
                <ProfileDetails />
                <ProfileOverview />
            </div>
        </main>
    )
}
