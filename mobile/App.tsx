import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { AppLoading } from 'expo'
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'

import Landing from './src/pages/Landing'

import Container from './src/styles'

const App = () => {
  let [fontLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  })

  if (!fontLoaded) {
    return <AppLoading />
  }
  
  return (
    <Container>
      <StatusBar style="light" />
      
      <Landing />
    </Container>
  )
}

export default App
