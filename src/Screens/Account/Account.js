import React ,{ Component } from "react";
import {View,Text,Alert, Touchable,Image, Button,StyleSheet ,TouchableOpacity,TextInput, ImagePickerIOS,ScrollView} from "react-native";
import navigationStrings from "../../constants/navigationStrings";
import * as ImagePicker from 'expo-image-picker';
import imagePath from "../../constants/imagePath";



export default class Account extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedImage:'data:image/png;base64,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',
        }
    }
    openImage = async() => {
     
   
        Alert.alert(
          "Do you want to update",
          "Select option:",
          [
            {
              text: "Camera",
              onPress: async() => {
    
                let permission = await ImagePicker.requestCameraPermissionsAsync();
    
                if (permission.granted === false) {
               
                  return;
                }
                
    
                let picker =  await ImagePicker.launchCameraAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.All,
                  allowsEditing: true,
                  quality: 1
                });
                
                this.setState({
                  selectedImage: picker.uri
                })
    
              },
              style: "cancel",
            },
            {
              text: "Gallery",
              onPress: async() => {
                let permission = await ImagePicker.requestCameraPermissionsAsync();
    
                if (permission.granted === false) {
               
                  return;
                }
               
    
                let picker = await ImagePicker.launchImageLibraryAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.All,
                  allowsEditing: true,
                  quality: 1
                })
    
                if (picker.cancelled === true) {
                  return;
                }
    
              
                this.setState({
                  selectedImage: picker.uri
                })
    
    
              },
            },
          ],
          { cancelable: false }
        );
      }
    

  
  render()
  {

   const {selectedImage}=this.state;
    return(
        <ScrollView>
       <View style={{flex:1,marginTop:50}}>
           <TouchableOpacity  style={{flexDirection:'row',backgroundColor:'#f1f9f9'}}onPress= {this.openImage}>
            <Image source={{uri:selectedImage}} style={{height:130,width:130}}></Image>
            <Text style={{fontWeight:'bold',marginLeft:20,marginTop:50}}>Himanshu Sapra</Text>
            </TouchableOpacity>
       </View>
       <View style={{ flexDirection:'row' , alignItems:'center' ,backgroundColor:'white',marginTop:10 }}>
           <Text style={{marginVertical:20}}>Customer Care</Text>
           <Image source={Pictures.right} style={{height:10,width:10,marginLeft:'auto'}}/>
       </View>
       <View style={{flexDirection:'row' , alignItems:'center',backgroundColor:'white',marginTop:10}}>
           <Text style={{marginVertical:20}}>Notifications</Text>
           <Image source={Pictures.right} style={{height:10,width:10,marginLeft:'auto'}}/>
       </View>
       <View style={{flexDirection:'row' , alignItems:'center',backgroundColor:'white',marginTop:10}}>
           <Text style={{marginVertical:20}}>Return Creation Demo</Text>
           <Image source={Pictures.right} style={{height:10,width:10,marginLeft:'auto'}}/>
       </View>
       <View style={{flexDirection:'row' , alignItems:'center',backgroundColor:'white',marginTop:10}}>
           <Text style={{marginVertical:20}}>How to return</Text>
           <Image source={Pictures.right} style={{height:10,width:10,marginLeft:'auto'}}/>
       </View>
       <View style={{flexDirection:'row' , alignItems:'center',backgroundColor:'white',marginTop:10 }}>
           <Text style={{marginVertical:20}}>How Do I redeem My Coupon?</Text>
           <Image source={Pictures.right} style={{height:10,width:10,marginLeft:'auto'}}/>
       </View>
       <View style={{flexDirection:'row' , alignItems:'center',backgroundColor:'white',marginTop:10 }}>
           <Text style={{marginVertical:20}}>Terms & Conditions</Text>
           <Image source={Pictures.right} style={{height:10,width:10,marginLeft:'auto'}}/>
       </View>
       <View style={{flexDirection:'row' , alignItems:'center',backgroundColor:'white',marginTop:10 }}>
           <Text style={{marginVertical:20}}>Promotions Terms & Conditions</Text>
           <Image source={Pictures.right} style={{height:10,width:10,marginLeft:'auto'}}/>
       </View>
       <View style={{flexDirection:'row' , alignItems:'center',backgroundColor:'white',marginTop:10 }}>
           <Text style={{marginVertical:20}}>Return & Refunds Policy</Text>
           <Image source={Pictures.right} style={{height:10,width:10,marginLeft:'auto'}}/>
       </View>
       <View style={{flexDirection:'row' , alignItems:'center',backgroundColor:'white',marginTop:10 }}>
           <Text style={{marginVertical:20}}>We Respect Your Privacy</Text>
           <Image source={Pictures.right} style={{height:10,width:10,marginLeft:'auto'}}/>
       </View>
       <View style={{flexDirection:'row' , alignItems:'center',backgroundColor:'white',marginTop:10 }}>
           <Text style={{marginVertical:20}}>Fees & Payments</Text>
           <Image source={Pictures.right} style={{height:10,width:10,marginLeft:'auto'}}/>
       </View>
       <View style={{flexDirection:'row' , alignItems:'center',backgroundColor:'white',marginTop:10 }}>
           <Text style={{marginVertical:20}}>Who We Are</Text>
           <Image source={Pictures.right} style={{height:10,width:10,marginLeft:'auto'}}/>
       </View>
       <View style={{flexDirection:'row' , alignItems:'center',backgroundColor:'white',marginTop:10 }}>
           <Text style={{marginVertical:20}}>Join Our Team</Text>
           <Image source={Pictures.right} style={{height:10,width:10,marginLeft:'auto'}}/>
       </View>
      
      
       
    </ScrollView>
    
        );
  }

    }






