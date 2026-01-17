import { useForm } from "@inertiajs/react"
import { toast } from 'react-hot-toast'

export default function RegisterForm() {
    const { data, setData, post, errors, processing} = useForm({
        'name': '',
        'email': '',
        'password': '',
        'password_confirmation': '',
    })

    const submit = (e:React.FormEvent) => {
        e.preventDefault();
        post('/register')
        toast.success('Registered successfully!');
    }

    return (
        <div className="mt-10">
            <form onSubmit={submit}>
                <div className="flex flex-col gap-2">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="name"
                            className="text-xs font-medium"
                        >
                            Name
                        </label>

                        <input
                            type="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="John Doe"
                            className="border p-4 rounded-md text-xs"
                        />

                        {errors.name && <p className="error text-xs text-red-700">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="email"
                            className="text-xs font-medium"
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

                        {errors.email && <p className="error text-xs text-red-700">{errors.email}</p>}
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="password"
                            className="text-xs font-medium"
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
                        {errors.password && <p className="error text-xs text-red-500">{errors.password}</p>}
                    </div>

                    {/* Confirm Password */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="password"
                            className="text-xs font-medium"
                        >
                            Password
                        </label>

                        <input
                            type="password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            placeholder="Comfirm Password"
                            className="border p-4 rounded-md text-xs"
                        />
                        {errors.password_confirmation && <p className="error text-xs text-red-500">{errors.password_confirmation}</p>}
                    </div>
                </div>

                <button
                    disabled={processing}
                    className="p-3 border w-full rounded-md mt-3 font-semibold flex items-center justify-center gap-2 bg-gray-800  text-white transition-all duration-300 hover:bg-black hover:text-white hover:cursor-pointer"
                >
                    {processing ? 'Signing up...' : 'Sign up'}
                </button>
            </form>
        </div>
    )
}
