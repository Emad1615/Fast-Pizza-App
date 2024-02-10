import { useState } from "react"

function CreateUser() {
    const [username,setUserName]=useState("")
    function handleSubmit(e){
        e.preventDefault();
        if(!username) return ;
        console.log(username)
        setUserName("")
    }
    return (
        <form onSubmit={handleSubmit} className="text-center space-y-1">
            <p>👋Welcome,please start by telling us your name:</p>
            <input required value={username} onChange={(e)=> setUserName(e.currentTarget.value)} type="text" placeholder="name" className="px-2 py-1 rounded-sm bg-yellow-50 border"/>
            {
                username && <button className="bg-yellow-500 rounded px-1 inline-block ml-1">Do Order</button>
            }
        </form>
    )
}

export default CreateUser
