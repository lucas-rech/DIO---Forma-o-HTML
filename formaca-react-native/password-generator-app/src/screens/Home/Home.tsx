import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

import styles from './Style'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home works!</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}


