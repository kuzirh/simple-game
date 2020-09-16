import React from 'react';
import { View, Image, StyleSheet, Button, Text } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../../constants/colors';
const GameOverScreen = (props: {
  roundsNumber: number;
  number: number;
  onRestart: any;
}) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          // source={require('../../assets/success.png')}
          source={{
            uri:
              'https://i.kym-cdn.com/entries/icons/original/000/002/691/sings.jpg',
          }}
          style={styles.image}
          resizeMode='cover'
        />
      </View>

      <BodyText style={styles.resultText}>
        Opponent took <Text style={styles.highlight}>{props.roundsNumber}</Text>{' '}
        rounds to guess <Text style={styles.highlight}>{props.number}</Text>
      </BodyText>
      <Button title='NEW GAME?' onPress={props.onRestart} />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
  resultText: { textAlign: 'center', fontSize: 20 },
});
export default GameOverScreen;
