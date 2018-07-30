import React, { Component } from 'react'
import MapView from 'react-native-maps';
import { View, StyleSheet, Text } from 'react-native';
import firebase from "react-native-firebase"
export default class MapScreen extends Component {
    
    componentDidMount() {
       
    }
    
    state={
        region: {
            latitude:28.638774,
            longitude:77.366464,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          latitude:"",
          longitude:"",
    }
    onRegionChange(region) {
        ()=> this.setState({ region });
       }
    render() {
        var db = firebase.firestore();
        let getRealTimeUpdates=()=>{
         db.collection("users").doc("Maps").onSnapshot((doc)=>{
       if(doc && doc.exists){
        // alert(JSON.stringify(doc.data()))
        
         data=doc.data();
         Object.keys(data).forEach((name) => {
           this.setState({
             latitude:parseFloat(data['latitude']),
             longitude:parseFloat(data['longitude']),
             region:{
                latitude:parseFloat(data['latitude']),
                longitude:parseFloat(data['longitude']),
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
             }
           })
        
         });
      
     }
     
         })
             }
             getRealTimeUpdates();
        return (
           <View style={styles.container}>
             <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        >
          {!!this.state.latitude && !!this.state.longitude && 
          <MapView.Marker
         coordinate={{"latitude":this.state.latitude,
         "longitude":this.state.longitude}}
         title={"Your Location"}
       />}
        </MapView>
        <Text>Data:{this.state.latitude}</Text>

           </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
    
    },
    map: {
      ...StyleSheet.absoluteFillObject,
      top: 0,
      left:0,
      right:0,
      bottom:0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
});