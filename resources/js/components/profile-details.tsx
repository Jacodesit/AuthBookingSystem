import { usePage } from "@inertiajs/react"

import EmailIcon from "./email-icon"

import type { Auth } from "@/types/booking"
import ProfileEmailIcon from "./profle-email-icon"

type pageProps = {
} & Auth

export default function ProfileDetails() {
    const auth = usePage<pageProps>().props

    const createdAt = auth.auth.user?.created_at ? new Date(auth.auth.user.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
    : ''

    return (
        <div className="p-4 shadow rounded-md bg-[#FAFAFA] mt-5 flex flex-col gap-10">
            <div className="border-l-4 border-[#DC143C] rounded">
                <p className="ml-1 font-semibold text-sm font-[Poppins]">User Details</p>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-5">
                    <div>
                        <img
                            src='/Profile/male.png'
                            alt='Avatar'
                            className="h-25"
                        />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xl font-medium">{auth.auth.user?.name}</p>
                        <p className="text-xs text-gray-500">ID: <span className="text-black">{auth.auth.user?.id}</span></p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="flex items-center gap-2 bg-[#FAFAFA] shadow p-3 flex-1 rounded">
                        <div className="bg-gray-200 p-2 rounded">
                            <EmailIcon />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-medium">Email</p>
                            <p className="text-xs font-medium">{auth.auth.user?.email}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 bg-[#FAFAFA] shadow p-3 flex-1 rounded">
                        <div className="bg-gray-200 p-2 rounded">
                            <ProfileEmailIcon />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-medium">Account Created</p>
                            <p className="text-xs font-medium">{createdAt}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
