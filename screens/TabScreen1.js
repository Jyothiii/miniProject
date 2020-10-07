import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Header, Container, Left, Icon } from 'native-base'

class TabScreen1 extends Component {
    render() {
        return (

            <View style={styles.container}>
                <Text>Inside tab bar1</Text>
                <Button title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        justifyContent:'center',
        alignItems:'center',
        
    }

})

export default TabScreen1
