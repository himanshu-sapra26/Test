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
} from "react-native";



export default function CartView(props) {
const { data } = props;
 
 
 
 
  return (
    <View>
      
      <View style={{ justifyContent: "space-between", flexDirection: "row",backgroundColor:'white', marginVertical:20 }}>
      
        <Image style={styles.card} source={{ uri: data.pic }} />
        <Text style={{ marginRight: "auto", marginTop: 30,marginLeft:30 }}>{data.Name}</Text>
      </View>
      <View style={{ flexDirection: "column" }}>
        <Text style={{ marginLeft: 130, marginTop: -120, color: "grey" }}>
          {data.Description}
        </Text>
        </View>

        <View style={{ flexDirection: "row" ,marginTop: -75}}>
          <Text style={styles.Price}>{data.Price}</Text>

          <Text style={styles.Price1}>${data.newPrice}</Text>
          <Text style={styles.Price2}>{data.Off}</Text>
        </View>
        <View>
        <Text style={{ color: "green", marginLeft: 130 }}>
          You save:{data.save}
        </Text>
      




        
      
      
      </View>
     
      
    </View>

  );
}
const styles = StyleSheet.create({
  card: {
    height: 130,
    width: 100,
    marginTop: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
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

  Price: {
    fontSize: 10,
    color: "grey",
    marginTop: -15,
    marginLeft: 130,
    fontWeight: "bold",
    textDecorationLine: "line-through",
  },
  Price1: {
    fontSize: 10,
    color: "grey",
    marginTop: -15,
    fontWeight: "bold",
    marginLeft: 10,
  },
  Price2: {
    fontSize: 10,
    color: "green",
    marginTop: -15,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
