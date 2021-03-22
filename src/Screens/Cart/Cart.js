import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";

import CartView from "../../Components/cartView";
import Clothes from "../../Components/Clothes";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import imagePath from "../../constants/imagePath";
import navigationStrings from "../../constants/navigationStrings";


export default function Cart(props) {
  var amount=0
  const { data } = props.route.params;
  console.log(props, ",....................");
  for(let i=0;i<data.length;i++){
    amount=data[i].newPrice+amount
  }
  return (
    <SafeAreaView style={{flex:1}}> 
    <ScrollView>
      <View style={{flexDirection: "row" , minHeight:70 , alignItems:'center' ,marginTop:10,backgroundColor:'white'}}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image
            source={imagePath.cross}
            style={{ height: 30, width: 30, }}
          ></Image>

        </TouchableOpacity>
        <Text style={{ marginLeft: 40, fontWeight: "bold", fontSize: 20 }}>
            Bag
          </Text>
          <Image
            source={imagePath.heart1}
            style={{ height: 30, width: 30,marginLeft:200}}
          ></Image>
         
        
        </View>
        <View style={{backgroundColor:'#f0f4f7'}} >
        {data.map((value, index) => {
          return <CartView data={value} key={index}></CartView>;
        })}
      </View>
      <View style={{backgroundColor:'black',height:40,width:150,borderRadius:10,marginLeft:105,marginTop:20}}>
      <Text style={{color:'white',textAlign:'center',marginTop:5}}>Total:{amount}</Text>
      </View>
      <View style={{backgroundColor:'green',height:40,width:150,borderRadius:10,marginLeft:105,marginTop:20}}>
    <TouchableOpacity onPress={()=>props.navigation.navigate(navigationStrings.CONFIRM)}><Text style={{color:'white',textAlign:'center',marginTop:5}}>Confirm Order</Text></TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#f2288c",
    padding: 10,
    width: 100,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 40,
    marginTop: 10,
  },
});
