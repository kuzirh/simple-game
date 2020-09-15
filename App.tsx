import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';
import StartGameScreen from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen';
export default function App() {
  const [userNumber, setUserNumber] = useState<number>();
  const startGameHandler = (selectedNumber: number) => {
    setUserNumber(selectedNumber);
  };
  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  }
  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
