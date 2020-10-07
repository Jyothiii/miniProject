import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList, ScrollView } from 'react-navigation';
import axios from 'axios';

class TabScreen2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dummyData: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({
                    dummyData: response.data
                });

            })
        // .catch(error=>{
        //     this.setState({
        //         errorMsg:error.toString()
        //     })
        // })
    }
    render() {
        const { dummyData } = this.state
        return (
            <View style={styles.container}>

                {dummyData.length ?
                    <FlatList 
                    data={dummyData}
                    keyExtractor={(item)=>item.id.toString()}
                    renderItem={
                        ({ item }) => 
                        <Text style={styles.itemStyle}>{item.title}</Text>}
                    /> : null}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemStyle: {
        backgroundColor: 'pink',
        padding: 20,
        marginVertical: 20
    }
})

export default TabScreen2;
