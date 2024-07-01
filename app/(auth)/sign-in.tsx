import { View, Text, Image,TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import CustomTextInput from '@/components/CustomTextInput'
import { useAuth } from '@/context/AuthContext'
import { isLoaded } from 'expo-font'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ILogin, IValidation } from '@/types'
import request from '@/services/api'
import { useTranslation } from 'react-i18next'
import useStore from '@/store'



const SignIn = () => {
  const {onLogin} = useAuth() 
   const {t} = useTranslation()
   const {counter, increment} = useStore()
  const [sendValue, sendData] = useState<ILogin>({
    username: '',
    password: ''
  });
  const [Validation, setValidation] = useState<IValidation>({username:false,password:false});
  const [isLoading, setLoading] =useState<boolean>(false)

  const handleCheckFild = ()=> {
    let isReturn:boolean = true;
    let set:any = {};
      for(let key in sendValue) {
       

        if(!sendValue[key]) {
          set[key] = true;
          isReturn = false
        }
      }

      setValidation(set)

      return isReturn;
  }

  const login = async (data:any):Promise<void> => {
    // const response = await request.post('/auth/login', data);

    // const {token } = response.data;

    // await AsyncStorage.setItem('user', JSON.stringify(user));
    //  const isToken=  await AsyncStorage.setItem('token', token);

    // request.defaults.headers.Authorization = `Bearer ${token}`;

    // const user = await request.get('/auth/me');

    // if(user) {
      onLogin(data)
        router.push('/home')
    // }
    // return user;

  }

  async function handleSignIn() {
  
    increment(5)
    setLoading(true)
    const isCheck = handleCheckFild()
    if(isCheck) {
      const data:any = await login(sendValue);
      if(data) setLoading(false)
    } else {
      setLoading(false)
    }
    setLoading(false)
    
  }
  return (
    <SafeAreaView className='bg-primary h-full'>
    <View className='flex justify-center align-ceneter w-full h-full p-4'>

      {/* <Image source={images.logo} resizeMode='cetner' className='w-[115px] h-[35px]'/> */}
      <Text className='text-white text-xl text-center'>My Pomodoro</Text>
        <CustomTextInput
        outStyle='mt-6' 
        inputError={Validation.username}
        onChangeText={(event:string) => {

          setValidation(old => ({...old , username: false}))

          sendData(old => ({...old, username: event}))
        }}
        textLabel={t('username')}
        placeholderText='Your unique username'
        />
        <CustomTextInput
        outStyle='mt-6' 
        textLabel={t('password')}
        isPassword
        inputError={Validation.password}
        onChangeText={(event:string) => {
          setValidation(old => ({...old , password: false}))
          sendData(old => ({...old, password: event}))
        }}
        placeholderText='Your unique password'
        secureTextEntry
        />
        {/* <Link href='/' className='text-white mt-4 text-right text-secondary-100'>Forgot password</Link> */}
      <CustomButton 
      handlePross={handleSignIn}
      isLoading={isLoading}
      title={t('login')}
      titleStyle='w-full mt-7'
      
      />
      <Text className='text-white text-center mt-5'>
      Don’t have an account? {counter}<Link href='/sign-up' className='text-secondary'> {t('sign-up')} </Link>
      </Text>
      

    </View>
    </SafeAreaView>
  )
}

export default SignIn