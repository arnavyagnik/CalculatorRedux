/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native';

// Base class Button which will be used everywhere instantiated by react-packager everytime written in jsx using composite inheritence pattern
class Button extends Component {
  constructor(props){
    super(props)
  }

  getButton(){
    if (Platform.OS === 'ios') {
    return  (<TouchableOpacity {...this.props}>
        {this.props.children}
      </TouchableOpacity>)
    } else {
    return (  <TouchableNativeFeedback {...this.props}>
        {this.props.children}
      </TouchableNativeFeedback>)
    }
  }

  render() {
    return (
    <View style={[styles.container,this.props.style]}>
      {this.getButton()}
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Button
