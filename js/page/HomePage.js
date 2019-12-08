/**
 * 主页面
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class HomePage extends React.Component {
  render() {
    return (
      <View style={styles.HomePage}>
        <Text>HomePage</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  HomePage: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
});
