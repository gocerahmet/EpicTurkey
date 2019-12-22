import React, {Component} from "react";

import { View,Text,StyleSheet,Image, ScrollView} from "react-native";

class Trips extends Component{
    render(){
        return (
            <ScrollView>
            <View style={{ marginTop:20,paddingHorizontal:20}}>
                            <Text style={{fontSize:20,fontWeight:'700'}}>
                                Best Destinations for 2020
                            </Text>
                            <Text style={{fontSize:12,color:'red',fontWeight:'700'}}> AYDER PLATEAU</Text>
                            <Text style={{fontWeight:'100',marginTop:10}}>
                            The Ayder Plateau is fondly referred to as
                             “honey forest” because of its delicacy, 
                             the honey. It is a conglomeration of all shades of green with touches
                              of gold and brown that reaches out to the skies.
                              You will also find both hot and cold crystal-clear springs.
                               The Ayder Plateau used to be Turkey’s best kept 
                               secret although it has slowly gained popularity with the traveling crowds.
                            </Text>
                            <View style={{width:380,height:220,marginTop:20}}>
                                <Image
                                style={{flex:1,height:null,width:null,resizeMode:'cover',
                                borderRadius:5,
                                borderWidth:1,
                                borderColor:'#dddddd'  }}
                                source={require('../assets/trabzon.jpg')}
                                />
                            </View>

                            <Text style={{fontSize:12,color:'red',fontWeight:'700',marginTop:20}}> YILKI HORSES </Text>
                            <Text style={{fontWeight:'100',marginTop:10}}>
                            The Ayder Plateau is fondly referred to as
                             “honey forest” because of its delicacy, 
                             the honey. It is a conglomeration of all shades of green with touches
                              of gold and brown that reaches out to the skies.
                              You will also find both hot and cold crystal-clear springs.
                               The Ayder Plateau used to be Turkey’s best kept 
                               secret although it has slowly gained popularity with the traveling crowds.
                            </Text>
                            <View style={{width:380,height:220,marginTop:20}}>
                                <Image
                                style={{flex:1,height:null,width:null,resizeMode:'cover',
                                borderRadius:5,
                                borderWidth:1,
                                borderColor:'#dddddd'  }}
                                source={require('../assets/kayseri.jpg')}
                                />
                            </View>

                            <Text style={{fontSize:12,color:'red',fontWeight:'700',marginTop:20}}> TROY </Text>
                            <Text style={{fontWeight:'100',marginTop:10}}>
                            The Ayder Plateau is fondly referred to as
                             “honey forest” because of its delicacy, 
                             the honey. It is a conglomeration of all shades of green with touches
                              of gold and brown that reaches out to the skies.
                              You will also find both hot and cold crystal-clear springs.
                               The Ayder Plateau used to be Turkey’s best kept 
                               secret although it has slowly gained popularity with the traveling crowds.
                            </Text>
                            <View style={{width:380,height:220,marginTop:20}}>
                                <Image
                                style={{flex:1,height:null,width:null,resizeMode:'cover',
                                borderRadius:5,
                                borderWidth:1,
                                borderColor:'#dddddd'  }}
                                source={require('../assets/canakkale.jpg')}
                                />
                            </View>
                        </View>
                        </ScrollView>
        );
    }
}

export default Trips;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});