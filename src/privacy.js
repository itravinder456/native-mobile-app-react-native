import React, { Component } from 'react';
import {
AppRegistry,
StyleSheet,
ActivityIndicator,
Text,
View,
TouchableOpacity,
WebView,
Platform
} from 'react-native';

export default class Privacy extends Component {
  static navigationOptions = {
    header: null
 }
render() {
return (
<View style={styles.container}>

    <WebView
     renderLoading={()=>{return(<ActivityIndicator style = {{position: 'absolute',left: 0,right: 0, top: 0,bottom: 0,alignItems: 'center',justifyContent: 'center'}}/>)}}
     startInLoadingState
      source={{uri: 'http://affordability.io/mortgage/lander3/privacy_policy.html'}}
      />


       <View  >
      <TouchableOpacity style={styles.topbar}
          onPress={() => this.props.navigation.navigate("Afford")}
        >
        <Text style={{color:"white",fontSize:20}}  >Go Back</Text>
      </TouchableOpacity>
    </View>
  </View>
);
}

}

const styles = StyleSheet.create({
container: {
flex: 1,
marginTop:Platform.OS=== "android"?24:40,

},
topbar: {
height: 50,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: "#103047",
},

});
