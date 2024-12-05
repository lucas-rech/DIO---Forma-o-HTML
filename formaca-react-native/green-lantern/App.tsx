import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const widthScreen = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const [symbol, setSymbol] = useState('')
  const [batman, setBatman] = useState('')
  let isActive = true;

  const handleSimbol = () => {
    isActive = !isActive
    if (isActive === true) {
      setSymbol('https://www.pngkey.com/png/full/0-7606_batman-logo-no-backgound-clip-art-at-clipart.png');
      setBatman('Eu sou o Batman!');
    } else {
      setSymbol('/');
      setBatman('');
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onLongPress={handleSimbol}>
        <Image
          source={{uri: `${symbol}`}}
          style={
            [styles.image, {
              width: widthScreen * 0.9,
              height: height * 0.4
            }]
          }
        />
        <Text
          style={styles.mainText}
        >{batman}</Text>
      </TouchableOpacity>
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    resizeMode: 'contain'
  },

  mainText: {
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Courier New',
    fontSize: 20

  }
});
