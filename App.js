import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameOverScreen from './screens/GameOverScreen';
import PlayGameScreen from './screens/PlayGameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const [screenValue,setScreenValue] = useState('startGame');
  const [inputNumber, setInputNumber] = useState('')
  const changeScreen = (value)=>{
    setScreenValue(value)
  }
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['purple', 'gold']}
        style={styles.background}
        start={{x:0,y:0}}
        end={{x:1,y:1}}
      >


        {screenValue=='startGame' && <StartGameScreen inputNumber={inputNumber} setInputNumber={setInputNumber} changeScreen={changeScreen}/>}
        {screenValue=='playGame' && <PlayGameScreen inputNumber={inputNumber} setInputNumber={setInputNumber} changeScreen={changeScreen}/>}
        {screenValue=='gameOver' && <GameOverScreen />}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    padding: 16
    // alignItems: 'center',
    // justifyContent: 'center'
  }
});
