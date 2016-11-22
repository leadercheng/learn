import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, BackAndroid } from 'react-native';
import SearchPage from './searchPage'
import SearchResults from './searchResults';
import PropertyView from './propertyView';

var _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
    if (_navigator && _navigator.getCurrentRoutes().length > 1) {
        // console.warn('back');
        _navigator.pop();
        return true;
    }
    return false;
});

export default class PropertyFinderApp extends Component {
    // renderIOS() {
    //     return (
    //         <NavigatorIOS style={styles.container} initialRoute={{
    //             title: 'Property Finder',
    //             component: SearchPage,
    //         }} />
    //     )
    // }
    navigatorRenderScene = (route, navigator) => {
        _navigator = navigator;
        switch (route.id) {
            case 1:
                return (<SearchPage navigator={navigator} title="Finder" />);
            case 2:
                return (<SearchResults navigator={navigator} title="Result" listings={route.data} />);
            case 3:
                return (<PropertyView title="Property" property={route.data} />);
        }
    }

    render() {
        return (
            <Navigator
                style={styles.container}
                initialRoute={{ id: 1 }}
                renderScene={this.navigatorRenderScene} />
        );
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        BackAndroid.removeEventListener('hardwareBackPress', () => {
            if (_navigator && _navigator.getCurrentRoutes().length > 1) {
                console.log('remove');
                _navigator.pop();
                return true;
            }
            return false;
        });
    }
}

class HelloWorld extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>Hello world!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 30,
        margin: 80,
    },
    container: {
        flex: 1,
    }
});