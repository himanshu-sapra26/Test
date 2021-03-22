import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import navigationStrings from '../../constants/navigationStrings';
import Validation from '../../Components/Validation';
import {showMessage} from 'react-native-flash-message';
import apis from '../../apis';
import CheckData from '../../Components/CheckData';
import { setUserData } from '../../utils/utils';
export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email   : '',
      password: '',
      cpassword: '',
      isValid:false,
      isVisible:false , 
    }
  }
  isValidData = () => {
    let {name, email, password,cpassword} = this.state;
    const error = Validation({
      firstName: name,
      email: email,
      password: password,
      confirmPassword: cpassword,
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


  checkData = ()=>{
    
    const{name,email,password,reEnterPassword} = this.state;
    if(this.isValidData()){
        this.setState({
            isVisible:true
        })
        apis.signup({name:name, email:email,password:password ,signupType:"APP" , languageCode:"EN"})
        .then(response=> {
          console.log(JSON.stringify(response))
          setUserData(response.data).then
            this.props.navigation.navigate(navigationStrings.HOMEPAGE)
          
                
            
        }).catch((error)=>{
          this.setState({isValid:false})
          console.log(error)
        })
    }

  }
 

  render() {
    const{isVisible}=this.state;
    return (
      <View style={styles.container}>
        <Image style={styles.bgImage} source={{ uri: "https://lorempixel.com/900/1400/nightlife/8/" }}/>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              underlineColorAndroid='transparent'
              onChangeText={(name) => this.setState({name})}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/40/000000/circled-user-male-skin-type-3.png'}}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/flat_round/40/000000/secured-letter.png'}}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/40/000000/password.png'}}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Re-Enter Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(cpassword) => this.setState({cpassword})}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/fluent/2x/sign-in-form-password.png'}}/>
        </View>

        <TouchableOpacity style={styles.btnByRegister}>
            <Text style={styles.textByRegister}>By registering on this App you confirm that you have read and accept our policy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() =>
          this.checkData()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate(navigationStrings.LOGIN)}>
            <Text style={styles.btnText}>Have an account?</Text>
        </TouchableOpacity>
        <CheckData isVisible={isVisible}/>
      </View>
    );
  }
}

const resizeMode = 'center';

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
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
    marginRight:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:300,
    borderRadius:30,
    backgroundColor:'transparent'
  },
  btnByRegister: {
    height:80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:20,
    width:300,
    backgroundColor:'transparent',
    
  },
  loginButton: {
    backgroundColor: "#00b5ec",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage:{
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText:{
    color:"white",
    fontWeight:'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  textByRegister:{
    color:"white",
    fontWeight:'bold',
    textAlign:'center',

    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  }
}); 