import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import { Ionicons } from '@expo/vector-icons';
import BodyText from '../components/BodyText';
const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const renderListItem = (
  listLength: number,
  itemData: { index: number; item: string }
) => (
  <View style={styles.listItem}>
    <BodyText style={{}}>#{listLength - itemData.index}</BodyText>
    <BodyText style={{}}>{itemData.item}</BodyText>
  </View>
);

const GameScreen = (props: { userChoice: number; onGameOver: any }) => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [pastGuesses, setSetPastGuesses] = useState<Array<string>>([
    initialGuess.toString(),
  ]);
  const currentLow = useRef<number>(1);
  const currentHigh = useRef<number>(100);
  const { userChoice, onGameOver } = props;
  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);
  const nextGuessHandler = (direction: string) => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert('Don\t lie!', 'lil cheater', [
        {
          text: 'Sorry!',
          style: 'cancel',
        },
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setSetPastGuesses((currentPastGuesses) => [
      nextNumber.toString(),
      ...currentPastGuesses,
    ]);
  };
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onHandleClick={() => nextGuessHandler('lower')}>
          <Ionicons name='md-remove' size={24} color='white' />
        </MainButton>
        <MainButton onHandleClick={() => nextGuessHandler('greater')}>
          <Ionicons name='md-add' size={24} color='white' />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={(item) => item}
          data={pastGuesses}
          renderItem={(item) => renderListItem(pastGuesses.length, item)}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 400,
    maxWidth: '90%',
  },
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  listContainer: {
    width: '80%',
    flex: 1,
  },
  list: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexGrow: 1,
  },
});
export default GameScreen;
