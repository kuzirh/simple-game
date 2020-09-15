import React, { ReactNode } from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = (props: { children: ReactNode }) => (
  <Text style={styles.body}>{props.children}</Text>
);
const styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans',
  },
});
export default BodyText;
