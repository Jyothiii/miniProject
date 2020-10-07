import React from 'react'
import firebase from 'firebase'
import { View, Button,Alert,StyleSheet} from 'react-native'



const createAlert = () =>
    Alert.alert(
      "Logout",
      "Are you sure?",
      [
        
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress:() => firebase.auth().signOut()}
      ],
      { cancelable: false }
    );


export default function LogOut() {
return(
    <View style = {styles.container}>
        <Button style ={styles.buttonStyle} title="Logout" onPress={createAlert} />
    </View>
    )
}


const styles = StyleSheet.create({
    container:{
        marginVertical:50
    }
})

