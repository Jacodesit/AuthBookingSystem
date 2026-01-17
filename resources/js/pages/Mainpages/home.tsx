import AuthLayout from "@/layouts/authenticated-layout";

import type { Auth } from "@/types/booking";

type pageProps = {
    name: string;
} & Auth;

export default function Home({name, auth}:pageProps) {
    const subtext = 'Manage your bookings, track upcoming reservations, and never miss a schedule'
    return (
        <AuthLayout name={name}>
            <div className="">
                <div className="flex items-center gap-1 text-3xl">
                    <p className="font-[Poppins]">Welcome, </p>
                    <p className="text-[#DC143C] font-semibold">{auth.user?.name}</p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">{subtext}</p>
                </div>
            </div>


        </AuthLayout>

    )
}
