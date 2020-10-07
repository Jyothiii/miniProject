import React, { Component } from 'react'
import { Text, View,StyleSheet,ActivityIndicator,Image } from 'react-native'

export default class FlashScreen extends Component {
  
    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate(screenName.RenderContent)
        })
    }
    
    render() {
        return (
            
            <View style = {styles.container}>
                <View >
                    <Image style={styles.imageStyle}
                        source={require('../assets/react.png')} />                
                </View>
                <Text style = {styles.textStyle}>Splash Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    imageStyle:{
        borderRadius: 10 
    },
    textStyle:{
        fontWeight:'bold',
        padding:20
    }
    
})