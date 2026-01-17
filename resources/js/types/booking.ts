export type Booking = {
    id: number;
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
