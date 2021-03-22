import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Clothes from "../../Components/Clothes";
import imagePath from "../../constants/imagePath";
import navigationStrings from "../../constants/navigationStrings";

export default class DetailPage extends Component {
  render() {
    let item = this.props.route.params.item;
    const { selectedItem } = this.props.route.params;
    
    const { navigation } = this.props;
    
    return (
      <View style={{flex:1}}>
        <View style={{  flexDirection: "row"}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={imagePath.arrow}
              style={{ height: 30, width: 30, marginTop: 10 }}
            />
          </TouchableOpacity>
          
          <TouchableOpacity><Image
            source={imagePath.search}
            style={{ height: 30, width: 30, marginTop: 10, marginLeft: 220 }}
          />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
            source={imagePath.wishlist}
            style={{ height: 30, width: 30, marginTop: 10, marginLeft: 35 }}
          />
          </TouchableOpacity>
          
        </View>
        <ScrollView style={{flex:1}}>
          <Image
            source={{ uri: item.pic }}
            style={{ height: 500, width: 370, marginTop: 30 }}
          />
          <Text style={{ marginLeft: 10, fontWeight: "bold", marginLeft: 30 }}>
            {item.Name}
          </Text>
          <Text style={{ marginLeft: 10, marginLeft: 30, color: "grey" }}>
            {item.Description}
          </Text>
         
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.Price}>{item.Price}</Text>

            <Text style={styles.Price1}>{item.newPrice}</Text>
            <Text style={styles.Price2}>{item.Off}</Text>
          </View>
         
          <Text style={{ color: "grey", fontSize: 10, marginLeft: 30 }}>
            Price inclusive of all taxes
          </Text>
          <Text style={{ fontWeight: "bold", marginTop: 20, marginLeft: 30 }}>
            Color
          </Text>
          <Text style={{ marginLeft: 30, color: "grey" }}>{item.Color}</Text>

          <View style={{ flexDirection: "row" }}>
            <Text style={{ marginTop: 30, fontWeight: "bold", marginLeft: 30 }}>
              Select Size
            </Text>
            <Text
              style={{
                color: "#188faf",
                marginTop: 30,
                marginLeft: 90,
                fontWeight: "bold",
              }}
            >
              Size Chart
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text
              style={{
                height: 30,
                width: 40,
                marginLeft: 30,
                borderWidth: 2,
                borderRadius: 20,
                textAlign: "center",
                borderColor: "grey",
              }}
            >
              S
            </Text>
            <Text
              style={{
                height: 30,
                width: 40,
                marginLeft: 10,
                borderWidth: 2,
                borderRadius: 35,
                textAlign: "center",
                borderColor: "grey",
              }}
            >
              M
            </Text>
            <Text
              style={{
                height: 30,
                width: 40,
                marginLeft: 10,
                borderWidth: 2,
                borderRadius: 15,
                textAlign: "center",
                borderColor: "grey",
              }}
            >
              L
            </Text>
            <Text
              style={{
                height: 30,
                width: 40,
                marginLeft: 10,
                borderWidth: 2,
                borderRadius: 15,
                textAlign: "center",
                borderColor: "grey",
              }}
            >
              XL
            </Text>
            <Text
              style={{
                height: 30,
                width: 40,
                marginLeft: 10,
                borderWidth: 2,
                borderRadius: 15,
                textAlign: "center",
                borderColor: "grey",
              }}
            >
              XXL
            </Text>
          </View>

          <View style={{ flexDirection: "column" }}>
            <Text style={{ marginTop: 30, fontWeight: "bold", marginLeft: 30 }}>
              Product Details
            </Text>
            <Text style={{ marginLeft: 30, marginTop: 10 }}>
              {"\u25CF"}Regular Fit
            </Text>
            <Text style={{ marginLeft: 30, marginTop: 10 }}>
              {"\u25CF"}100% cotton
            </Text>
            <Text style={{ marginLeft: 30, marginTop: 10 }}>
              {"\u25CF"}Machine Wash
            </Text>
            <Text style={{ marginLeft: 30, marginTop: 10 }}>
              {"\u25CF"}Product Code:1233321
            </Text>
          </View>
          <View>
            <Image
              source={imagePath.invite}
              style={{ height: 100, width: 370, marginTop: 10 }}
            />
          </View>
        </ScrollView>
        <View style={{flexDirection:'row',height:45}}>
   
   <TouchableOpacity><View style={{height:40,width:40,backgroundColor:'#DCDCDC',borderRadius:15}}><Image style={{width:30,height:30,marginTop:5,marginLeft:5}} source={imagePath.whatsapp} resizeMode='cover'/></View></TouchableOpacity>
   <TouchableOpacity><View style={{height:40,width:40,backgroundColor:'#DCDCDC',borderRadius:15,padding:5,marginLeft:50}}><Image style={{width:30,height:30}} source={imagePath.wishlist} resizeMode='cover'/></View></TouchableOpacity> 
  
 <View style={{backgroundColor:'black',height:40,width:150,borderRadius:10,marginLeft:80}}>
   <Text  onPress={() => {
                this.props.navigation.navigate(navigationStrings.HOMEPAGE, {
                  itemsinfo: item.id,
                });
              }} style={{fontWeight:"bold",fontSize:15,textAlign:'center',marginTop:4,color:'white'}}>Add To Bag</Text>
    </View>
 </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Price: {
    fontSize: 10,
    color: "grey",
    marginTop: 5,
    fontWeight: "bold",
    textDecorationLine: "line-through",
    marginLeft: 29,
  },
  Price1: {
    fontSize: 10,
    color: "grey",
    marginTop: 5,
    fontWeight: "bold",
    marginLeft: 10,
  },
  Price2: {
    fontSize: 10,
    color: "red",
    marginTop: 5,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
