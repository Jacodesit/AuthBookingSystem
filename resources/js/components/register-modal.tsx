type pageProps = {
    openRegister: boolean
    onClose: () => void
}

export default function RegisterModal({openRegister, onClose}:pageProps) {
    if (!openRegister) return null

    return (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center p-4 z-500">
            <div className="bg-slate-100 rounded-lg max-w-xl w-full  flex flex-col relative">
                this is register modal
                <button
                    onClick={onClose}
                >
                    X
                </button>
            </div>
        </div>
    )
}
