import React, { Component } from 'react';
import { View, Text, StyleSheet, NavigatorIOS } from 'react-native';
import SearchPage from './searchPage'
export default class PropertyFinderApp extends Component {
    render() {
        return (
            <NavigatorIOS style={styles.container} initialRoute={{
                title: 'Property Finder',
                component: SearchPage,
            }} />

        )
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