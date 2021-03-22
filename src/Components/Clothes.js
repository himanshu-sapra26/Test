import  React  from 'react';
import {Text,View,Image,StyleSheet,TouchableOpacity} from 'react-native';
import navigationStrings from '../constants/navigationStrings';
import {useNavigation} from '@react-navigation/native';



export default function Clothes(props){
    const{onCart,data,_onClickCart}=props;
    const navigation=useNavigation();

    return(
        
        <>
        <View style={{marginLeft:30}}>
             <TouchableOpacity onPress={()=>navigation.navigate(navigationStrings.DETAILPAGE,{item:data})}> 
            <Image source={{uri:data.pic}}  style={{height:200,width:130,marginTop:20}}/></TouchableOpacity> 
            
            <Text>{data.Name}</Text>
            <View  style={{flexDirection:'row'}}>
            <Text style={styles.Price}>{data.Price}</Text>
            
            <Text style={styles.Price1}>${data.newPrice}</Text>
            <Text style={styles.Price2}>{data.Off}</Text>
            </View>
            <TouchableOpacity style={{
                backgroundColor: '#cdd0ca',
            padding: 10,
            width:130,
            borderRadius:65,
            textAlign:'center',
            }}>
            <Text onPress={()=>{_onClickCart(data.id)}}>Add to Cart</Text></TouchableOpacity>

        </View>
        </>
    )
    }


    const styles = StyleSheet.create({
        Price:{
        fontSize:10,
        color:"grey",
        marginTop:5,
        fontWeight:'bold',
        textDecorationLine:'line-through',
         
        },
        Price1:{
            fontSize:10,
            color:"grey",
            marginTop:5,
            fontWeight:'bold',
            marginLeft:10,
            
            
            },
            Price2:{
                fontSize:10,
                color:"red",
                marginTop:5,
                fontWeight:'bold',
                marginLeft:10,
                
                }
      });