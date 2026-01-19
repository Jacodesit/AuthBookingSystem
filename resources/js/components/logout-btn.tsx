import { router } from "@inertiajs/react"
import { toast } from 'react-hot-toast'

import { LogOut } from 'lucide-react';

import ProfileBtn from "./profile-btn";

export default function LogoutBtn() {

    const logout = () => {
        router.post('/logout')
        toast.success('Logout successfully!');
    }

    const currPath = window.location.pathname

    return (
        <div className={`flex gap-5 items-center ${currPath === '/' ? 'hidden' : 'block' }`}>
            <button
                onClick={logout}
                className="border px-5 py-2 rounded flex gap-2 items-center transition-all duration-300 hover:bg-black hover:text-white hover:cursor-pointer"
            >
                <LogOut size={15}/>
                Logout
            </button>

            <ProfileBtn />
        </div>
    )
}
