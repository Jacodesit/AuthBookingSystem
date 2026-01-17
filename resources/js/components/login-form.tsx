import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { toast } from 'react-hot-toast'

import { LogIn } from 'lucide-react';

import RegisterModal from './register-modal';

export default function LoginForm() {
    const [openRegister, setOpenRegister] = useState(false);

    const { data, setData, post, errors, processing} = useForm({
        'email': '',
        'password' : '',
    })

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        post('/login');
        toast.success('Login successfully!');
    }

    return (
        <div className=''>
            <form onSubmit={submit}>
                <div className="flex flex-col gap-2">
                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="email"
                            className="text-sm font-medium"
                        >
                            Email
                        </label>

                        <input
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="johndoe@gmail.com"
                            className="border p-4 rounded-md text-xs"
                        />

                        {errors.email && <p className='error text-xs text-red-700'>{errors.email}</p>}
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="password"
                            className="text-sm font-medium"
                        >
                            Password
                        </label>

                        <input
                            type="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Password"
                            className="border p-4 rounded-md text-xs"
                        />

                        {errors.password && <p className='errors text-xs text-red-700'>{errors.password}</p>}
                    </div>
                </div>
                <button
                    disabled={processing}
                    className="p-3 border w-full rounded-md mt-3 font-semibold flex items-center justify-center gap-2 bg-gray-800  text-white transition-all duration-300 hover:bg-black hover:text-white hover:cursor-pointer"
                >
                    <LogIn size={15} />
                    {processing ? 'Logging in...' : 'Log In'}
                </button>
            </form>

            <div>
                <p
                    className='text-xs text-center my-5'
                >
                    No account yet?
                    <button
                        onClick={() => setOpenRegister(true)}
                        className='mx-1 text-red-500 transition-all duration-300 hover:underline hover:cursor-pointer hover:font-medium'
                    >
                        Sign up
                    </button>
                    here.
                </p>
            </div>

            <RegisterModal
                openRegister={openRegister}
                onClose={() => setOpenRegister(false)}
            />
        </div>
    )
}
