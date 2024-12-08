import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import * as Clipboard from 'expo-clipboard'

import { styles } from './BatButtonStyles'
import BatTextInput from '../BatTextInput/BatTextInput'
import generatePass from '../../services/passwordService';

export default function BatButton() {

    const [pass, setPass] = useState('');
    const [copiedText, setCopiedText] = useState('');
    const [copyMessage, setCopyMessage] = useState('');

    function handleGenerateButton() {
        //O número da senha é definido dentro da propriedade da função
        let generatedPassword = generatePass(8);
        setPass(generatedPassword)
    }

    // função para copiar o texto para área de trasferencia
    async function copyToClipboard() {
        await Clipboard.setStringAsync(pass);
        setCopyMessage('Copiado para transferência!');

        setTimeout(() => {
            setCopyMessage('');
        }, 1500)
      };




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
                onPress={copyToClipboard}
                style={styles.buttonPressable}
            >
                <Text style={styles.text}>📝 COPY</Text>
            </Pressable>
        </View>
        {copyMessage !== '' && (
            <Text style={styles.copyMessage}>{copyMessage}</Text>)}
    </View>
  )
}