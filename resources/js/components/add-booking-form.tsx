import { useForm } from '@inertiajs/react';
import { toast } from 'react-hot-toast'

import { LogIn } from 'lucide-react';

type pageProps = {
    onSuccess: () => void
}

export default function BookingForm({onSuccess}:pageProps) {
    const today = new Date().toISOString().split('T')[0];
    const curerntPath = window.location.pathname

    const { data, setData, post, errors, processing} = useForm({
        'booking_title': '',
        'booking_date' : today,
        'booking_time' : '',
        'notes' : ''
    })

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        post('/bookings', {
            onSuccess: () => {
                onSuccess();
                toast.success('Booking created successfully!')
            }
        })
    }

    return (
        <div className='mt-10'>
            <form onSubmit={submit}>
                <div className="flex flex-col gap-2">
                    {/* Title */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="title"
                            className="text-sm font-medium"
                        >
                            Title
                        </label>

                        <input
                            type="title"
                            value={data.booking_title}
                            onChange={(e) => setData('booking_title', e.target.value)}
                            placeholder="Take a break from stress"
                            className="border p-4 rounded-md text-xs"
                        />

                        {errors.booking_title && <p className='error text-xs text-red-700'>{errors.booking_title}</p>}
                    </div>

                    <div className='flex gap-2'>
                        {/* Date */}
                        <div className="flex flex-col gap-2 w-1/2">
                            <label
                                htmlFor="date"
                                className="text-sm font-medium"
                            >
                                Date
                            </label>

                            <input
                                type="date"
                                min={today}
                                value={data.booking_date}
                                onChange={(e) => setData('booking_date', e.target.value)}
                                placeholder=""
                                className="border p-4 rounded-md text-xs"
                            />

                            {errors.booking_date && <p className='errors text-xs text-red-700'>{errors.booking_date}</p>}
                        </div>

                        {/* Time */}
                        <div className="flex flex-col gap-2 w-1/2">
                            <label
                                htmlFor="time"
                                className="text-sm font-medium"
                            >
                                Time
                            </label>

                            <input
                                type='time'
                                value={data.booking_time}
                                onChange={(e) => setData('booking_time', e.target.value)}
                                placeholder=""
                                className="border p-4 rounded-md text-xs"
                            />

                            {errors.booking_time && <p className='errors text-xs text-red-700'>{errors.booking_time}</p>}
                        </div>
                    </div>

                    {/* Notes */}
                    <div className='flex flex-col gap-2'>
                        <label
                            htmlFor="notes"
                            className='text-sm font-medium'
                        >
                            Notes
                        </label>

                        <textarea
                            name="notes"
                            id="notes"
                            value={data.notes}
                            onChange={(e) => setData('notes', e.target.value)}
                            rows={8}
                            className='border p-4 rounded-md text-xs resize-none'
                            placeholder='Put something here...'
                        >

                        </textarea>

                        {errors.notes && <p className='errors text-xs text-red-700'>{errors.notes}</p>}
                    </div>
                </div>

                <button
                    disabled={processing}
                    className="p-3 border w-full rounded-md mt-3 font-semibold flex items-center justify-center gap-2 bg-gray-800  text-white transition-all duration-300 hover:bg-black hover:text-white hover:cursor-pointer"
                >
                    {curerntPath === '/' ? <LogIn size={15} /> : ''}
                    {processing ? 'Creating Booking...' : 'Book Now'}
                </button>
            </form>

        </div>
    )
}
