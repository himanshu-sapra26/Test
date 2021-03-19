import Carousel from 'react-native-snap-carousel';
import React, {Component} from 'react'
import {View,Dimensions, StyleSheet, Text, Image, SafeAreaView, ScrollView} from 'react-native';

const sliderWidth = Dimensions.get('window').width;
const itemWidth = Math.round(sliderWidth *0.99)
export default class MyCarousel extends Component {

    state={
       entries: [
            {
              imgUrl:{uri:"https://assets.ajio.com/medias/sys_master/images/images/h44/h8b/30855160201246/02032021-m-unisex-stealoftheday-extra30.jpg"},
            },
            {
               imgUrl:{uri:"https://assets.ajio.com/medias/sys_master/images/images/h12/h00/30832515383326/01032021-m-unisex-topcarousel-paydaysale-40to80extra20.jpg"},
            },
            {
              imgUrl:{uri:"https://assets.ajio.com/medias/sys_master/images/images/h5c/hbc/30855161053214/02032021-m-unisex-topcarousel-dnmx-under599.jpg"},
            },
            {
                imgUrl: {uri:"https://assets.ajio.com/medias/sys_master/images/images/hff/hd4/30855162167326/02032021-m-unisex-topcarousel-preciousjewellerygoldcoins-bestbrandsbestprices.jpg "},
              },
              
              
          ]
    }
 
    _renderItem = ({item, index}) => {
        return (
            <View style={style.slide}>
                <Image source={item.imgUrl} style={{width:355, height:220}}/>
            </View>
        );
    }
 
    render () {
        return (
            <Carousel
              
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
        );
    }
}



const style = StyleSheet.create({
    slide: {},
    title:{},
    
})