import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, PanResponder } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MoveCircle extends Component {
	constructor() {
		super();
		this._panResponder = {};
		this._previousLeft = 0;
		this._previousTop = 0;
		this._circleStyles = {};
		this.state = {
			color: "rgba(255,255,255,0.7)",
		};
	}

	_updateNativeStyles = () => {
		this.circle && this.circle.setNativeProps(this._circleStyles);
	}

	componentWillMount() {
		this._previousLeft = 20;
		this._previousTop = 84;
		this._circleStyles = {
			style: {
				left: this._previousLeft,
				top: this._previousTop,
				//backgroundColor: 'green',
			}
		};
		this._panResponder = PanResponder.create({
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
			onMoveShouldSetPanResponder: (evt, gestureState) => true,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
			onPanResponderTerminationRequest: (evt, gestureState) => true,
			onShouldBlockNativeResponder: (evt, gestureState) => {
				// Returns whether this component should block native components from becoming the JS
				// responder. Returns true by default. Is currently only supported on android.
				return true;
			},
			onPanResponderGrant: (evt, gestureState) => {
				// The guesture has started. Show visual feedback so the user knows
				// what is happening!
				// gestureState.d{x,y} will be set to zero now
				this.setState({
					color: "white",
				});
				//this._circleStyles.style.backgroundColor = 'blue';
				this._updateNativeStyles();
			},
			onPanResponderMove: (evt, gestureState) => {
				// The most recent move distance is gestureState.move{X,Y}
				// The accumulated gesture distance since becoming responder is
				// gestureState.d{x,y}
				this._circleStyles.style.left = this._previousLeft + gestureState.dx;
				this._circleStyles.style.top = this._previousTop + gestureState.dy;
				this._updateNativeStyles();
			},
			onPanResponderRelease: (evt, gestureState) => {
				// The user has released all touches while this view is the
				// responder. This typically means a gesture has succeeded
				//this._circleStyles.style.backgroundColor = 'green';
				this.setState({
					color: "rgba(255,255,255,0.7)"
				});
				this._updateNativeStyles();
				this._previousLeft += gestureState.dx;
				this._previousTop += gestureState.dy;
			},
			onPanResponderTerminate: (evt, gestureState) => {
				// Another component has become the responder, so this gesture
				// should be cancelled
				this._panResponder.panHandlers.onPanResponderRelease(evt, gestureState);
			},
		});
	}

	componentDidMount() {
		this._updateNativeStyles();
	}


	render() {
		return (
			<View >
				<Image source={require('../img/agrass.png')} style={styles.bg}></Image>
				<View ref={(circle) => { this.circle = circle; } } style={styles.Circle} {...this._panResponder.panHandlers}>
					<Icon name="ios-baseball" color={this.state.color} size={60} />
				</View>
			</View >
		)
	}
}

const styles = StyleSheet.create({
	bg: {
		width: Dimensions.get('window').width,
		resizeMode: "stretch",
		position: "absolute"
	},
	Circle: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0
	},
});