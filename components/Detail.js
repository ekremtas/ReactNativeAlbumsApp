import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import BlueButton from './Button/BlueButton';

class Detail extends Component {
    render() {
        const { DetailData, id } = this.props;
        return (
            <View style={style.containerStyle}>
                <View style={style.subContainerStyle}>
                    <Text style={style.textHeader}>
                        {" " + id + " | " + DetailData.title + " - " + DetailData.artist}
                    </Text>
                </View>
                <View style={style.subContainerStyle}>
                    <Image style={style.imageStyle} source={{ uri: DetailData.image }} />
                </View>
                <View style={style.subContainerStyle}>
                    <BlueButton onPress={() => Linking.openURL(DetailData.url)}>Satın Al</BlueButton>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
    subContainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },
    textHeader: {
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: '800',
        fontFamily: 'Times New Roman',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
        color: 'black',

    },
    imageStyle: {
        height: 300,
        flex: 1,

    }
});

export default Detail;