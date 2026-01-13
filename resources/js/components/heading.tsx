import { Link } from "@inertiajs/react"

type pageProps = {
    name: string
}

export default function Header({name}:pageProps) {
    const currentPage = window.location.pathname
    return (
        <header className={`px-25 py-5 fixed
            ${currentPage === '/' ? 'w-2/3' : 'w-full'}
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
