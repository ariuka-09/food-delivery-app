"use client";
import axios from "axios";
import { Fullscreen } from "lucide-react";
import { useState } from "react";
import { CreatePassword } from "./_components/CreatePassword";
import { EnterEmail } from "./_components/EnterEmail";

export default function CreateUserPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(String);

  const signUp = async (password: string, email:string) => {
    
      console.log("current index", currentIndex);
        console.log("pass", password);
        
      // const confirm = formData.get('confirm')
      // const password = formData.get('password')
      // const email = formData.get('email')
      // console.log(confirm,password)
      // const email = data.get('email')
      try {
        const data  = await axios.post("http://localhost:5000/user/signUp", {
          email: email,
          password: password,
        });
        console.log("data", data);

        // const response =  await axios.post("http://localhost:5000/user/logIn", {email:email, password:password})
        // console.log("working", response)
        //local storage ruu hadagaldag logic nemeh
      } catch (error) {
        console.log("err0r", error);
      } 
        window.location.replace("LogInPage")
      
  };

  return (
    <div className="h-screen flex items-center gap-5 p-4">
      <div className="flex flex-col w-[40%] pl-25 gap-2 h-fit ">
        {currentIndex > 0 && currentIndex < 3 && <button className="p-2.5 bg-white w-9 h-9 border rounded-[5] " onClick={()=>{setCurrentIndex((currentIndex)=>currentIndex -1)}}>
          <img src="/back.svg" alt="" />{" "}
        </button>}
       {
        currentIndex < 3 &&  <div>
        <h3 className="text-[24px] font-semibold">
          Create a strong password
        </h3>
        <p className="text-#71717A font-4 font-normal">
          Create a strong password with letters, numbers.
        </p>
      </div>
       }  
        {/* <form action=""></form>
                <div className="flex flex-col gap-2">
                    <input type="text" placeholder="Enter your email address" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="border-2"/>
                    <input type="text" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="border-2"/>
                </div>
                <button className="bg-[#8e8eff]" onClick={create}>Let's Go</button> */}
        {currentIndex == 0 && (
          <EnterEmail
            setCurrentIndex={setCurrentIndex}
            setEmail={setEmail}
            currentIndex={currentIndex}
          />
        )}
        {currentIndex == 1 && (
          <CreatePassword signUp={signUp} email={email} />
        )}
      </div>
      <div className="w-[60%] h-full">
        <img
          src="/LogInPage.jpg"
          className="h-full object-cover rounded-[20px] "
          alt=""
        />
      </div>
    </div>
  );
}
