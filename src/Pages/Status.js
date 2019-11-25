import React, {Component} from 'react';
import {Text,ImageBackground,StyleSheet,Image,View,TouchableOpacity} from 'react-native';


export default class Status extends Component{


  moveToHome(){
    this.props.navigation.navigate('Home',{});
  }
    render(){
        return(
<ImageBackground source={require('../assets/images.jpeg')} style={styles.container}>

     <View style={{alignItems:'center',padding:16,top:50,marginVertical:50}}>
       <Image source={require('../assets/tick.png')} style={{height:150,width:150}}></Image>
       <Text style={styles.TextColor}>You are Done</Text>
       <Text style={styles.TextColor}>Ref Id   1234554343</Text>
     
        <View style={{flexDirection:'row',marginTop:40}}>
        <View style={styles.GridViewBlockStyle}>
         <Text style={{color:'white'}}>View Receipt</Text>
        </View>
        <View style={styles.GridViewBlockStyle}>
         <Text style={{color:'white'}}>Email Receipt</Text>
        </View>
        </View>
       <TouchableOpacity
        style={{width:'100%',height:40,backgroundColor:'green', 
        alignItems:'center',justifyContent:'center',marginTop:50}}
        onPress={()=>this.moveToHome()}
        >
        <Text style={{color:'white', fontSize: 16}}>Done</Text>
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
    flex: 1,
   
      },
      TextColor:{
        color:'white',
        marginTop:20
      },
      GridViewBlockStyle: {
   
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width:150,
        margin: 5,
        opacity:0.5,
       backgroundColor:'rgba(255, 255, 255, 0.02)',
       borderColor:'white',
       borderWidth:1
       
      },
    });