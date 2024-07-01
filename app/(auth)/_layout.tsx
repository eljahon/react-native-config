import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  return (
    <>
    <Stack initialRouteName='sign-in'>


    <Stack.Screen 
      name='sign-in'
      options={
        {
              animationTypeForReplace: 'push',
              animation:'slide_from_right',
          headerShown: false
        }
      }
      /> 
      <Stack.Screen 
      name='sign-up'
      options={
        {
          headerShown: false,
          animationTypeForReplace: 'push',
              animation:'slide_from_right',
        }
      }
      />
    </Stack>
    <StatusBar backgroundColor='#161622' style='light'/>
    </>
  )
}

export default AuthLayout