/**
 * React Native App
 * Everthing starts from the EntryPoint
 */
import React, {Component} from 'react';
import {Text,StyleSheet,View,TouchableOpacity,TextInput,FlatList,ImageBackground} from 'react-native';
import CardView from '../Components/CardView';
import BlurOverlay from 'react-native-blur-overlay';
export default class Home extends Component {
    static navigationOptions = {
       // header: null
    }
    constructor(props) {
    super(props);
    this.state = { GridViewItems: [
      {value: 'Own Account Transfer',key:'own'},
      {value: 'Other Account Transfer',key:'other'},
      {value: 'Telegraphic Transfer',key:'ftt'},
      {value: 'Manage Transfers',key:'mt'},
      
    ]}
  
    }
    
  onChangeText(text) {
    console.log(text);
    }
  moveToTransfer(item) {
    if (item.key === 'own') {
      this.props.navigation.navigate('Owntransfer', {});
    }
  }
  render() {
    return (
      <ImageBackground source={require('../assets/images.jpeg')} style={styles.container}>
      <View style={{top:50,marginVertical:30}}>
          <View style={{alignItems:'center'}}>
           <Text style={{width:120,textAlign:'center',color:'yellow'}}>What would you Like to do ?</Text>
           </View>
<FlatList
      
         data={ this.state.GridViewItems }
 
         renderItem={({item}) =><TouchableOpacity onPress={()=>this.moveToTransfer(item)} style={styles.GridViewBlockStyle}>
           <View >
         <Text style={styles.textColor}>
             {item.value}
         </Text>
</View></TouchableOpacity>}
 
         numColumns={2}
 
        />
        </View>
  {/*<View style={{borderColor:'white',borderWidth:0.8,height:100,width:100,opacity:.3,alignItems:'center'}}>
  <Text style={{color:'white'}}>
              Elevation 0
          </Text>
    </View>*/}

        </ImageBackground>
    )
    };

}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#455a64",
    flex: 1,
   
   padding:16,
  
  },
  GridViewBlockStyle: {
 
    justifyContent: 'center',
    flex:1,
    alignItems: 'center',
    height: 100,
    margin: 5,
    opacity:0.5,
   backgroundColor:'rgba(255, 255, 255, 0.02)',
   borderColor:'white',
   borderWidth:1
   
  },
  textColor:{
    color:'white',
    fontWeight:'bold',
    elevation:2
  }
});