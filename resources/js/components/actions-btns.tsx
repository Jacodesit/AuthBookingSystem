export default function ActionBtns() {
    return (
        <div className="flex gap-2">
            <button className="px-4 py-2 transition-all duration-300 hover:text-red-700 hover:cursor-pointer">
                Cancel
            </button>

            <button className="bg-green-600 text-white px-4 py-2 rounded transition-all duration-300 hover:bg-green-700 hover:cursor-pointer">
                Complete
            </button>
        </div>
    )
}
