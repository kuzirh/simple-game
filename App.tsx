import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';
import StartGameScreen from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen';
import GameOverScreen from './src/screens/GameOverScreen';
export default function App() {
  const [userNumber, setUserNumber] = useState<number>();
  const [guessRounds, setguessRounds] = useState<number>(0);
  const startGameHandler = (selectedNumber: number) => {
    setUserNumber(selectedNumber);
    setguessRounds(0);
  };
  const gameOverHandler = (numOfRounds: number) => {
    setguessRounds(numOfRounds);
  };
  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = <GameOverScreen />;
    console.log('should the game be over?');
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
