import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Blink5Seconds extends Component {

    componentDidMount() {

        setInterval(() => (
            this.setState(previousState => (
                { isShowingText: !previousState.isShowingText }
            ))
        ), 5000);
    }

    //state object
    state = { isShowingText: true };

    render() {
        if (!this.state.isShowingText) {
            return null;
        }

        const { test_data } = this.props;

        return (
            <View>
                <Text style={style.td_css}>{test_data}</Text>
                <Text style={style.td_css}>{test_data}</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    td_css: {
        flex: 0.2,
        flexDirection: 'row',
        backgroundColor: 'purple',
        color: 'skyblue',
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "steelblue",
    }
});

export default Blink5Seconds;