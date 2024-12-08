import { TextInput } from 'react-native'
import React from 'react'

import { styles } from './BatTextInputStyles'

export default function BatTextInput() {
  return (
    <TextInput 
        placeholder='Password'
        style={styles.input}
    /> 
   
  )
}