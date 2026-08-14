import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react"
import { BaseURL } from "../../../utils/baseURL";

const User = ({contact}) => {
    const [status,setStatus]=useState();

    const queryClient = useQueryClient();

    const deleteContactMutation = useMutation({
      mutationFn:async(id)=>{
        await axios.delete(`${BaseURL}/api/contacts/${id}`)
      },
      onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:["fetchContacts"]})
      }
    })

    const updateStatusMutation = useMutation({
      mutationFn:async (id)=>{
        await axios.put(`${BaseURL}/api/contacts/${id}`,{status:status})
      },
      onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:["fetchContacts"]});
      }
    })

    const deleteContact =(id)=>{
      deleteContactMutation.mutate(id);
    }

    const handleStatusChange = (e,id)=>{
        setStatus(e.target.value);
        updateStatusMutation.mutate(id);
    }
    
  return (
    <div className='bg-amber-50 px-4 py-2 rounded min-w-[300px] max-w-[400px] grow'>
        <div className="flex flex-col gap-2">

            <div className="flex flex-row justify-between">
              <h1 className='font-bold text-primary text-[18px]'>{contact.name}</h1>
              <p className="text-darkBlue rounded px-4 py-0.5 bg-blue-300">{contact.company}</p>
            </div>

            <div className="flex flex-row justify-between border-gray-300 border rounded py-2 px-2 text-[11px] text-gray-600">
              <p><span className='mr-1'>E</span>{contact.email?contact.email:"example@123.com"}</p>
              <p><span className='mr-0.5'>E</span>{contact.phone?contact.phone:"97654321"}</p>
            </div>

            <div className="flex flex-row justify-between ">
              <select value={contact.status} onChange={(e)=>handleStatusChange(e,contact._id)} name="" id="" className='select focus:border-gray-300 outline-0 w-28 focus:outline-0 cursor-pointer py-1!'>
                <option value="Interested">Interested</option>
                <option value="Follow-up">Follow-up</option>
                <option value="Closed">Closed</option>
              </select>
              
              <div className="">
                <button className='btn btn-error cursor-pointer' onClick={()=>deleteContact(contact._id)} disabled={deleteContactMutation.isPending}>Delete</button>
              </div>
            </div>

        </div>

    </div>
  )
}

export default User
//