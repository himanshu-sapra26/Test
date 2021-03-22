import React ,{ Component } from "react";
import {Text,View,StyleSheet,Image,Button,TouchableOpacity, Share} from 'react-native';
import Communications from 'react-native-communications';
import openMap from 'react-native-open-maps';
import imagePath from "../../constants/imagePath";
import navigationStrings from "../../constants/navigationStrings";



export default class Confirm extends Component{
    constructor(props){
        super(props);
        
    }

    onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'order Id: 2948324',
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    }
     // open geo location
     _goToYosemite(){
        openMap({ latitude: 30.7333, longitude: 76.7794 });
      }
    
    render()

    {
         return(
            <View style={style.container}>
                <View style={style.summary}>
                    
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image source={imagePath.arrow} style={{height:30,width:40,marginTop:10,marginRight:120}}/></TouchableOpacity>
                    <View style={style.summaryContainer}>
                        
                        <Text style={{ fontWeight: 'bold',marginTop:5 ,marginRight:110}}>Order Summary</Text>
                    </View>
                    
                </View>

                <View style={style.body}>
                    <Text style={{ fontSize: 17, marginBottom: 10 }}>Himanshu Sapra</Text><Text style={{backgroundColor: 'grey',width:55,textAlign:'center'}}>Home</Text>
                    <Text>CodeBrew-Labs, sector 28, near Himachal bhawan...</Text>
                    <Text>Chandigarh - 160036</Text>
                    <Text style={{ marginVertical: 10 }}>8708761348</Text>
                    <Button title='Change or Add Address' />
                </View>




                <View style={[style.summary, { height: 200, backgroundColor: 'smoke', marginVertical: 5, alignItems: 'center' }]}>
                    <TouchableOpacity onPress={() =>
                        Communications.email(
                            ['ajioOrder@gmail.com'],
                            null,
                            null,
                            "Product Id",
                            "Please type your message.......",
                        )}>
                        <View style={style.summaryContainer}>
                            <Image source={imagePath.email} style={{height:50,width:50}}/>
                           
                            <Text style={{ fontWeight: 'bold' }}>Email Us</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Communications.phonecall('+917404995095', true)}>
                        <View style={style.summaryContainer}>
                        <Image source={imagePath.call} style={{height:50,width:50}}/>
                            
                            <Text style={{ fontWeight: 'bold' }}>Call Us</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onShare}>
                        <View style={style.summaryContainer}>
                        <Image source={imagePath.share} style={{height:50,width:50}}/>
                           
                            <Text style={{ fontWeight: 'bold' }}>Share</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._goToYosemite}>
                        <View style={style.summaryContainer}>
                        <Image source={imagePath.track} style={{height:50,width:50}}/>
                           
                            <Text style={{ fontWeight: 'bold' }}>Track</Text>
                        </View>
                    </TouchableOpacity>
                </View>


                
            </View>
        )
    }
}


const style = StyleSheet.create({
    container: {
        padding: 0,
        margin: 0,
        backgroundColor: 'lightgrey',
        justifyContent: 'space-evenly'
    },
    summary: {
        
        height: 55,
        margin: 0,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 5,
        borderBottomColor: 'whitesmoke',
        borderBottomWidth: 1,
        paddingBottom: 2,
        borderRadius: 5,
        
        
    },
    summaryContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    
    body: {
        padding: 20,
        backgroundColor: 'white',
        marginVertical: 5,
    },
    header: {
        color: 'grey',
        fontWeight: 'bold',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'whitesmoke'
    },
    detail: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 2
    },
    greenBold: {
        fontWeight: 'bold',
        color: 'green'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        // height: '50%'
    },
    contactContainer: {
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'skyblue',
        justifyContent: 'space-around',
        alignItems: 'center'
    }

})
    