import { Link } from "@inertiajs/react";
import { useRoute } from '../../../vendor/tightenco/ziggy'

import BarsThree from "@/components/bars-three";
import Arrow from "@/components/arrow-icon";

type pageProps = {
    headline2: string
    subtext2: string
}

export default function ViewCard({headline2, subtext2}:pageProps) {
    const route = useRoute();

    return (
        <Link
            href={route('view.bookings')}
        >
            <div className=" h-full border p-25 rounded-md hover:cursor-pointer transform transition-all duration-300 hover:border-[#DC143C] hover:-translate-y-3">
                <div className="flex items-center flex-col gap-5 text-center">
                    <div className="bg-[#DC143C] text-white p-3 rounded">
                        <BarsThree />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex gap-1 items-center">
                            <h1 className="text-2xl font-medium text-[#DC143C]">{headline2}</h1>
                            <Arrow />
                        </div>
                        <p className="text-center text-gray-500">{subtext2}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
