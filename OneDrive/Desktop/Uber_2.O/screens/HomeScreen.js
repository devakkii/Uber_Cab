import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Uberlogo from '../assets/Uber-logo.png';
import NavOptions from '../components/NavOptions';
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <view style={tw `p-5`}>
        <Image
        style={{
          width:100,
          height:100,
          resizeMode:"contain",
        }}
        source={Uberlogo}
        />
      
      <NavOptions/>
      </view>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text:{
        color:'blue',
    }
})