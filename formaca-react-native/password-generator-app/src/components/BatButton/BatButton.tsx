import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'

import { styles } from './BatButtonStyles'
import BatTextInput from '../BatTextInput/BatTextInput'
import generatePass from '../../services/passwordService';

export default function BatButton() {

    const [pass, setPass] = useState('');

    function handleGenerateButton() {
        //O número da senha é definido dentro da propriedade da função
        let generatedPassword = generatePass(8);
        setPass(generatedPassword)
    }


  return (
    <View style={styles.container}>
        <BatTextInput pass={pass}/>

        <View style={styles.buttonContainer}>
            <Pressable
                onPress={handleGenerateButton}
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