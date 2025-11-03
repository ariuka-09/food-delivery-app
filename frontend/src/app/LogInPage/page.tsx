"use client"
import axios from "axios";
import { Fullscreen } from "lucide-react";
import { useState } from "react";




export default function  (){



    const logIn  = async (event: React.SyntheticEvent<HTMLFormElement>) =>{
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const email = formData.get('email')
        const password = formData.get('password')
        console.log(email,password)
        // const email = data.get('email')
        try {

        const response =  await axios.post("http://localhost:5000/user/logIn", {email:email, password:password})
            console.log("working", response)
            //local storage ruu hadagaldag logic nemeh
        } catch (error) {
            console.log("error", error);
        }
    }
    

    
    return(

        <div className="h-screen flex items-center gap-5 p-4">
            <div className="flex flex-col w-[40%] pl-25 gap-2 h-fit ">
                <button className="p-2.5 bg-white w-9 h-9 border rounded-[5] "><img src="/back.svg" alt="" /> </button>
                <div>
                    <h3 className="text-[24px] font-semibold">Log in</h3>
                    <p className="text-#71717A font-4 font-normal">Log in to enjoy your favorite dishes.</p>
                </div>
                {/* <form action=""></form>
                <div className="flex flex-col gap-2">
                    <input type="text" placeholder="Enter your email address" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="border-2"/>
                    <input type="text" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="border-2"/>
                </div>
                <button className="bg-[#8e8eff]" onClick={create}>Let's Go</button> */}


                <form method="post" onSubmit={logIn}>
                    <label htmlFor="email">First name:</label>
                    <input type="text" placeholder="Enter your email address"  className="border-2" id="email" name="email"/>
                    <label htmlFor="password">Last name:</label>
                    <input type="text" placeholder="Password"  className="border-2" id="password" name="password"/>
                    <button type="submit" className="bg-[#8e8eff]" >Let's Go</button>

                </form>




            </div>
            <div className="w-[60%] h-full"><img src="/LogInPage.jpg" className="h-full object-cover rounded-[20px] " alt="" /></div>
        </div>
    )
}