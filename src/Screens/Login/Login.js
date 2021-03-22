import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import Validation from '../../Components/Validation';
import {showMessage} from 'react-native-flash-message';
import CheckData from '../../Components/CheckData';
import apis from '../../apis';
export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: '',
      isValid:false,
      isVisible:false,
    }
  }

  isValidData = () => {
    let {email, password} = this.state;
    const error = Validation({
      
      email: email,
      password: password,
      
    });
    if (error) {
      showMessage({
        type: 'danger',
        icon: 'danger',
        message: error,
      });
      return false;
    }
    return true;
  };


  CheckData = ()=>{
    const{email,password} = this.state;
    if(this.isValidData()){
        this.setState({
            isValid:true,
            isVisible:true
        })
        apis.login({ email,password })
        .then(response=> {
            console.log(JSON.stringify(response))
            
              this.props.navigation.navigate(navigationStrings.HOMEPAGE)
              
                
            
        }).catch((error) =>{
          this.setState({isValid:false}),
          console.log(error)
        })
    }
  
    }


  render() {
    const{isValid ,isValidData,isVisible}=this.state;
    return (
      <View style={styles.container}>
          <Image source={imagePath.logo} style={{height:170,width:170}}/>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.CheckData}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate(navigationStrings.SIGNUP)}>
            <Text>Register</Text>
        </TouchableHighlight>
        <CheckData isVisible={isVisible}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});



































































































































































































// import React ,{ Component } from "react";
// import {View,Text, Touchable,Image,TouchableOpacity,TextInput,StyleSheet} from "react-native";
// import imagePath from "../../constants/imagePath";
// import navigationStrings from "../../constants/navigationStrings";

// export default class Login extends Component{
//     constructor(props){
//         super(props);
//     }

//   render(){

//     return(
//       <View>
//           <Image source={imagePath.swiggy} style={styles.banner}/>
//           <Text style={styles.login}>LOGIN</Text>
//           <Text style={styles.phn}>Enter your phone number to proceed</Text>
//           <TextInput placeholder='Mobile Number'
//           style={styles.input}/>
//           <Text>CONTINUE</Text>
//       </View>
    
    
//     );
// }
// }






// const styles=StyleSheet.create({
//    banner:{
//     resizeMode:'cover',
//     height:520,
//    }, 
//    login:{
//      fontFamily:'fontFamily.futuraHeavyBt',
//        fontSize:13,
//        marginTop:10,
//        marginLeft:20,
//    },
//    phn:{
//        color:'grey',
//        fontFamily:'fontFamily.futura',
//        fontSize:10,
//        marginLeft:20,
//    },
//    input:{
//        marginLeft:13,
       
//    }
// })


