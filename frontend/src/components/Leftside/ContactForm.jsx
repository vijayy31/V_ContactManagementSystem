import React, { useState } from 'react'
import { BaseURL } from '../../../utils/baseURL'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const ContactForm = () => {

    const[newContact, setNewContact] = useState({
        name:"",
        company:"",
        phone:"",
        email:"",
        status:"Interested"
    })

    const queryClient = useQueryClient();

    const postContactMutation = useMutation({
        mutationFn:async (newCont)=>{
            await axios.post(`${BaseURL}/api/contacts`,newCont)
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["fetchContacts"]})
        }
    })

    const [error, setError] = useState(null);

    const handleChange = (e)=>{
        setNewContact((prev)=>({...prev,[e.target.name]:e.target.value}));
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(newContact);
        setError(null);

        if(!newContact.name || !newContact.company){
            setError("Error : Name or Company is missing");
            return;
        }

        postContactMutation.mutate(newContact);
        setNewContact({
            name:"",
            company:"",
            phone:"",
            email:"",
            status:"Interested"
        })

    }
  return (

    <div className='px-5 py-1'>
        <h1 className='text-2xl text-darkBlue font-bold mb-2'>Contact Management</h1>

        <div className="mb-2 mt-8">

            <form action="" onSubmit={handleSubmit} className='flex flex-col gap-2'>
                <input type="text" name="name" id="" placeholder='Name' value={newContact.name} onChange={(e)=>handleChange(e)} className='input w-full focus:border-black outline-0 transition-all duration-200'/>
                <input type="text" name="company" id="" placeholder='Company' value={newContact.company} onChange={(e)=>handleChange(e)} className='input w-full focus:border-black outline-0 transition-all duration-200'/>
                <input type="email" name="email" id="" placeholder='Email' value={newContact.email} onChange={(e)=>handleChange(e)} className='input w-full focus:border-black outline-0 transition-all duration-200'/>
                <input type="tel" name="phone" id="" placeholder='Phone' value={newContact.phone} onChange={(e)=>handleChange(e)} className='input w-full focus:border-black outline-0 transition-all duration-200'/>

                <select name="status" id="" value={newContact.status} onChange={(e)=>handleChange(e)} className='select w-full focus:border-black outline-0 transition-all duration-200'>
                    <option value="Interested">Interested</option>
                    <option value="Follow-up">Follow-up</option>
                    <option value="Closed">Closed</option>
                </select>
                
                <button type="submit" className='btn btn-primary mt-5 transition-all duration-200'>Add Contact</button>
                
                {error && <p className='-mt-1 text-[12px] text-red-500'>{error}</p>}
            </form>
        </div>
    </div>
  )
}

export default ContactForm