import { useState } from 'react';
import { LogIn } from 'lucide-react';

import RegisterModal from './register-modal';

export default function LoginForm() {
    const [openRegister, setOpenRegister] = useState(false);

    return (
        <div className=''>
            <form>
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
                            placeholder="johndoe@gmail.com"
                            className="border p-4 rounded-md text-xs"
                        />
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
                            placeholder="Password"
                            className="border p-4 rounded-md text-xs"
                        />
                    </div>
                </div>
                <button
                    className="p-3 border w-full rounded-md mt-3 font-semibold flex items-center justify-center gap-2 bg-black text-white transition-all duration-300 hover:bg-gray-800 hover:text-white hover:cursor-pointer"
                >
                    <LogIn size={15} />
                    Login
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
