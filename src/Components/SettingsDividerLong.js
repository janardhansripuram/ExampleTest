import React, { Component } from 'react';
import {
  StyleSheet, View, Platform,
} from 'react-native';
import PropTypes from 'prop-types';



class SettingsDividerLong extends Component {

  render() {
    const { dividerStyle, ios, android } = this.props;

    return (
      (Platform.OS === 'ios' && ios)
      || (Platform.OS === 'android' && android)
    ) ? <View style={[style.dividerStyle, dividerStyle]} /> : null;
  }
  static propTypes = {
    ios: PropTypes.bool,
    android: PropTypes.bool,
    dividerStyle: PropTypes.object,
  };
  
  static defaultProps = {
    ios: true,
    android: true,
    dividerStyle: {},
  };
}

const style = StyleSheet.create({
  dividerStyle: {
    backgroundColor: 'white',
    height: 1,
    width: '100%',
  },
});
export default SettingsDividerLong;
