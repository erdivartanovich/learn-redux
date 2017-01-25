import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

const Filter = ({discover, setVenueCity, tags, cities, selectedCity, setVenueTag, setVenueNearby}) => {
    return (
    <View style={{}}>
        <TouchableOpacity onPress={()=>setVenueNearby(!discover.is_nearby)}>
            <Text>Toggle Nearby {discover.city}</Text>
        </TouchableOpacity>
        <Text style={{marginTop: 10, marginBottom: 10}}>Set city</Text>
        <View>
            {cities.map((city, key)=>
            <TouchableOpacity key={key} onPress={()=>setVenueCity(city)}>
                <Text>{city}</Text>
            </TouchableOpacity>)}
        </View>
        <Text style={{marginTop: 10, marginBottom: 10}}>Set Tag</Text>
        <View>
            {tags.map((tag, key)=>
            <TouchableOpacity key={key} onPress={()=>setVenueTag(tag)}>
                <Text>{tag}</Text>
            </TouchableOpacity>)}
        </View>
    </View>
)};

export default Filter;
