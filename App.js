// import React from 'react';
// import { StyleSheet, Text, View,Image } from 'react-native';
// import Afford from './src/afford.js';
import React from 'react';
import { StyleSheet, View, Image,WebView,TextInput,TouchableOpacity} from 'react-native';
import Display from 'react-native-display';
import {
  Button,
  Text

} from "native-base";
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

import { Dropdown } from 'react-native-material-dropdown'; // 0.7.2
import { Card } from 'react-native-elements';
import Modal from "react-native-modal";
import Slider from 'react-native-slider';
import Privacy from './src/privacy';
import Afford from './src/afford';
import Submit from './src/submit';

  const MainNavigator = createStackNavigator({
   
    Afford: {screen: Afford},
    Privacy: { screen: Privacy},
    Submit: { screen: Submit}
  });
  
  const App = createAppContainer(MainNavigator);
  export default App;
 
