import AuthLayout from "@/layouts/authenticated-layout";
import AddCard from "@/components/add-card";
import ViewCard from "@/components/view-card";

import type { Auth } from "@/types/booking";

type pageProps = {
    name: string;
    onSuccess: () => void
} & Auth;

export default function Home({name, auth, onSuccess}:pageProps) {
    const subtext = 'Manage your bookings, track upcoming reservations, and never miss a schedule'
    const headline1 = 'Add Booking'
    const subtext1 = 'Quickly add a new booking and secure your spot.'
    const headline2 = 'View Bookings'
    const subtext2 = 'See all your upcoming and past bookings at a glance.'

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

            <div className="h-[70vh] flex items-center justify-center relative z-100 ">
                <div className="grid grid-cols-2 gap-5 px-50 ">
                    <AddCard
                        headline1={headline1}
                        subtext1={subtext1}
                        onSuccess={onSuccess}
                    />

                    <ViewCard
                        headline2={headline2}
                        subtext2={subtext2}
                    />
                </div>
            </div>
        </AuthLayout>
    )
}
