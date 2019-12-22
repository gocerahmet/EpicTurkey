import React, {Component} from "react";

import { View,Text,StyleSheet, ScrollView,Image} from "react-native";

class Saved extends Component{
    render(){
        return (
            <ScrollView>
                
                 <View style={{ marginTop:20,paddingHorizontal:20}}>
                 <Text style={{fontSize:20,fontWeight:'700',textAlign:'center'}}>
                              BEST PHOTOS OF  TURKEY
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
                    <View style={{width:380,height:220,marginTop:20}}>
                <Image
                                style={{flex:1,height:null,width:null,resizeMode:'cover',
                                borderRadius:5,
                                borderWidth:1,
                                borderColor:'#dddddd'  }}
                                source={require('../assets/antalya.jpg')}
                                />
                                

                    </View>
                    <View style={{width:380,height:220,marginTop:20}}>
                <Image
                                style={{flex:1,height:null,width:null,resizeMode:'cover',
                                borderRadius:5,
                                borderWidth:1,
                                borderColor:'#dddddd'  }}
                                source={require('../assets/ankara.jpg')}
                                />
                                

                    </View>

                    <View style={{width:380,height:220,marginTop:20}}>
                <Image
                                style={{flex:1,height:null,width:null,resizeMode:'cover',
                                borderRadius:5,
                                borderWidth:1,
                                borderColor:'#dddddd'  }}
                                source={require('../assets/kayseri.jpg')}
                                />
                                

                    </View>

                    <View style={{width:380,height:220,marginTop:20}}>
                <Image
                                style={{flex:1,height:null,width:null,resizeMode:'cover',
                                borderRadius:5,
                                borderWidth:1,
                                borderColor:'#dddddd'  }}
                                source={require('../assets/nevsehir.jpg')}
                                />
                                

                    </View>

                    <View style={{width:380,height:220,marginTop:20}}>
                <Image
                                style={{flex:1,height:null,width:null,resizeMode:'cover',
                                borderRadius:5,
                                borderWidth:1,
                                borderColor:'#dddddd'  }}
                                source={require('../assets/bolu.jpg')}
                                />
                                

                    </View>

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

export default Saved;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});