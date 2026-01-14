import Header from "./heading"
import LoginForm from "./login-form"

type pageProps = {
    name: string
}

export default function Login({name}:pageProps) {
    const headline = 'Welcome Back'
    const subtext = 'Login to manage your bookings fast and without hassle'

    return (
        <section className="">
            <div className="block lg:hidden px-15 py-6 mb-15">
                <Header
                    name={name}
                />
            </div>

            <div className="w-full lg:h-screen flex items-center justify-center">
                <div className="rounded flex flex-col gap-10 ">
                    <div className="text-center">
                        <h1 className="font-medium font-[Poppins] text-2xl mb-1">{headline}</h1>
                        <p className="text-gray-500 text-xs">{subtext}</p>
                    </div>
                    <LoginForm />
                </div>
            </div>
        </section>

    )
}
