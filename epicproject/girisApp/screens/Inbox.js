import React, {Component} from "react";

import { View,Text,StyleSheet,ScrollView,Image} from "react-native";

class Inbox extends Component{
    render(){
        return (
            <ScrollView >
            <View style={{ marginTop:20,paddingHorizontal:20}}></View>
            <Text style={{fontSize:20,fontWeight:'700',textAlign:'center'}}>
                                ABOUT US
                            </Text>
                            <Text style={{fontSize:15,color:'red',fontWeight:'700',textAlign:'center',marginTop:10}}> AHMET GÖÇER & ALİ YALÇIN AĞIRKAN </Text>
                            <Text style={{fontWeight:'100',marginTop:10}}>
                            Two Computer Science students from Sakarya University. Ahmet is front-end Developer and professional designer.
                            Ali is back-end developer and web designer.
                            </Text>
                            <Text>
                            Epic Turkey have been developed for tourist to learn about more new places about Turkey.
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                            <View style={{width:200,height:200,marginTop:20}}
                            >
                                
                                <Image
                                style={{flex:1,height:null,width:null,resizeMode:'contain',
                                borderRadius:5,
                                borderWidth:1,
                                borderColor:'#dddddd' ,
                                borderRadius:250,
                                
                             }}
                                
                                source={require('../assets/aboutus1.jpeg')}
                                />
                            </View>
                            <View style={{width:200,height:200,marginTop:20}}>
                                <Image
                                style={{flex:1,height:null,width:null,resizeMode:'contain',
                                borderRadius:5,
                                borderWidth:1,
                                borderColor:'#dddddd'  ,
                                borderRadius:250,

                                }}
                                source={require('../assets/aboutus2.jpeg')}
                                />
                            </View>
                            </View>
                        </ScrollView>
        );
    }
}

export default Inbox;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});