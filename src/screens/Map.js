import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import styles from '../constants/styles'
import { SafeAreaView } from 'react-native-safe-area-context'

// import MapView from 'react-native-maps';
import MapView, { Marker } from 'react-native-maps';

import { useState } from 'react';

const Map = ({navigation}) => {
//------------------------------------------
const [markers, setMarkers] = useState([
  { id: 1, lat: 41.01478, long: 28.9694 },
  // { id: 2, lat: 40.151550, long: 26.405689 },
  // { id: 3, lat: 41.008240, long: 28.978359 },
]);


const handleMapPress = (event) => {
  const { latitude, longitude } = event.nativeEvent.coordinate;
  setMarkers([...markers, { id: markers.length + 1, lat: latitude, long: longitude }]);
};


//------------------------------------------


  return (
    <SafeAreaView style={styles.mapPageContainer}>
      <MapView 
        initialRegion={{
          latitude: 41.01478,
          longitude: 28.9694,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      
        style={{width:"100%", height:"100%"}}
        onPress={handleMapPress}>
           {markers.map((marker, index) => (
          <Marker
            key={index}
            pinColor='red'
            coordinate={{latitude: marker.lat, longitude: marker.long}}
          />
        ))}

        </MapView>
    </SafeAreaView>
  )
}

export default Map

