import { useState } from "react";

import { CircleUserRound } from 'lucide-react';

import ProfileModal from "./profile-modal";

import type { Auth } from "@/types/booking";

type pageProps = {
}  & Auth

export default function ProfileBtn({auth}:pageProps) {
    const [openProfile, setOpenProfile] = useState(false)
    return (
        <div>
            <button
                onClick={() => setOpenProfile(true)}
                className="hover:cursor-pointer"
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
