import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import Detail from './Detail';

class ListAlbums extends Component {

    state = { data: [] };

    componentWillMount() {
        console.log("componentWillMount");
        //npm install --save axios
        axios.get("https://rallycoding.herokuapp.com/api/music_albums")
            .then(response => this.setState({ data: response.data }));

    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    renderData() {
        return this.state.data.map(
            responseData =>
                //<Text key={this.state.data.indexOf(responseData)} > {"key : " + this.state.data.indexOf(responseData) + " ->" + responseData.title}</Text >
                <Detail key={this.state.data.indexOf(responseData)} id={this.state.data.indexOf(responseData)} DetailData={responseData} />

        );
    }

    render() {
        console.log(this.state.data);
        console.log("render");
        return (
            <ScrollView>
                {this.renderData()}
            </ScrollView>
        );
    }
}

export default ListAlbums;
