export type Booking = {
    id: number;
    booking_title: string;
    booking_time: string | null
    booking_date: string | null
    notes: string
    status: 'pending' | 'completed' | 'cancelled';
    name: string;
    password: string;
}

export type Auth = {
    auth: {
        user: {
            name: string;
        } | null
    }
}
