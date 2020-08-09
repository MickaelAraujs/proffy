import React from 'react'
import { StatusBar } from 'expo-status-bar'

import Landing from './src/pages/Landing'

import Container from './src/styles'

const App = () => {
  return (
    <Container>
      <StatusBar style="auto" />
      
      <Landing />
    </Container>
  )
}

export default App
