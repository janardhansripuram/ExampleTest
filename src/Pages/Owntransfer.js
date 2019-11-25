import React, {Component} from 'react';
import {Text,StyleSheet,View,TouchableOpacity,TextInput,FlatList,ImageBackground,Image,Button} from 'react-native';
import VirtualKeyboard from '../Components/VirtualKeypad/VirtualKeyboard';

import BottomSheet from '../Components/BottomSheet';
const fromAccountArray=[
  {
    type:'Savings Account',
    number:'1234567890',
    balance:'RM 5000.00'
  },
  {
    type:'Current Account',
    number:'0987654321',
    balance:'RM 9000.00'
  }
]
export default class Owntransfer extends Component{

  constructor(props){
    super(props);
    this.state={
      text:0.00,
      showbottomsheet:false,
      fromAccount:{},
      toAccount:{},
      showKeyboard:true,
      reference:'N/A',
      otherDetails:'N/A',
      when:''
  }
  console.log("this.props",this.props)
  }
  static navigationOptions:  {
    title: 'MyScreen',
    headerLeft: null
}

    changeText(newText) {
        console.log("test",newText)
        const amount = parseFloat(newText)
        const final = amount.toFixed(2);
        console.log(final);
        this.setState({text: final});
        newText ?  this.setState({text: final}) : this.setState({text: 0.00}) 
		
	}
  selectedFromAccount(account){
    console.log("account",account);
    this.setState({fromAccount: account});
    this.fromAccounts.close();
  }
  selectedToAccount(account){
    console.log("account",account);
    this.setState({toAccount: account});
    this.toAccounts.close();
  }
  CloseKeypad(){
    console.log("close");
    this.setState({showKeyboard: false});
  }
  openKeypad(){
    console.log("close");
    this.setState({showKeyboard: true});
  }
  goToConfirmation(){
    console.log("propsss",this.props.navigation);
    this.props.navigation.navigate('ConfirmationPage', {...this.state});
  }
    render(){
        return(
            <ImageBackground source={require('../assets/images.jpeg')} style={styles.container}>
             
            <View style={{flexDirection:'row',padding:16}}>
               <View>
                 <Text style={styles.textColor}>From:</Text>
                 <TouchableOpacity  onPress={()=>this.fromAccounts.open()}>
    <View style={styles.GridViewBlockStyle}>
    <Image source={require('../assets/bank.png')} style={{width:60,height:50,alignSelf:'center',}}></Image>
      {
        Object.keys(this.state.fromAccount).length !=0 ?(<View style={{alignItems:'center'}}><Text>{this.state.fromAccount.type}</Text>
        <Text>{this.state.fromAccount.number}</Text>
        <Text>Available Balance</Text>
        <Text>{this.state.fromAccount.balance}</Text></View>):null
      } 
    </View>
    </TouchableOpacity>
    </View>
    <Image source={require('../assets/right_arrow.png')} style={{width:60,height:20,alignSelf:'center',}}></Image>
    <View style={styles.flex}>
    <Text style={styles.textColor}>To:</Text>
    <TouchableOpacity  onPress={()=>this.toAccounts.open()}>
    <View style={styles.GridViewBlockStyle}>
    <Image source={require('../assets/bank.png')} style={{width:60,height:50,alignSelf:'center',}}></Image>
    {
        Object.keys(this.state.toAccount).length !=0 ?(<View style={{alignItems:'center'}}><Text>{this.state.toAccount.type}</Text>
        <Text>{this.state.toAccount.number}</Text>
        <Text>Available Balance</Text>
        <Text>{this.state.toAccount.balance}</Text></View>):null
      } 
    </View>
    </TouchableOpacity>
    </View>
 
    </View>

    <Text style={{color:'white',textAlign:'center',marginTop:100}} onPress={()=>this.openKeypad()}>RM {parseFloat(this.state.text).toFixed(2)}</Text>
  
<BottomSheet 
accounts={fromAccountArray}
selectedFromAccount={(data)=>this.selectedFromAccount(data)}
ref={ref => {
      this.fromAccounts = ref;
    }}/>
    <BottomSheet 
accounts={fromAccountArray}
selectedFromAccount={(data)=>this.selectedToAccount(data)}
ref={ref => {
      this.toAccounts = ref;
    }}/>
{
  this.state.showKeyboard ?(
    <View style={{marginTop:10}}>
   
    <VirtualKeyboard color='white' pressMode='string' decimal={true} onPress={(val) => this.changeText(val)} onOk={()=>this.CloseKeypad()}
    cellStyle={{
     borderWidth:1,
      width: 10,
      height: 44,
      borderRadius: 50/2,
      borderColor:'white'
      }}/>
  </View>
  ):(
    <View>
    <View style={{padding:16,borderColor:'white',borderWidth:0.5,margin:16}}>
      <TextInput
       placeholder={'Recipient Reference'}
       placeholderTextColor={'white'}
      style={{ height: 40, width:'100%' ,borderColor: 'gray', borderBottomWidth: 1,color:'white' }}
      onChangeText={text => this.setState({reference:text})}
      
    />
     <TextInput
      
     placeholder={'Other Payment Details(Optional)'}
     placeholderTextColor={'white'}
      style={{ height: 40,width:'100%' ,borderColor: 'gray', borderBottomWidth: 1,color:'white' }}
      onChangeText={text => this.setState({otherDetails:text})}
      
    />
    </View>
    <View style={{alignItems:'center'}}>
 <Text>When</Text>

    </View>
    <View style={{padding:16}}>
      <Text style={styles.textColor}>Today</Text>
      <Text style={styles.textColor}>Later</Text>
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
        onPress={()=>this.goToConfirmation()}
        >
        <Text style={{color:'white', fontSize: 16}}>Proceed</Text>
        </TouchableOpacity>
    </View>
   
    </View>
   
  )
}

  </ImageBackground>
        );
    }

}
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
    flex:{
        flex:1
    },
    GridViewBlockStyle: {
   
      justifyContent: 'center',
      
      alignItems: 'center',
      height: 200,
      margin: 5,
      width:153,

      marginVertical:5,

      
      opacity:0.5,
     backgroundColor:'rgba(255, 255, 255, 0.02)',
     borderColor:'white',
     borderWidth:1
     
    },
    textColor:{
      color:'white'
    },
  buttonContainer: {
    flexDirection: 'row',
    paddingTop:60
    }
  });