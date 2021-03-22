import React, { Component} from 'react';
import {View,Text} from 'react-native';
import Routes from './src/Navigation/Routes';
import FlashMessage from "react-native-flash-message";
import {getUserData} from'./src/utils/utils'

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      isLogged:false,
    }
    }
    componentDidMount=()=>{
      getUserData().
      then(response=>{
         this.setState({
           isLogged:true,
         })
        
      })
    }
  render(){
    const{isLogged}=this.state
    
    
    return(
      <>
    <Routes/>
    <FlashMessage position="top" />
    </>
    );
  }
}

