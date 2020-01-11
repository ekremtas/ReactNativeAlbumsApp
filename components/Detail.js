import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Detail extends Component {
    render() {
        const { DetailData, key } = this.props;
        return (
            <View style={style.containerStyle}>
                <View style={style.subContainerStyle}>
                    <Text>
                        {key + " -> " + DetailData.title}
                    </Text>
                </View>
                <View style={style.subContainerStyle}>
                    <Image style={style.ImageStyle} source={{ uri: DetailData.image }} />
                </View>
                <View style={style.subContainerStyle}>

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
    ImageStyle: {
        height: 300,
        flex: 1,

    }
});

export default Detail;