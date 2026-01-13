export default function HeroSection() {
    const headline = 'Book Smarter, Not Harder'
    const subtext = 'Reserve your spot in seconds. Manage your bookings anytime, anywhere, with ease and confidence.'
    return (
        <section>
            <div className="px-25 h-screen flex  justify-center flex-col">
                <h1 className="text-9xl font-bold">{headline}</h1>
                <p>{subtext}</p>
            </div>
        </section>
    )
}
