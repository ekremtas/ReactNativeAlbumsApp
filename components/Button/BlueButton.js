import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class BlueButton extends Component {
    render() {
        const { children, onPress } = this.props;
        return (
            <TouchableOpacity onPress={onPress} style={style.buttonStyle}>
                <Text style={style.textStyle}>{children}</Text>
            </TouchableOpacity>
        );
    }
}

const style = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 17,
        fontWeight: '700',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        fontFamily: 'Times New Roman'

    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5

    }

});


export default BlueButton;