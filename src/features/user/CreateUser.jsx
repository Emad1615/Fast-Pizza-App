import { useState } from "react"
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateUser } from "./userSilce";
import { useNavigate } from "react-router-dom";

function CreateUser() {
    const navigate=useNavigate();
    const [username,setUserName]=useState("");
    const dispatch=useDispatch();
    function handleSubmit(e){
        e.preventDefault();
        if(!username) return ;
        dispatch(updateUser(username));
        setUserName("")
        navigate("/menu")
        
    }
    return (
        <form onSubmit={handleSubmit} className="text-center space-y-3 flex flex-col justify-center items-center">
            <p>👋Welcome,please start by telling us your name:</p>
            <input required value={username} onChange={(e)=> setUserName(e.currentTarget.value)} type="text" placeholder="name"
             className="px-3 py-2 placeholder:text-stone-300 placeholder:uppercase bg-transparent border-b-2 focus:outline-none focus:border-b-yellow-500 focus:border-b-[3px] rounded-sm  text-sm  md:focus:scale-125 transition-transform  duration-300"/>
            {
                username &&
                <Button type={"primary"}>Do Order</Button>
            }
        </form>
    )
}

export default CreateUser
