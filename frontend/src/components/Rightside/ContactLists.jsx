import React, { useContext, useEffect, useState } from 'react'
import User from './User'
import { contactContext } from '../../App'
import LoadingSpinner from '../../../utils/LoadingSpinner';
import { useContact } from '../../../utils/useContact';
import ContactSkeleton from '../../../utils/contactSkeleton';


const ContactLists = () => {
  const {contacts, setContacts} = useContext(contactContext);
  const [search,setSearch]=useState("");
  const [status,setStatus]=useState("");

  const contactFetching = useContact({status:status, search:search});

  useEffect(() => {
    setContacts(contactFetching?.data);
  }, [contactFetching.data]);

  useEffect(()=>{
    contactFetching.refetch();
  },[search,status])

  return (
    <div className='h-full'>
      <div className="mb-4 flex flex-row justify-between items-center gap-10 ">

        <select value={status} onChange={(e)=>setStatus(e.target.value)} name="" id="" className='select focus:border-white outline-0 w-28 bg-primary text-white'>
            <option value="">All Status</option>
            <option value="Interested">Interested</option>
            <option value="Follow-up">Follow-up</option>
                    
        </select>

        <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" name="" id="" placeholder='Search by name or company' className='input flex-1 focus:border-black outline-0 transition-all duration-200'/>
      </div>

      <div className="h-full">
        {contactFetching.isLoading && contactFetching.isFetching ? 
        <div className='flex flex-wrap gap-x-10 gap-y-5 items-center'>
            <ContactSkeleton/>
            <ContactSkeleton/>
            <ContactSkeleton/>
            <ContactSkeleton/>
        </div>
        :
        <div className='flex flex-wrap gap-x-10 gap-y-5 items-center'>
          {contacts?.data?.map((contact)=>
             <User contact={contact} key={contact._id}/>
          )}
        </div>
        }
      </div>
      
    </div>
  )
}

export default ContactLists