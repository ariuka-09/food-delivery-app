import axios from "axios"
import { createContext } from 'react';
import { Category } from "./_components/Category"
import { axiosInstance } from "@/lib/utils"
import { AlertDialogDemo } from "./_components/Alert";

export default async function AdminPage (){
    const Categories = await axiosInstance.get('/foodCategory')
    
    return (
        
        <div>
            <Category Categories={Categories.data}/>
        </div>
    )
}