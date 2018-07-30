/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';
import firebase from "react-native-firebase"
import MapScreen from "./app/MapScreen"
export default class App extends Component {
 
  state={
    data:"",
    name:""
  }
  
  
  render() {
    var db = firebase.firestore();
   let getRealTimeUpdates=()=>{
    db.collection("users").doc("Maps").onSnapshot((doc)=>{
  if(doc && doc.exists){
    data=doc.data();
    Object.keys(data).forEach((name) => {
      // if(name=='latitude')
      this.setState({
        data:JSON.stringify(data['longitude'])
      })
      // (name, data[name]);
    });
 
}

    })
        }
        getRealTimeUpdates();

    return (
      <View style={styles.container}>
      <MapScreen/>
      {/* <TextInput
       style={{height: 40, borderColor: 'gray', borderWidth: 1,width:100}}
      value={this.state.name}
      onChangeText={(text)=>{
        this.setState({
          name:text
        })
      }}
      /> */}
       {/* <Button
       title="Click To Save Data"
       onPress={
         ()=>{
          firebase.firestore().doc("users/LOkENrnEJzY0pKXhTFsd").set({
            first:this.state.name
        })
        .then(function(docRef) {
           alert("Document written with ID: ");
        })
        .catch(function(error) {
           alert("Error adding document: ", error);
        });
         }
       }/> */}
       {/* <Button
       title="Display Data"
       onPress={
         ()=>{
          db.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                alert(JSON.stringify( doc.data()));
                this.setState({
                  data:JSON.stringify(doc.data())
                })
            });
        });
         }
       }
       />
        */}
       {/* <Text>Data:{this.state.data}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
