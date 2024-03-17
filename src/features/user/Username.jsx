import { useSelector } from "react-redux"

function Username() {
    const {username}=useSelector(store=>store.user)
    if(!username) return null;
    return (
        <div className="text-sm font-semibold hidden md:block">
           Welcome, <small> {username}</small>
        </div>
    )
}

export default Username
