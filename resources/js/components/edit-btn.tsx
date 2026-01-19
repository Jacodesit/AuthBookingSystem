import EditIcon from "./edit-icon";

export default function EditButton() {
    return (
        <div>
            <button
                className="transition-all duration-300 hover:cursor-pointer"
            >
                <EditIcon />
            </button>
        </div>
    )
}
