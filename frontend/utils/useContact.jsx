import axios from 'axios'

import { BaseURL } from './baseURL'
import { keepPreviousData, useQuery } from '@tanstack/react-query';


const getContacts=({status,search})=>{
    return axios.get(`${BaseURL}/api/contacts?status=${status}&search=${search}`);
}

export const useContact = ({status,search}) => {
    const {data, isLoading, isError, error, isFetching, refetch}= useQuery({
        queryKey:["fetchContacts"],
        queryFn:()=>getContacts({status,search}),
        refetchOnWindowFocus:false,
        retry:2,
        placeholderData:keepPreviousData,
        refetchInterval:50000
    })

  return {data, isLoading, isError, error, isFetching, refetch}
}
