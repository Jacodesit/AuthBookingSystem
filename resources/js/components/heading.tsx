import { Link } from "@inertiajs/react"

type pageProps = {
    name: string
}

export default function Header({name}:pageProps) {
    const currentPage = window.location.pathname
    return (
        <header className={`lg:px-25 lg:py-5 lg:fixed z-100
                ${currentPage === '/' ? 'lg:w-2/3' : 'w-full'}
            `}>
            <nav>
                <Link
                    href={'/'}
                    className="font-bold text-2xl"
                >
                    {name}.
                </Link>
            </nav>
        </header>
    )
}
