import { View, Text,SafeAreaView,Image,TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import { images } from '@/constants'
import CustomButton from '@/components/CustomButton'
import CustomTextInput from '@/components/CustomTextInput'
import { ISIGNUP, IValidationRegistor } from '@/types'
import { postRegistor } from '@/services/request'

const SignUp = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const [Validation, setValidation] = useState<IValidationRegistor>({name:false, username: false, password: false, rePassword: false });
  const [sendValue, setSendValue] = useState<ISIGNUP>({name: '', username: '', password: '', rePassword: ''})

  const handleCheckFild = ()=> {
   let isReturn:boolean = true;

      let set:any = {}
      for(let key in sendValue) {
        if(!sendValue[key]) {
          set[key] = true
          isReturn = false;
        }

          else {
            set[key] = false
          }

      }

      setValidation(set)

      return isReturn;
  }

  const handleSubmit = async() => {
    try{
      const isCheck = handleCheckFild()
    console.log('on submit');
    
    setLoading(true)
    if(isCheck) {
       const data = await postRegistor(sendValue);
       if(data) router.push('/sign-in')
    } else {
      setLoading(false)
    }
    } catch{
      setLoading(false)

    }
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView  className='w-full'>
    <View className='flex justify-center align-ceneter w-full h-full p-4'>

      {/* <Image source={images.logo} resizeMode='cetner' className='w-[115px] h-[35px]'/> */}
      <Text className='text-white text-xl text-center'>Sign Up</Text>
      <CustomTextInput
        outStyle='mt-6' 
        textLabel='name'
        inputError={Validation.name}
        onChangeText={(e) => {

          setValidation(old => ({...old, name: false}))
          setSendValue(old => ({...old, name: e}))
        }}
        placeholderText='Your unique name'
        />
        <CustomTextInput
        outStyle='mt-6' 
        textLabel='Username'
        inputError={Validation.username}
        onChangeText={(e) => {

          setValidation(old => ({...old, username: false}))

          setSendValue(old => ({...old, username: e}))
        }}
        placeholderText='Your unique username'
        />
       
      

        <CustomTextInput
        outStyle='mt-6' 
        textLabel='Password'
        inputError={Validation.password}
        onChangeText={(e) => {

          setValidation(old => ({...old, password: false}))
    
          setSendValue(old => ({...old, password: e}))
        }}
        placeholderText='Your unique password'
        secureTextEntry
        isPassword
        />
        <CustomTextInput
        outStyle='mt-6' 
        textLabel='RePassword'
        inputError={Validation.rePassword}
        onChangeText={(e) => {
          
          setValidation(old => ({...old, rePassword: false}))


          setSendValue(old => ({...old, rePassword: e}))
        }}
        placeholderText='Your unique repassrod'
        secureTextEntry
        isPassword
        />
        
      <CustomButton 
      isLoading={isLoading}
      handlePross={handleSubmit}
      title={'Sign Up'}
      titleStyle='w-full mt-7'
      
      />
      <Text className='text-white text-center mt-5'>
      Already have an account? 
        
          <Link href='/sign-in' className='text-secondary text-center mt-2'> Login  </Link>
      </Text>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp