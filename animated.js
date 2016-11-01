import React, { Component } from 'react';
import { View, Text, Animated, StyleSheet, Easing, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Entrance extends Component {
  // static propTypes = {
  //   hideThis: React.PropTypes.func.isRequired,
  // };

  constructor() {
    super();
    this.state = {
      transformAnim: new Animated.Value(1),
      opacityAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(
      this.state.transformAnim,
      {
        toValue: 5,
        duration: 12000,
        delay: 0,
        easing: Easing.elastic(0),
      },
    ).start();
    Animated.timing(
      this.state.opacityAnim,
      {
        toValue: 1,
        duration: 12000,
        easing: Easing.elastic(1),
        delay: 0,
      },
    ).start();
    // setTimeout(() => {
    //   this.props.hideThis();
    // }, 3300);              
  }

  render() {
    const AnimatedIcon = Animated.createAnimatedComponent(Icon);
    return (
      <View>
        <Animated.View style={[styles.entrance, { opacity: this.state.opacityAnim }]}>
          <AnimatedIcon name="logo-twitter" size={60} style={[styles.twitter, { transform: [{ scale: this.state.transformAnim }] }]} />
        </Animated.View>
        <Text>Hello Lee</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  entrance: {
    position: "absolute",
    top: 0,
    left: 0,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: "#1b95e0",
    alignItems: "center",
    justifyContent: "center"
  },
  twitter: {
    color: "#fff",
    position: "relative",
    top: -20,
    textAlign: "center"
  },

});