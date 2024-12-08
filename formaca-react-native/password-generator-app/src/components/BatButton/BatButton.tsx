import { View, Button, Text, Pressable } from 'react-native'
import React from 'react'

import { styles } from './BatButtonStyles'
import BatTextInput from '../BatTextInput/BatTextInput'

export default function BatButton() {
  return (
    <View style={styles.container}>
        <BatTextInput />
        
        <View style={styles.buttonContainer}>
            <Pressable
                onPress={() => {console.log('Fui pressionado')}}
                style={styles.buttonPressable}
            >
                <Text style={styles.text}>GENERATE</Text>
            </Pressable>
            <Pressable
                onPress={() => {console.log('Fui pressionado')}}
                style={styles.buttonPressable}
            >
                <Text style={styles.text}>📝 COPY</Text>
            </Pressable>
        </View>
    </View>
  )
}