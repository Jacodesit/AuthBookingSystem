import { useState } from "react";

import { CircleUserRound } from 'lucide-react';

import ProfileModal from "./profile-modal";

export default function ProfileBtn() {

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
                openProfile={openProfile}
                onClose={() => setOpenProfile(false)}
            />
        </div>

    )
}
