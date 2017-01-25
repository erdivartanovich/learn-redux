import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

const Discover = ({discover}) => {
    return (
        <View style={{marginTop: 40, marginBottom: 40, flex: 1}}>
            <View style={{flexDirection: 'row', flex: 1}}>
                <Text style={{elevation: 1,
           shadowColor: 'rgb(0,0,0)',
           shadowOffset: {width: 0, height: 3},
           shadowOpacity: 0.3}}>Response: {JSON.stringify(discover)}</Text>
            </View>
        </View>
    )
};

export default Discover;
