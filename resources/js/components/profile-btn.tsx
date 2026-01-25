import { useState } from "react";

import { CircleUserRound } from 'lucide-react';

import ProfileModal from "./profile-modal";

import type { Auth } from "@/types/booking";

type pageProps = {
}  & Auth

export default function ProfileBtn({auth}:pageProps) {
    const [openProfile, setOpenProfile] = useState(false)
    return (
        <div className="flex justify-center items-center">
            <button
                onClick={() => setOpenProfile(true)}
                className="transition-all duration-300 hover:cursor-pointer hover:text-blue-500"
            >
                <CircleUserRound size={25} strokeWidth={1} />
            </button>

            <ProfileModal
                auth={auth}
                openProfile={openProfile}
                onClose={() => setOpenProfile(false)}
            />
        </div>

    )
}
