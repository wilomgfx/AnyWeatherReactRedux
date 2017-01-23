//Created by wcantin on 2017-01-23.
import React, {Component, PropTypes} from 'react'
import {Text, View, StyleSheet} from 'react-native'

import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  geoLocation: {
    marginTop:50,
    textAlign:'center'
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    flex:1,
    height: 500,
    width: 600,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default class MapViewer extends Component {
  constructor(props) {
    super(props);
  }

      render() {
      const { region } = this.props;

      return (
        <View style={styles.mapContainer}>
          <Text style={styles.geoLocation}>Hello</Text>
          <View style ={styles.container}>
            <MapView
              style={styles.map}
              region={{
                     latitude: 45.561200,
                     longitude: -73.474397,
                     latitudeDelta: 0.0012,
                     longitudeDelta: 0.0010,
                   }}
            >
              <MapView.Marker
                coordinate={{latitude:45.561200 , longitude : -73.474397}}
                title={'You'}
                description="You are here"
              />
            </MapView>
          </View>
        </View>
      );
    }
}