import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableHighlight } from 'react-native';
import SearchPage from './searchPage'
export default class PropertyFinderApp extends Component {
    render() {
        const routes = [
            { title: 'Property Finder', index: 0 },
            { title: 'Hello world', index: 1 },
        ];
        return (
            <Navigator style={styles.container} initialRoute={{ title: 'Property Finder', index: 0 }}
                renderScene={(route, navigator) =>
                    <SearchPage navigator={navigator} />
                }
                />
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