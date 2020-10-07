import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

function Header(props) {
    const openMenu = () => {
        props.navigation.openDrawer()
    }

    return (

        <View style={styles.header}>
            <MaterialIcons name='menu' size={30} onPress={openMenu} style={styles.icon} />
            <View>
                <Text style={styles.headerStyle}>{props.title}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        width: '100%',

    },
    headerStyle: {
        fontWeight: 'bold'
        // alignSelf:'center'
    },
    icon: {
        position: 'absolute',
        left: 0
    }
})

export default Header
