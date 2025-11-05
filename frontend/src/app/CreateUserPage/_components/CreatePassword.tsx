"use client"
import axios from "axios";
import { Fullscreen } from "lucide-react";
import { useState } from "react";




export  function CreatePassword  (props:{setPassword: (index: number) => void, setCurrentIndex: (index: number) => void}){


    const {setPassword, setCurrentIndex} = props
    const passFunction  = async (event: React.SyntheticEvent<HTMLFormElement>) =>{
        event.preventDefault()
        const formData = new FormData(event.currentTarget);

        const confirm = formData.get('confirm')
        const password = formData.get('password')
        // const email = data.get('email')
        try {
            if(confirm === password){
                setPassword(password);
                setCurrentIndex(2)
                console.log("password created", password)
            }
            // const {data} = await axios.post('http://localhost:5000/user/signUp', {
            //     email:email,
            //     password:password
            //   })
            // console.log("data", data)

        // const response =  await axios.post("http://localhost:5000/user/logIn", {email:email, password:password})
        //     console.log("working", response)
            //local storage ruu hadagaldag logic nemeh
        } catch (error) {
            console.log("err0r", error);
        }
    }
    

    
    return(

    <form method="post" onSubmit={passFunction} className="flex flex-col gap-4">
        {/* <input type="text" placeholder="Enter your email address"  className="border-2 h-9 rounded-md px-3" id="email" name="email"/> */}
        <input type="text" placeholder="Password"  className="border-2 h-9 rounded-md px-3 " id="password" name="password"/>
        <input type="text" placeholder="Confirm"  className="border-2 h-9 rounded-md px-3 " id="confirm" name="confirm"/>
        <button type="submit" className="bg-[#18181B] text-white border-2 h-9 rounded-md px-3 " >Let's Go</button>
    </form>
    )
}