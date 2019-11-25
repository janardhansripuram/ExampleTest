import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';

export default class CardView extends Component {
  render() {
  
    const { cardElevation, cornerRadius, shadowOpacity = 0.24 } = this.props;
    if(cardElevation > 0) {
      return(
        <View style={[styles.card, this.props.style]}>
          {this.props.children}
        </View>
      );
    } else {
      return(
        <View style={[{
          borderRadius: cornerRadius,
        }, this.props.style]}>
          {this.props.children}
        </View>
      );
    }

  }
}
const shadow = {
    shadowColor: 'black',
    shadowOffset: {
        width: 0,
        height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
};

const styles = StyleSheet.create({
    card: {
        ...shadow,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        borderRadius: 8,
        elevation: 4,
        margin: 20,
        marginTop: 0,
        padding: 16,
        marginHorizontal: 1,
        marginVertical: 16,
        height: 72,
        opacity:19
    },


});