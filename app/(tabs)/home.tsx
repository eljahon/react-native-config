import { View, Text, SafeAreaView,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchInput from '@/components/SearchInput'
import request from '@/services/api'
import { StatusBar } from 'expo-status-bar'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import { ScrollView } from 'react-native-reanimated/lib/typescript/Arnimated'

const Home = () => {
  const [reaonsList, seReasonList] = useState([])
  const getEventTemplate =async() => {
    const data = await request.get('/event-temps');
    return data;
  }
  useEffect(() =>{
    getEventTemplate()
    .then(res => {
      console.log(res.data.data);
      const {data} = res;
      seReasonList(res.data.data)
      
    })

     
  } ,[])
  return (
    <SafeAreaView className='bg-primary h-full p-6'>
      <ScrollView>
        <View className='flex justify-center items-center'>
          {reaonsList.length&&reaonsList.map((el, index) => (
            <View key={index}>
              <Text className='text-white'>{el.title}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
   
  )
}

export default Home