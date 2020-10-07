import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export class DetailsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>This is Details Screen</Text>
                <Button title="Go Back" onPress={() => this.props.navigation.goBack()} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default DetailsScreen
