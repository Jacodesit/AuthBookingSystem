export default function HeroSection() {
    const subtext = 'Reserve your spot in seconds. Manage your bookings anytime, anywhere, with ease and confidence.'
    return (
        <section className="min-h-screen w-full relative">
        {/* Right Masked Dashed Grid */}
        <div
            className="absolute inset-0 z-0"
            style={{
            backgroundImage: `
                linear-gradient(to right, #e7e5e4 1px, transparent 1px),
                linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0, 0 0",
            maskImage: `
            linear-gradient(to right, black 0%, black 50%, black 75%, black 95%, transparent 100%),
            repeating-linear-gradient(
                to right,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
            ),
            repeating-linear-gradient(
                to bottom,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
            )
            `,
            WebkitMaskImage: `
            linear-gradient(to right, black 0%, black 50%, black 75%, black 95%, transparent 100%),
            repeating-linear-gradient(
                to right,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
            ),
            repeating-linear-gradient(
                to bottom,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
            )
            `,
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
            }}
        />
        {/* Hero Section Content */}
        <div className="relative z-50">
            <div className="px-25 h-screen flex justify-center flex-col">
                <h1 className="text-9xl font-semibold font-[Poppins]">Book <span className="text-gray-800">Smarter</span>, Not <span className="text-gray-800">Harder</span></h1>
                <p className="text-lg text-gray-500">{subtext}</p>
            </div>
        </div>
        </section>

    )
}
