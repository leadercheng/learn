import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MoveCircle extends Component {
	constructor() {
		super();
		this.state = {
			color: "rgba(255,255,255,0.7)",
		};
	}
	//{...this._panResponder.panHandlers}
	render() {
		return (
			<View ref={(circle) => { this.circle = circle; } } style={styles.MoveableCircle}>
				<Icon ref="baseball" name="ios-baseball" color={this.state.color} size={120}></Icon>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  MoveableCircle:{
    backgroundColor:"transparent",
    position:"absolute",
    left:0,
    right:0
  },
});