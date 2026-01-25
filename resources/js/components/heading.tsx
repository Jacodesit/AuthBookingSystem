import { Link } from "@inertiajs/react"

import LogoutBtn from "./logout-btn"

import type { Auth } from "@/types/booking"

type pageProps = {
    name: string
} & Auth

export default function Header({name, auth}:pageProps) {
    const currentPage = window.location.pathname
    return (
        <header className={`header px-10 py-3 lg:px-25 lg:py-5 lg:fixed z-100 flex justify-between
                ${currentPage === '/' ? 'lg:w-2/3 items-center mt-1' : 'w-full border-b items-center'}
            `}>
            <nav>
                {currentPage === '/'? (
                    <Link
                        href={'/'}
                        className="font-bold text-lg lg:text-2xl"
                    >
                        {name}.
                    </Link>
                ) : (
                    <Link
                        href={'/home'}
                        className="font-bold text-lg lg:text-2xl"
                    >
                        {name}.
                    </Link>
                )}
            </nav>
            <LogoutBtn
                auth={auth}
            />
        </header>
    )
}
