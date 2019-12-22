import React, {Component} from "react";

import {
     View,
     Text,
     StyleSheet,
     SafeAreaView,
     TextInput,
     Platform,
     StatusBar,
     ScrollView,
     Image,
     Dimensions,
    } from "react-native";

import Icon from 'react-native-vector-icons/Ionicons'
import Category from './components/Explore/Category'
import Home from './components/Explore/Home'


const { height,width} = Dimensions.get('window')

class Explore extends Component{

    componentWillMount(){
        this.startHeaderHeight = 80
        if(Platform.OS == 'android')
        {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    render(){
        return (
          <SafeAreaView style={{ flex:1 }}>
              <View style={{ flex:1 }}>
                 
                    
                    <ScrollView
                    scrollEventThrottle={16}
                    >
                    <View style={{flex:1,backgroundColor:'white',
                paddingTop:20}}>
                        <Text style={{fontSize:20,fontWeight:'600',
                    paddingHorizontal:10}}>
                           Choose Your New Epic Destination!
                        </Text>

                        <View style={{height:130,marginTop:20}}>
                        <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        >
                            <Category imageUri={require('../assets/ankara.jpg')}
                            name="Ankara"
                            />
                             <Category imageUri={require('../assets/kayseri.jpg')}
                            name="Yilki Horses"
                            />
                             <Category imageUri={require('../assets/canakkale.jpg')}
                            name="Troy"
                            />

                            <Category imageUri={require('../assets/izmir.jpg')}
                            name="Ephesus"
                            />
                            
                            <Category imageUri={require('../assets/trabzon.jpg')}
                            name="Ayder Plateau"
                            />

                            <Category imageUri={require('../assets/nevsehir.jpg')}
                            name="Cappadocia"
                            />

                            <Category imageUri={require('../assets/antalya.jpg')}
                            name="Kaleici"
                            />

                            <Category imageUri={require('../assets/bolu.jpg')}
                            name="Lake Golcuk"
                            />

                        </ScrollView>
                        </View>
                        <View style={{ marginTop:20,paddingHorizontal:20}}>
                            <Text style={{fontSize:20,fontWeight:'700'}}>
                                Welcome to Epic Turkey
                            </Text>
                            <Text style={{fontWeight:'100',marginTop:10}}>
                            Turkey is a treasure chest of ancient history.
                             Open it and discover the events and people who have shaped this varied land.
                             Turkey was home to an astounding number of ancient cultures 
                             and the cradle of 10 of the world's greatest civilizations.
                              From Hittite and Assyrian to Hellenistic, Roman and Byzantine cultures,
                             each group has left relics that can be found in many corners of the country.
                             Travelling in Turkey means passing from one scene, legend or world to another.
                            </Text>
                            <View style={{width:width-40,height:200,marginTop:20}}>
                                <Image
                                style={{flex:1,height:null,width:null,resizeMode:'cover',
                                borderRadius:5,
                                borderWidth:1,
                                borderColor:'#dddddd'  }}
                                source={require('../assets/home.jpg')}
                                />
                            </View>
                        </View>
                    </View>
                   
                    </ScrollView>
              </View>

          </SafeAreaView>
        );
    }
}

export default Explore;


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
});