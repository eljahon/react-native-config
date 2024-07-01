import { Image, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { AuthProvider, useAuth } from '@/context/AuthContext'
import { Redirect, router } from 'expo-router'
// import '../i18n/index'
import AsyncStorage from '@react-native-async-storage/async-storage'
const index = () => {
  const [isAuth, setIsAuth] = useState<boolean>(true)

  useEffect(() => {
    AsyncStorage.getItem('token').then(res => {
      if(Boolean(res)) router.push('/home');
      else router.push('/sign-in')
    })

    // AsyncStorage.clear().then(res => {
    //     router.push('/sign-in')
    // })


  },[])


  return (
    <SafeAreaView className='bg-primary h-full p-4'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full h-full min-h[85vh] mt-4   items-center'>
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  )
}


export default index

// import { Stack, useRouter, useSegments } from 'expo-router';
// import { AuthProvider, useAuth } from '../context/AuthContext';
// import { useEffect } from 'react';
// import { Text, View, SafeAreaView, StatusBar } from 'react-native';

// const StackLayout = () => {
// 	const { authState } = useAuth();
// 	const segments = useSegments();
// 	const router = useRouter();

// 	useEffect(() => {
// 		const inAuthGroup = segments[0] === '(tabs)';

//     // console.log(inAuthGroup, authState?.authenticated, segments);

// 		if (!authState?.authenticated && !inAuthGroup) router.replace('/sign-in')
      
//         if (authState?.authenticated === true) router.replace('/(tabs)');

// 	}, [authState])

// 	return (
// 		<Stack initialRouteName={authState?.authenticated ? 'home' : 'sign-in'}>
// 			<Stack.Screen name="(auth)" options={{ headerShown: false }} />
// 			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
// 		</Stack>
// 	);
// };

// const RootLayoutNav = () => {
// 	return (
// 		<AuthProvider>
//       <SafeAreaView className='bg-primary h-full p-4'>
// 			<StackLayout/>
//       <StatusBar backgroundColor='#161622' style='light' />
//       </SafeAreaView>
// 		</AuthProvider>
// 	);
// };

// export default RootLayoutNav;