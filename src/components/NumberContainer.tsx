import React, { ReactNode } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../../constants/colors';
const NumberContainer = (props: { children: ReactNode }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 22,
    color: Colors.accent,
  },
});
export default NumberContainer;
