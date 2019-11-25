/**
 * React Native App
 * Everthing starts from the EntryPoint
 */
import React, {Component} from 'react';
import {Text,StyleSheet,View,TouchableOpacity,TextInput,ImageBackground} from 'react-native';

export default class Login extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
    super(props);
    console.log(this.props);
    }
    onChangeText(text){
console.log(text);
    }
    loginUser(){
        console.log("kkkk",this.props);
        this.props.navigation.navigate('Home',{});
    }
    render() {
    return (
      <ImageBackground source={require('../assets/images.jpeg')} style={styles.container}>
       
     <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Welcom To MyAPP</Text>

     <TextInput
      style={{ height: 40, width:300 ,borderColor: 'gray', borderBottomWidth: 1,color:'white' }}
      onChangeText={text => this.onChangeText(text)}
      
    />
        <TextInput
     style={{ height: 40, width:300 ,borderColor: 'gray', borderBottomWidth: 1 ,color:'white'}}
      onChangeText={text => this.onChangeText(text)}
     
    />
<TouchableOpacity style={styles.button} onPress={()=>this.loginUser()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
       
        </ImageBackground>
    )
   
    };

}
const styles = StyleSheet.create({
    container: {
      backgroundColor: "#455a64",
      flex: 1,
      alignItems: "center",
     padding:16,
     justifyContent:'center'
     
    },
    button: {
        width: 300,
        backgroundColor: "green",
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,
        marginTop:50
        
      },
      buttonText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#ffffff",
        textAlign: "center"
      }
});
