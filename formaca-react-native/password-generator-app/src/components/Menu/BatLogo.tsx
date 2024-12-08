import { View, Text, Image } from 'react-native'
import React from 'react'

import { styles } from './BatLogoStyles'

import batLogo from '../../../assets/bat-logo.png'



export default function BatLogo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        BAT PASS GENERATOR
      </Text>
      <Image 
        source={batLogo} 
        style={styles.image} 
      />
    </View>
  )
}