import ModalHeader from "./modal-header"
import RegisterForm from "./register-form"

type pageProps = {
    openRegister: boolean
    onClose: () => void
}

export default function RegisterModal({openRegister, onClose}:pageProps) {
    if (!openRegister) return null

    return (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center p-4 z-500">
            <div className="bg-slate-100 rounded-lg max-w-xl w-full  flex flex-col relative px-8 py-5">
                <ModalHeader onClose={onClose} />
                <RegisterForm />
            </div>
        </div>
    )
}
