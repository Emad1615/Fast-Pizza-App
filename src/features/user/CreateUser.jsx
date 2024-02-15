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
        <form onSubmit={handleSubmit} className="text-center space-y-3 flex flex-col justify-center items-center">
            <p>👋Welcome,please start by telling us your name:</p>
            <input required value={username} onChange={(e)=> setUserName(e.currentTarget.value)} type="text" placeholder="name"
             className="px-3 py-2 placeholder:text-stone-300 placeholder:uppercase bg-transparent border-b-2 focus:outline-none focus:border-b-yellow-500 focus:border-b-[3px] rounded-sm  text-sm  md:focus:scale-125 transition-transform  duration-300"/>
            {
                username &&
                 <button 
                 className="bg-yellow-400 py-2 px-3 block rounded-full font-semibold text-stone-600 mx-2 hover:bg-yellow-300 tracking-wider uppercase  transition-all duration-300 focus:outline-none
                 focus:ring focus:ring-yellow-200 focus:ring-offset-2 disabled:cursor-not-allowed hover:shadow-lg ">Do Order</button>
            }
        </form>
    )
}

export default CreateUser
