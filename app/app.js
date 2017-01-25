
import React from 'react';
import {
  View,
} from 'react-native';
import DiscoverVenue from './containers/DiscoverVenue';
import FilterVenue from './containers/FilterVenue';

const App = () => (
  <View style={{ flex: 1, flexGrow: 1, paddingTop: 20 }}>
    <FilterVenue />
    <DiscoverVenue />
  </View>
);

export default App;
