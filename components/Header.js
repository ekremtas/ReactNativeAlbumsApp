import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component {
    render() {

        const { headerText } = this.props;

        return (
            <View style={style.headerView}>
                <Text style={style.textStyle}>{headerText}</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        fontFamily: 'Times New Roman',
    },
    headerView: {
        backgroundColor: 'purple',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,

    }
});


export default Header;


