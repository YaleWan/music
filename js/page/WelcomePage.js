/**
 * 欢迎页面
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class WelcomePage extends React.Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      const {navigation} = this.props;
      navigation.navigate('Main');
    }, 5000);
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
  render() {
    return (
      <View style={styles.Contanier}>
        <Text>WelcomePage</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Contanier: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
