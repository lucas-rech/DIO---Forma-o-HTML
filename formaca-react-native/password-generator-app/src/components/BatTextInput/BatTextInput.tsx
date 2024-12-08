import { TextInput } from 'react-native'
import React from 'react'

import { styles } from './BatTextInputStyles'

interface BatTextInputProps {
  pass: string
}

export default function BatTextInput(props : BatTextInputProps) {
  return (
    <TextInput 
        placeholder='Password'
        style={styles.input}
        value={props.pass}
    /> 
   
  )
}