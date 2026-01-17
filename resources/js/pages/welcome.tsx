
import Header from "@/components/heading"
import HeroSection from "@/components/hero-section"
import Login from "@/components/login"

type pageProps = {
    name: string
}

export default function Welcome({name}:pageProps) {
    return (
        <div className="h-screen lg:flex">
            {/* Hero Section */}
            <section className="hidden lg:w-2/3 lg:block">
                <Header name={name} />
                <HeroSection />
            </section>

            {/* Login Section */}
            <section className="lg:w-1/3">
                <Login name={name} />
            </section>
        </div>
    )
}
