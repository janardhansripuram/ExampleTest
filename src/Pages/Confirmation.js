import React, {Component} from 'react';
import {Text,ImageBackground,StyleSheet,View,Button,TouchableOpacity} from 'react-native';
import SettingsDivider from '../Components/SettingsDividerLong';
export default class Confirmation extends Component{

    constructor(props){
        super(props)
        console.log("props",this.props.navigation.state)
    }

    moveToStatus(){
        this.props.navigation.navigate('StatusPage',{...this.props})
    }

    render(){
        return(
<ImageBackground source={require('../assets/images.jpeg')} style={styles.container}>

<View style={styles.body}>

<View style={styles.border}>
  <View style={styles.row}>
      <Text style={styles.width}>From Account</Text>
      <View>
      <Text style={styles.right}>{this.props.navigation.state.params.fromAccount.type}</Text>
      <Text style={styles.right}>{this.props.navigation.state.params.fromAccount.number}</Text>
      </View>
     
  </View>
  <SettingsDivider />
  <View style={styles.row}>
      <Text style={styles.width}>Transfer To</Text>
     
      <View>
              <Text style={styles.right}>
                {this.props.navigation.state.params.toAccount.type}
              </Text>
             
              <Text style={styles.right}>
                {this.props.navigation.state.params.toAccount.number}
              </Text>
              </View>
  </View>
</View>

<View style={styles.border}>
  <View style={styles.row}>
      <Text style={styles.width}>When</Text>
      
      <View>
      <Text style={styles.right}>{this.props.navigation.state.params.when}</Text>
      </View>
     
  </View>
  <SettingsDivider />
  <View style={styles.row}>
      <Text style={styles.width}>Amount</Text>
      <View>
      <Text style={styles.amount}> RM {this.props.navigation.state.params.text}</Text>
      </View>
     
  </View>
  <SettingsDivider />
  <View style={styles.row}>
      <Text style={styles.width}>Recipient Reference</Text>
      <View>
      <Text style={styles.right}> {this.props.navigation.state.params.reference}</Text>
      </View>
  </View>
  <SettingsDivider />
  <View style={styles.row}>
      <Text style={styles.width}>Other Payment Details</Text>
      <View>
      <Text style={styles.right}> {this.props.navigation.state.params.otherDetails}</Text>
      </View>
  </View>
</View>  

</View>
<View style={styles.buttonContainer}>
<TouchableOpacity
        style={{width:'40%',height:40,backgroundColor:'grey', 
        alignItems:'center',justifyContent:'center',marginLeft:20}}
        onPress={()=>this.props.navigation.goBack()}
        >
        <Text style={{color:'white', fontSize: 16}}>Cancel</Text>
        </TouchableOpacity>

      <TouchableOpacity
        style={{width:'40%',height:40,backgroundColor:'green', 
        alignItems:'center',justifyContent:'center',marginLeft:50}}
        onPress={()=>this.moveToStatus()}
        >
        <Text style={{color:'white', fontSize: 16}}>Proceed</Text>
        </TouchableOpacity>
    </View>
</ImageBackground>
        );
    }
};
const styles = StyleSheet.create({
    backgroundImage: {
     // flex: 1,
      resizeMode: 'cover', // or 'stretch'
    },
      container: {
        width: '100%',
         height: '100%',
         flex:1
       
      },
      border:{
          borderColor:'white',
          borderWidth:1,
          marginVertical:10,
          borderRadius:5
          
      },
      row:{
          flexDirection:'row',
          marginVertical:5
      },
      right:{
         paddingLeft:20,
         color:'white'
      },
      amount:{
        paddingLeft:20,
        color:'yellow'
      },
      textColor:{
        color:'white'
      },
      body:{
          padding:16
      },
      width:{
          width:'50%',
          paddingLeft:16
      },
      button:{
          width:'50%',
          borderColor:'white',
          borderWidth:1,
          backgroundColor:'red',
          justifyContent: 'space-between', 
          
      },
      buttonContainer:{
        flexDirection: 'row',
        position:'absolute',
        bottom:30,
        
        
       
      }

    });