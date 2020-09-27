// import React from 'react';
// import { StyleSheet, Text, View,Image } from 'react-native';
// import Afford from './src/afford.js';
import React from 'react';
import { StyleSheet, View, Image,WebView,TextInput,TouchableOpacity,TouchableHighlight,Picker} from 'react-native';
import Display from 'react-native-display';
import {
  Button,
  Text,
  Container,
  Header,
  Content,
  Footer,
  FooterTab

} from "native-base";
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

//import { Dropdown } from 'react-native-material-dropdown'; // 0.7.2
import { Card } from 'react-native-elements';
import Modal from "react-native-modal";
import Slider from 'react-native-slider';
// import Privacy from './src/privacy';

export default class Afford extends React.Component {
  static navigationOptions = {
    header: null
 }
  // static App = createStackNavigator({
   
  //   Privacy: {
  //     screen: Privacy,
  //   },
   
  // }, {
  //     initialRouteName: 'App',
  // });
  constructor(props) {
    super(props);
    this.state = {
      report_type: "quick",
      enable_back: true,
      enable_next: true,
      enable_submit:false,
      index: 0,
      privacy_enable:false,
      value: 75000,
      mortage_value:50000,
      current_interest_value: 75.50,
      down_payment_value:15.00,
      isModalVisible: false,
      mainModal:false,
      isReady: false,
      validationvalue:0,
      validationvalue_one:0,
      validationvalue_oneone:0,
      validationvalue_two:0,
      validationvalue_three:0,
      validation_seven:0,
      loan_type:'',
      validationvalue_nine:0,
      mortage_late:'',
      validationvalue_eleven:0,
      address:'',
      city:'',
      zip:'',
      property:'',
      fname:"",
      lname:"",
      phone:"",
      email:"",
      errorvalue:"",
      showimage1:false,
      showimage2:false,
      image_one:0,
      image_two:0,
      image_three:0,
      image_four:0,
      hideimage1:false,
      hideimage2:false,
      hideimage3:false,
      hideimage4:false,
      image_five:0,
      image_six:0,
      image_seven:0,
      image_eight:0,
      hideimage5:false,
      hideimage6:false,
      hideimage7:false,
      hideimage8:false,

    }

  }
  Terms(){
    this.setState({ mainModal: !this.state.mainModal });
  }
  nextButtonQuick() {
    if (this.state.index <13) {
      // if((this.state.validationvalue_one==1 || this.state.validationvalue_oneone==1) && this.state.index ==0){
      //   this.setState({
      //     index:  1,
      //     errorvalue:"",
      //     // enable_next: true,
      //    // enable_back: false,
      //     // enable_submit:false
      //   });
      // }

      //  if(this.state.validationvalue_one ==0 && this.state.validationvalue_oneone ==0 && this.state.index ==0)  {
      //   this.setState({
      //     enable_back:false,
      //     errorvalue:"Please select an option to continue..."
      //   });
      // }
      // if(this.state.image_four==1 || this.state.image_three==1 || this.state.image_two==1 || this.state.image_one==1 ){
      //   this.setState({
      //     index:  2,
      //     errorvalue:""
      //     // enable_next: true,
      //     // enable_back: true,
      //     // enable_submit:false
      //   });
      // }
      // else if(this.state.image_four==0 && this.state.image_three==0 && this.state.image_two==0 && this.state.image_one==0  && this.state.index ==1){
      //   this.setState({
      //     errorvalue:"Please select an option to continue..."
      //   });
      // }
      // if(this.state.image_five==1 || this.state.image_six==1 || this.state.image_seven==1 || this.state.image_eight==1){
      //   this.setState({
      //     index:  3,
      //     errorvalue:""
      //     // enable_next: true,
      //     // enable_back: true,
      //     // enable_submit:false
      //   });
      // }
      // else if(this.state.image_five==0 && this.state.image_six==0 && this.state.image_seven==0 && this.state.image_eight==0 && this.state.index ==2) {
      //   this.setState({
         
      //     errorvalue:"Please select an option to continue..."
      //   });
      // }
      // if(this.state.index == 3){
      //   this.setState({
      //     index:  4,
      //     // enable_next: true,
      //     // enable_back: true,
      //     // enable_submit:false
      //   });
      // }
      // if(this.state.index == 4){
      //   this.setState({
      //     index:  5,
      //     // enable_next: true,
      //     // enable_back: true,
      //     // enable_submit:false
      //   });
      // }
      // if(this.state.index == 5){
      //   this.setState({
      //     index:  6,
      //     // enable_next: true,
      //     // enable_back: true,
      //     // enable_submit:false
      //   });
      // }
      // if(this.state.index == 6){
      //   this.setState({
      //     index:  7,
      //     // enable_next: true,
      //     // enable_back: true,
      //     // enable_submit:false
      //   });
      // }
      // if(this.state.validation_seven==1 && this.state.index==7){
      //   this.setState({
      //     index:  8,
      //     errorvalue:""
      //     // enable_next: true,
      //     // enable_back: true,
      //     // enable_submit:false
      //   });
      // }
      // else if(this.state.validation_seven!=1 && this.state.index==7){
      //   this.setState({
      //     index:  this.state.index,
      //     errorvalue:"Please select an option to continue..."
      //     // enable_next: true,
      //     // enable_back: true,
      //     // enable_submit:false
      //   });
      // }
      // // else if(this.state.validation_seven!=1 && this.state.index==6){
      // //   this.setState({
         
      // //     errorvalue:"Please select an option to continue..."
      // //   });
      // // }
      // if(this.state.loan_type=="Fixed" || this.state.loan_type=="Adjustable" ){
      //   this.setState({
      //     index:  9,
      //     errorvalue:""
      //     // enable_next: true,
      //     // enable_back: true,
      //     // enable_submit:false
      //   });
      // } 
      // else if((this.state.loan_type!="Fixed" || this.state.loan_type!="Adjustable") && this.state.index== 8){
      //   this.setState({
      //     index:  this.state.index,
      //     errorvalue:"Please select an option to continue..."
      //     // enable_next: true,
      //     // enable_back: true,
      //     // enable_submit:false
      //   });
      // } 
      // if(this.state.validationvalue_nine==1){
      //   this.setState({
      //     index:  10,
      //     errorvalue:""
      //     // enable_next: true,
      //     // enable_back: true,
      //     // enable_submit:false
      //   });
      // }
      // else if(this.state.validationvalue_nine!=1 && this.state.index==9){
      //   this.setState({
      //     index:  this.state.index,
      //     errorvalue:"Please select an option to continue..."
      //     // enable_next: true,
      //     // enable_back: true,
      //     // enable_submit:false
      //   });
      // }
      // if(this.state.mortage_late =="I'm not behind" || this.state.mortage_late =="One" || this.state.mortage_late =="ONE OR TWO" || this.state.mortage_late =="TWO OR MORE" || this.state.mortage_late =="THREE OR MORE"){
      //   this.setState({
      //     index:  11,
      //     errorvalue:""
      //     // enable_next: true,
      //     // enable_back: true,
      //     // enable_submit:false
      //   });
      // }
      // else if(!this.state.mortage_late && this.state.index==10){
      //   this.setState({
      //     index:  this.state.index,
      //     errorvalue:"Please select an option to continue..."
      //     // enable_next: true,
      //     // enable_back: true,
      //     // enable_submit:false
      //   });
      // } 
      // if(this.state.validationvalue_eleven==1){
      //   this.setState({
      //     index:  12,
      //     errorvalue:""
      //     // enable_next: true,
      //     // enable_back: true,
      //     // enable_submit:false
      //   });
      // }
      // else if(this.state.validationvalue_eleven!=1 && this.state.index==11){
      //   this.setState({
      //     index:  this.state.index,
      //     errorvalue:"Please select an option to continue..."
      //     // enable_next: true,
      //     // enable_back: true,
      //     // enable_submit:false
      //   });
      // }
      // if(!this.state.address && !this.state.city && !this.state.zip && this.state.index==12 ){
      //   this.setState({
      //     index:  this.state.index,
      //     errorvalue:"Please select an option to continue..."
      //     // enable_next: true,
      //     // enable_back: true,
      //     // enable_submit:false
      //   });
      // }
      // if(this.state.address && this.state.city && this.state.zip && this.state.index==12 ){
      //   this.setState({
      //     index:  13,
      //     errorvalue:""
      //     // enable_next: true,
      //     // enable_back: true,
      //     // enable_submit:false
      //   });
      // }
      // if(!this.state.fname && !this.state.lname && !this.state.phone && !this.state.email && this.state.index==13 ){
      //   this.setState({
          
      //     errorvalue:"Please select an option to continue...",
      //     // enable_next: true,
      //     // enable_back: true,
      //     //enable_submit:true
      //   });
      // }
      // if(this.state.fname && this.state.lname && this.state.phone && this.state.email && this.state.index==13 ){
      //   this.setState({
      //     index:  this.state.index,
      //     errorvalue:"",
      //     // enable_next: true,
      //     // enable_back: true,
      //      enable_submit:true
      //   });
      // }
      this.setState({
        index: this.state.index + 1,
        enable_next: true,
        enable_back: true,
        enable_submit:false
      });
      // if(this.state.index == 0) {
      //   this.setState ({
      //     enable_next: true,
      //     enable_back:false,
      //     enable_submit:false
      //   });
      // }
    }
     if(this.state.index == 12) {
       this.setState ({
         enable_next: false,
         enable_back:true,
         enable_submit:true
       });
     }
     if(this.state.index == 0) {
      this.setState ({
        enable_next: true,
        enable_back:true,
        enable_submit:false
      });
    }


  }
  backButtonQuick() {
    if (this.state.index < 14) {
      this.setState({
        index: this.state.index - 1,
        enable_next: true,
        enable_back: true,
        enable_submit:false
      });
    }
     if(this.state.index == 0) {
       this.setState({
         index: this.state.index,
         enable_next: true,
         enable_back:false
       });
     }
     if(this.state.index == 1) {
       this.setState({
         // index: this.state.index,
         enable_next: true,
         // enable_sleepinputs:false,
         enable_back:false
       });
     }


  }
  Privacy(){
    this.setState({
      privacy_enable:true
    })
  }
  change(value) {
    this.setState( {
      
        value: parseFloat(value),
    
    });
  }
  Mortage(value){
    this.setState( {
      
      mortage_value: parseFloat(value),
  
  });
  }
  CurrentInterest(value){
    this.setState( {
      
      current_interest_value: parseFloat(value),
  
  });
  }
  DownPayment(value){
    this.setState( {
      
      down_payment_value: parseFloat(value),
  
  });
  }
  SubmitButton(){
    this.props.navigation.navigate("Submit")
    this.setState({ 
      //isModalVisible: !this.state.isModalVisible,
      index:0,
      enable_submit:false,
      enable_back:false,
      enable_next:true,
      validationvalue_one:0,
      validationvalue_oneone:0,
      showimage1:false,
      showimage2:false,
      image_one:0,
      image_two:0,
      image_three:0,
      image_four:0,
      hideimage1:false,
      hideimage2:false,
      hideimage3:false,
      hideimage4:false,
      image_five:0,
      image_six:0,
      image_seven:0,
      image_eight:0,
      hideimage5:false,
      hideimage6:false,
      hideimage7:false,
      hideimage8:false,
     });
  }
  Dismiss(){
    this.setState({ mainModal: !this.state.mainModal });
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    Ionicons: require("native-base/Fonts/Ionicons.ttf"),
    MaterialIcons: require('@expo/vector-icons/fonts/MaterialIcons.ttf'),
    FontAwesome: require('@expo/vector-icons/fonts/FontAwesome.ttf'),
    MaterialCommunityIcons:require('@expo/vector-icons/fonts/MaterialCommunityIcons.ttf')
    });
    this.setState({ isReady: true });
    }
    PrivacyPolicy(){
      this.props.navigation.navigate("Privacy")
      
    }
    Validation(){
      this.setState({
        validationvalue:1
      })
    }
    ValidationOne(){
      this.setState({
        validationvalue_one:1,
        showimage1:true,
        showimage2:false,
        validationvalue_oneone:0,
        index:1
      })
      // if(this.state.validationvalue_one == 1){
      //   this.setState({
      //    index:1
      //   })
      // }
      // if(this.state.validationvalue_one==1 && this.state.validationvalue_oneone == 0){
      //   this.setState({
      //     validationvalue_oneone:0,
      //     showimage1:true,
      //     showimage2:false
      //   })
      // }
    }
    ValidationOneOne(){
      this.setState({
        validationvalue_oneone:1,
        showimage1:false,
        showimage2:true,
        validationvalue_one:0,
        index:1
      })
      // if(this.state.validationvalue_oneone==1){
      //   this.setState({
      //     validationvalue_one:0,
      //     showimage2:true,
      //     showimage1:false
      //   })
      // }
    }
    ImageOne(){
      this.setState({
        image_one:1,
        image_two:0,
        image_three:0,
        image_four:0,
        hideimage1:true,
        hideimage2:false,
        hideimage3:false,
        hideimage4:false,
        index:2
      })
    }
    ImageTwo(){
      this.setState({
        image_one:0,
        image_two:1,
        image_three:0,
        image_four:0,
        hideimage1:false,
        hideimage2:true,
        hideimage3:false,
        hideimage4:false,
        index:2
      })
    }
    ImageThree(){
      this.setState({
        image_one:0,
        image_two:0,
        image_three:1,
        image_four:0,
        hideimage1:false,
        hideimage2:false,
        hideimage3:true,
        hideimage4:false,
        index:2
      })
    }
    ImageFour(){
      this.setState({
        image_one:0,
        image_two:0,
        image_three:0,
        image_four:1,
        hideimage1:false,
        hideimage2:false,
        hideimage3:false,
        hideimage4:true,
        index:2
      })
    }
    ImageFive(){
      this.setState({
        image_five:1,
        image_six:0,
        image_seven:0,
        image_eight:0,
        hideimage5:true,
        hideimage6:false,
        hideimage7:false,
        hideimage8:false,
        index:3
      })
    }
    ImageSix(){
      this.setState({
        image_five:0,
        image_six:1,
        image_seven:0,
        image_eight:0,
        hideimage5:false,
        hideimage6:true,
        hideimage7:false,
        hideimage8:false,
        index:3
      })
    }
    ImageSeven(){
      this.setState({
        image_five:0,
        image_six:0,
        image_seven:1,
        image_eight:0,
        hideimage5:false,
        hideimage6:false,
        hideimage7:true,
        hideimage8:false,
        index:3
      })
    }
    ImageEight(){
      this.setState({
        image_five:0,
        image_six:0,
        image_seven:0,
        image_eight:1,
        hideimage5:false,
        hideimage6:false,
        hideimage7:false,
        hideimage8:true,
        index:3
      })
    }
    ValidationTwo(){
      this.setState({
        validationvalue_two:1
      })
    }
    ValidationThree(){
      this.setState({
        validationvalue_three:1
      })
    }
    ValidationSeven(){
      this.setState({
        validation_seven:1,
        index:8
      })
    }
    changeLoanType(value){
         this.setState({
           loan_type:value
         })
    }
    ValidationNine(){
      this.setState({
        validationvalue_nine:1,
        index:10
      })
      
    }
    
    changeMortageLates(value){
      this.setState({
        mortage_late:value
      })
 }
 
 ValidationEleven(){
  this.setState({
    validationvalue_eleven:1,
    index:12
  })
  
}
Address(text){
  this.setState({
    address:text
  })
}
City(text){
  this.setState({
    city:text
  })
}
Property(text){
  this.setState({
    property:text
  })
}
Zip(text){
  this.setState({
    zip:text
  })
}
FName(text){
  this.setState({
    fname:text
  })
}
LName(text){
  this.setState({
    lname:text
  })
}
Phone(text){
  this.setState({
    phone:text
  })
}
Email(text){
  this.setState({
    email:text
  })
}
render() {
  if (this.state.isReady) {
    return (
      <Container>
          <Header style={{backgroundColor:"white",marginTop:40,height:100}}>
              <View style={{alignItems: 'center',flex: 1,justifyContent: 'center'}} >
                  <Image
                    source={require('../assets/main.png')}
                  />
              </View>
          </Header>
          <Content style={{}} >
           <View style={{flex: 1,flexDirection: 'column',justifyContent: "center"}}>
            {this.state.index===0 &&
             <View>
             <View style={{ height: 100, backgroundColor: '',justifyContent: "center"}}>
               <View style={{alignContent: 'center'}}>
                 <Text style={{fontSize:26,fontWeight:"bold",textAlign:"center"}} >
                   Pick Your Loan Type
                 </Text>
               </View>
             </View>
             <View style={{ backgroundColor: '',justifyContent: "center",padding:"7%"}}>
             <View style={{flexDirection:"row"}}>
               <View style={{alignItems: 'flex-start',margin:"5%"}}>
                {this.state.validationvalue_one == 0 &&
                  <TouchableOpacity onPress={this.ValidationOne.bind(this)}>
                    <Image
                      style={{ width: 110, height: 110 }}
                      source={require('../assets/purchase_img.png')}
                    />
                  </TouchableOpacity>
                }
                {( this.state.showimage1==true )&&
                  <Image
                  style={{ width: 110, height: 110 }}
                  source={require('../assets/Tick_mark.png')}
                  />
                }
                 <View  style={{alignSelf: 'center',margin:5}}>
                   <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center"}}>Refinance</Text>
                 </View>
               </View>
               <View style={{alignItems: 'flex-end',margin:"5%",position:"absolute",right:0}}>
               {this.state.validationvalue_oneone == 0 &&
               <TouchableOpacity onPress={this.ValidationOneOne.bind(this)}>
                 <Image
                   style={{ width: 110, height: 110 }}
                   source={require('../assets/refinance_img.png')}
                 />
                 </TouchableOpacity>
               }
               {( this.state.showimage2==true )&&
                  <Image
                  style={{ width: 110, height: 110 }}
                  source={require('../assets/Tick_mark.png')}
                  />
                }
                 <View  style={{alignSelf: 'center',margin:5}}>
                   <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center"}}>Purchase</Text>
                 </View>
               </View>
             </View>
           </View>
           </View>
            }
            {this.state.index===1 &&
             <View>
             <View style={{ height: 100, backgroundColor: '',justifyContent: "center"}}>
               <View style={{alignContent: 'center'}}>
                 <Text style={{fontSize:26,fontWeight:"bold",textAlign:"center"}} >
                    Property Type
                 </Text>
               </View>
             </View>
             <View style={{ backgroundColor: '',justifyContent: "center"}}>
             <View style={{flexDirection:"row",}}>
               <View style={{alignItems: 'flex-start',margin:"5%"}}>
                 <Image
                   style={{ width: 80, height: 80 }}
                   source={require('../assets/purchase_img.png')}
                 />
                 <View  style={{alignSelf: 'center',margin:5}}>
                   <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center"}}>Small</Text>
                 </View>
               </View>
               <View style={{alignItems: 'flex-end',position:"absolute",right:0,margin:"5%"}}>
                 <Image
                   style={{ width: 80, height: 80 }}
                   source={require('../assets/refinance_img.png')}
                 />
                 <View  style={{alignSelf: 'center',margin:5}}>
                   <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center"}}>Multi</Text>
                 </View>
               </View>
             </View>
             <View style={{flexDirection:"row",marginLeft:5,marginRight:5}}>
               <View style={{alignItems: 'flex-start',margin:"5%"}}>
                 <Image
                   style={{ width: 80, height: 80 }}
                   source={require('../assets/purchase_img.png')}
                 />
                 <View  style={{alignSelf: 'center',margin:5}}>
                   <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center"}}>second</Text>
                 </View>
               </View>
               <View style={{alignItems: 'flex-end',position:"absolute",right:0,margin:"5%"}}>
                 <Image
                   style={{ width: 80, height: 80 }}
                   source={require('../assets/refinance_img.png')}
                 />
                 <View  style={{alignSelf: 'center',margin:5}}>
                   <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center"}}>third</Text>
                 </View>
               </View>
             </View>
           </View>
           </View>
            }
            {this.state.index===2 &&
             <View>
             <View style={{ height: 100, backgroundColor: '',justifyContent: "center"}}>
               <View style={{alignContent: 'center'}}>
                 <Text style={{fontSize:26,fontWeight:"bold",textAlign:"center"}} >
                   How is Your Credit?
                 </Text>
               </View>
             </View>
             <View style={{ backgroundColor: '',justifyContent: "center"}}>
             <View style={{flexDirection:"row",}}>
               <View style={{alignItems: 'flex-start',margin:"5%",alignSelf:"center"}}>
                 <Image
                   style={{ width: 80, height: 80 }}
                   source={require('../assets/purchase_img.png')}
                 />
                 <View  style={{alignSelf: 'center',margin:5}}>
                   <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center"}}>Excellent</Text>
                 </View>
               </View>
               <View style={{alignItems: 'flex-end',position:"absolute",right:0,margin:"5%",alignSelf:"center"}}>
                 <Image
                   style={{ width: 80, height: 80 }}
                   source={require('../assets/refinance_img.png')}
                 />
                 <View  style={{alignSelf: 'center',margin:5}}>
                   <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center"}}>Good</Text>
                 </View>
               </View>
             </View>
             <View style={{flexDirection:"row",marginLeft:5,marginRight:5}}>
               <View style={{alignItems: 'flex-start',margin:"5%"}}>
                 <Image
                   style={{ width: 80, height: 80 }}
                   source={require('../assets/purchase_img.png')}
                 />
                 <View  style={{alignSelf: 'center',margin:5}}>
                   <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center"}}>Sad</Text>
                 </View>
               </View>
               <View style={{alignItems: 'flex-end',position:"absolute",right:0,margin:"5%"}}>
                 <Image
                   style={{ width: 80, height: 80 }}
                   source={require('../assets/refinance_img.png')}
                 />
                 <View  style={{alignSelf: 'center',margin:5}}>
                   <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center"}}>Bad</Text>
                 </View>
               </View>
             </View>
           </View>
           </View>
            }
            {this.state.index===3 &&
             <View>
             <View style={{ height: 100, backgroundColor: '',justifyContent: "center"}}>
               <View style={{alignContent: 'center'}}>
                 <Text style={{fontSize:26,fontWeight:"bold",textAlign:"center"}} >
                   Property Value
                 </Text>
               </View>
             </View>
             <View style={{ backgroundColor: '',justifyContent: "center",padding:"7%"}}>
             <View>
             <Slider
                      
                      trackStyle={{height:20}}
                      thumbStyle={{width:30,height:30}}
                      minimumTrackTintColor="blue"
                      maximumTrackTintColor="green"
                step={25000}
                maximumValue={2000000}
                onValueChange={this.change.bind(this)}
                value={this.state.value}
              />
             </View>
             <View style={{margin:"8%"}}>
              <Text style={{fontSize:24,textAlign:"center"}}>{"$"+this.state.value}</Text>
              </View>
            
           </View>
           </View>
            }
            {this.state.index===4 &&
             <View>
             <View style={{ height: 100, backgroundColor: '',justifyContent: "center"}}>
               <View style={{alignContent: 'center'}}>
                 <Text style={{fontSize:26,fontWeight:"bold",textAlign:"center"}} >
                 Mortgage Balance
                 </Text>
               </View>
             </View>
             <View style={{ backgroundColor: '',justifyContent: "center",padding:"7%"}}>
             <View>
             <Slider
               
               trackStyle={{height:20}}
               thumbStyle={{width:30,height:30}}
               minimumTrackTintColor="blue"
               maximumTrackTintColor="green"
        step={25000}
        maximumValue={2000000}
        onValueChange={this.Mortage.bind(this)}
        value={this.state.mortage_value}
      />
             </View>
             <View style={{margin:"8%"}}>
              <Text style={{fontSize:24,textAlign:"center"}}>{"$"+this.state.mortage_value}</Text>
              </View>
            
           </View>
           </View>
            }
            {this.state.index===5 &&
             <View>
             <View style={{ height: 100, backgroundColor: '',justifyContent: "center"}}>
               <View style={{alignContent: 'center'}}>
                 <Text style={{fontSize:26,fontWeight:"bold",textAlign:"center"}} >
                 Current Interest Rate
                 </Text>
               </View>
             </View>
             <View style={{ backgroundColor: '',justifyContent: "center",padding:"7%"}}>
             <View>
             <Slider
               
               trackStyle={{height:20}}
               thumbStyle={{width:30,height:30}}
               minimumTrackTintColor="blue"
               maximumTrackTintColor="green"
               
              
       
        step={10}
        maximumValue={100}
        onValueChange={this.CurrentInterest.bind(this)}
        value={this.state.current_interest_value}
      />
             </View>
             <View style={{margin:"8%"}}>
              <Text style={{fontSize:24,textAlign:"center"}}>{"$"+this.state.current_interest_value}</Text>
              </View>
            
           </View>
           </View>
            }
            {this.state.index===6 &&
             <View>
             <View style={{ height: 100, backgroundColor: '',justifyContent: "center"}}>
               <View style={{alignContent: 'center'}}>
                 <Text style={{fontSize:26,fontWeight:"bold",textAlign:"center"}} >
                   How much are you putting down as a down payment?
                 </Text>
               </View>
             </View>
             <View style={{ backgroundColor: '',justifyContent: "center",padding:"7%"}}>
             <View>
             <Slider
               
               trackStyle={{height:20}}
               thumbStyle={{width:30,height:30}}
               minimumTrackTintColor="blue"
               maximumTrackTintColor="green"
        step={8}
        maximumValue={100}
        onValueChange={this.DownPayment.bind(this)}
        value={this.state.down_payment_value}
      />
             </View>
             <View style={{margin:"8%"}}>
              <Text style={{fontSize:24,textAlign:"center"}}>{"$"+this.state.down_payment_value}</Text>
              </View>
            
           </View>
           </View>
            }
            {this.state.index===7 &&
             <View>
             <View style={{ height: 100, backgroundColor: '',justifyContent: "center"}}>
               <View style={{alignContent: 'center'}}>
                 <Text style={{fontSize:26,fontWeight:"bold",textAlign:"center"}} >
                    Any bankruptcy in the past 3 years?
                 </Text>
               </View>
             </View>
             <View style={{padding:10}}>
              <View style={{ width: 130 ,margin:"3%",alignSelf:"center"}} >
                <Button block success rounded onPress={this.ValidationSeven.bind(this)}>
                  <Text style={{fontWeight:"bold",fontSize:18}}>yes</Text>
                </Button>
              </View>
              <View style={{ width: 130,margin:"3%",alignSelf:"center"}} >
                <Button block danger rounded  onPress={this.ValidationSeven.bind(this)}> 
                  <Text style={{fontWeight:"bold",fontSize:18}}>no</Text>
                </Button>
              </View>
                              
            </View>
           </View>
            }
            {this.state.index===8 &&
             <View style={{padding:"3%",marginTop:"5%"}}>
             <View style={{ height: 100, backgroundColor: '',justifyContent: "center"}}>
               <View style={{alignContent: 'center'}}>
                 <Text style={{fontSize:26,fontWeight:"bold",textAlign:"center"}} >
                    What is your desired loan type?
                 </Text>
               </View>
             </View>
             <View style={{padding:20}}>
             <View style={{ alignSelf:"center",width:300,borderColor:"black",borderWidth:1}}>
                <Picker selectedValue = {this.state.loan_type} onValueChange = {this.changeLoanType.bind(this)}>
               <Picker.Item label = "Select" value = "Select" />
               <Picker.Item label = "Fixed" value = "Fixed" />
               <Picker.Item label = "Adjustable" value = "Adjustable" />
            </Picker>
            </View>         
            </View>
           </View>
            }
            {this.state.index===9 &&
             <View>
             <View style={{ height: 100, backgroundColor: '',justifyContent: "center"}}>
               <View style={{alignContent: 'center'}}>
                 <Text style={{fontSize:26,fontWeight:"bold",textAlign:"center"}} >
                 Are you a Veteran?
                 </Text>
               </View>
             </View>
             <View style={{padding:10}}>
              <View style={{ width: 130 ,margin:"3%",alignSelf:"center"}} >
                <Button block success rounded onPress={this.ValidationNine.bind(this)}>
                  <Text style={{fontWeight:"bold",fontSize:18}}>yes</Text>
                </Button>
              </View>
              <View style={{ width: 130,margin:"3%",alignSelf:"center"}} >
                <Button block danger rounded  onPress={this.ValidationNine.bind(this)}> 
                  <Text style={{fontWeight:"bold",fontSize:18}}>no</Text>
                </Button>
              </View>
                              
            </View>
           </View>
            }
            {this.state.index===10 &&
             <View style={{padding:"3%",marginTop:"5%"}}>
             <View style={{ height: 100, backgroundColor: '',justifyContent: "center"}}>
               <View style={{alignContent: 'center'}}>
                 <Text style={{fontSize:26,fontWeight:"bold",textAlign:"center"}} >
                 How many mortgage lates do you have in the past 12 months?
                 </Text>
               </View>
             </View>
             <View style={{padding:20}}>
             <View style={{ alignSelf:"center",width:300,borderColor:"black",borderWidth:1}}>
             <Picker selectedValue = {this.state.mortage_late} onValueChange = {this.changeMortageLates.bind(this)}>
               <Picker.Item label = "Select" value = "Select" />
               <Picker.Item label = "I'm not behind" value = "I'm not behind" />
               <Picker.Item label = "One" value = "One" />
               <Picker.Item label = "ONE OR TWO" value = "ONE OR TWO" />
               <Picker.Item label = "TWO OR MORE" value = "TWO OR MORE" />
               <Picker.Item label = "THREE OR MORE" value = "THREE OR MORE" />
              
            </Picker>
            </View>         
            </View>
           </View>
            }
            {this.state.index===11 &&
             <View>
             <View style={{ height: 100, backgroundColor: '',justifyContent: "center"}}>
               <View style={{alignContent: 'center'}}>
                 <Text style={{fontSize:26,fontWeight:"bold",textAlign:"center"}} >
                 Would you like to borrow $5,000 or more additional cash?
                 </Text>
               </View>
             </View>
             <View style={{padding:10}}>
              <View style={{ width: 130 ,margin:"3%",alignSelf:"center"}} >
                <Button block success rounded onPress={this.ValidationEleven.bind(this)}>
                  <Text style={{fontWeight:"bold",fontSize:18}}>yes</Text>
                </Button>
              </View>
              <View style={{ width: 130,margin:"3%",alignSelf:"center"}} >
                <Button block danger rounded  onPress={this.ValidationEleven.bind(this)}> 
                  <Text style={{fontWeight:"bold",fontSize:18}}>no</Text>
                </Button>
              </View>
                              
            </View>
           </View>
            }
            {this.state.index===12 &&
             <View>
             <View style={{ height: 90, backgroundColor: '',justifyContent: "center"}}>
               <View style={{alignContent: 'center',padding:5}}>
                 <Text style={{fontSize:26,fontWeight:"bold",textAlign:"center"}} >
                 Please enter your Property Information
                 </Text>
               </View>
             </View>
             <View style={{}}>
             <TextInput  placeholder="Address" placeholderTextColor={'black'} 
                  underlineColorAndroid='transparent' style={styles.password}
                  onChangeText={this.Address.bind(this) }
                    value={this.state.address}>
              </TextInput>
              <TextInput  placeholder="City" placeholderTextColor={'black'} 
                underlineColorAndroid='transparent' style={styles.password}
                onChangeText={this.City.bind(this) }
                value={this.state.city}>
              </TextInput>
              <View style={{ alignSelf:"center",width:250,borderColor:"black",borderWidth:1,marginTop:10}}>
             <Picker selectedValue = {this.state.mortage_late} onValueChange = {this.changeMortageLates.bind(this)}>
               <Picker.Item label = "Select" value = "Select" />
               <Picker.Item label = "I'm not behind" value = "I'm not behind" />
               <Picker.Item label = "One" value = "One" />
               <Picker.Item label = "ONE OR TWO" value = "ONE OR TWO" />
               <Picker.Item label = "TWO OR MORE" value = "TWO OR MORE" />
               <Picker.Item label = "THREE OR MORE" value = "THREE OR MORE" />
              
            </Picker>
            </View>     
            <TextInput  placeholder="Zip" 
              keyboardType="numeric" 
              placeholderTextColor={'black'} 
              underlineColorAndroid='transparent' style={styles.password}
              onChangeText={this.Zip.bind(this) } value={this.state.zip} >
            </TextInput>            
            </View>
           </View>
            }
            {this.state.index===13 &&
             <View>
             <View style={{ height: 90, backgroundColor: '',justifyContent: "center"}}>
               <View style={{alignContent: 'center',padding:5}}>
                 <Text style={{fontSize:26,fontWeight:"bold",textAlign:"center"}} >
                 Please verify you are the homeowner
                 </Text>
               </View>
             </View>
             <View style={{}}>
             <TextInput  placeholder="First Name" placeholderTextColor={'black'} 
                underlineColorAndroid='transparent' style={styles.password}
                onChangeText={this.FName.bind(this) }
                value={this.state.fname}
                 ></TextInput>
                  <TextInput  placeholder="Last Name" placeholderTextColor={'black'} 
                underlineColorAndroid='transparent' style={styles.password}
                onChangeText={this.LName.bind(this) }
                value={this.state.lname}
                 ></TextInput>
                <TextInput  placeholder="Email" placeholderTextColor={'black'} 
                underlineColorAndroid='transparent' style={styles.password}
                onChangeText={this.Email.bind(this) }
                value={this.state.email}
                 ></TextInput>
                  <TextInput  placeholder="Phone Number" 
                   keyboardType="numeric" 
                  placeholderTextColor={'black'} 
                underlineColorAndroid='transparent' style={styles.password}
                onChangeText={this.Phone.bind(this) }
                value={this.state.phone}
                 ></TextInput> 
            </View>
           </View>
            }
            <View style={{ height: 100, backgroundColor: '',justifyContent: "flex-end" }} >
              <View style={{flex: 1,flexDirection:"row",justifyContent: 'center',alignItems: 'center',}}>
                <View style={{alignItems:"flex-start",margin:"5%"}}>
                  <Display
                    enable={this.state.enable_back}
                    >
                    <Button block
                      style={styles.back_btnstyle}
                      onPress={this.backButtonQuick.bind(this)}>
                      <Text>Back</Text>
                    </Button>
                  </Display>
                </View>
                <View style={{alignItems:"flex-end",margin:"5%"}}>
                  <Display
                    enable={this.state.enable_next}
                  >
                    <Button block
                      style={styles.next_btnstyle}
                      onPress={this.nextButtonQuick.bind(this)}>
                      <Text>Next</Text>
                    </Button>
                  </Display>
                </View>
                <View style={{alignItems:"flex-end",margin:"5%"}}>
                  <Display
                    enable={this.state.enable_submit}
                  >
                    <Button block
                      style={styles.submit_btnstyle}
                      onPress={this.SubmitButton.bind(this)}>
                      <Text>Submit</Text>
                    </Button>
                  </Display>
                </View>
              </View>
            </View>
          </View>
        </Content>
        <Footer style={{paddingBottom:"2%",backgroundColor:"white",height:80,paddingTop:"2%"}}>
          <View style={{alignItems: 'center',flex: 1,flexDirection:"row",justifyContent: 'center'}}>
            <View style={{alignItems: 'flex-start'}}>
              <Button  danger 
                  style={styles.privacy}
                  onPress={this.PrivacyPolicy.bind(this)}>
                  <Text>Privacy Policy</Text>
              </Button>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Button  success 
                style={styles.terms}
                onPress={this.Terms.bind(this)}>
                <Text>Terms & Conditions</Text>
              </Button>
            </View>
          </View>
        </Footer>
          { this.state.mainModal &&
            <Modal isVisible={this.state.mainModal}>
              <View style={{ flex: 1,backgroundColor:"#ced7e5" ,width:375 }}>
                <View style={{margin:50}}>
                  <Image
                    source={require('../assets/main.png')}
                  />
                </View>
                <View style={{}}>
                  <Text style={{fontSize:18, textAlign: "center",margin:10}} >
                    *For a Free quote. affordability.io is not associated with the government, and our service is not approved by the government or your lender; and even if you accept this offer and use our services, your lender may not agree to change your loan.    
                  </Text>
                  <Text style={{fontSize:18, textAlign: "center",margin:20}} >
                    Our goal is to provide an easy connection for homeowners seeking information on affordabilityprogram eligibility with a private mortgage broker or attorney who can assist you.
                  </Text>
                </View>
                <View style={{marginLeft:140,marginTop:40}}>
                  <Button primary
                    onPress={this.Dismiss.bind(this)}>
                    <Text>Dismiss</Text>
                  </Button>
                </View>
              </View>
            </Modal>
          }
      </Container>

    );

   
  }
  return <Expo.AppLoading />;
  }
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  next_back_button_styles: {
    flexDirection: "row",
    //alignSelf: "center",
  },
  back_btnstyle: {
    borderRadius:10,
    padding:"3%",
    width:100,
    backgroundColor: "#82546d",
  },
  privacy: {
    borderRadius:10,
    padding:"3%"
  },
  terms: {
    borderRadius:10,
    padding:"3%"
  },
  next_btnstyle: {
    borderRadius:10,
    padding:"3%",
    width:100,
    backgroundColor: "#695677",
  },
  submit_btnstyle: {
    padding:"3%",
    width: 100,
    backgroundColor: "red",
    borderRadius:10
  },
  ploicy_btnstyle: {
    margin: 8,
    width: 170,
    backgroundColor: "white"
  },
  password: {
    width:250,
    height:60,
    backgroundColor:'white',
    borderWidth: 1,
    fontSize:16,
    paddingLeft:10,
    marginTop:10,
    position:'relative',
    borderRadius:5,
    alignSelf:"center",
}

});
