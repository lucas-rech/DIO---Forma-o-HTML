import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

import styles from './Style'
import BatLogo from '../../components/Menu/BatLogo'
import BatTextInput from '../../components/BatTextInput/BatTextInput'
import BatButton from '../../components/BatButton/BatButton'

export default function Home() {
  return (
    <View style={styles.container}>
      <BatLogo />
      <BatButton />
      <StatusBar style="light" />
    </View>
  )
}


