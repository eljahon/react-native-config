import { Alert } from "react-native"
import request from "./api"
import { ISIGNUP } from "@/types";

export const postRegistor = async (data:ISIGNUP) => {
    try{
       const respordData =  await request.post('/auth/register', data)
       return respordData;
    } catch (err){
        Alert.alert('registor error')
        throw new Error(err)
        
    }
}