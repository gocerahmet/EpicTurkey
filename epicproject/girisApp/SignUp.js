import React, { Component } from 'react';
import { StyleSheet,Button, Text, View,ImageBackground,Image,TextInput,Dimensions,TouchableOpacity} from 'react-native';

import bgImage from './images/arkaplan.jpg'
import Logo from './images/logo.png'
import Icon from "react-native-vector-icons/Ionicons";
import AppNavigator from './AppNavigator';

const {width : WIDTH} = Dimensions.get('window')

export default class SignUp extends React.Component {

	render() {
		return (
			<ImageBackground source={bgImage}style={styles.backgroundContainer}>
				<View style={styles.logoContainer}>
					<Image source={Logo} style={styles.Logo}/>
					<Text style={styles.logoText}>SIGN UP PAGE</Text>
				</View>
			
		
				<View style={styles.inputContainer}>
					<Icon name={'ios-person'} size={28} color={'rgba(255,255,255,0.7)'}
					style={styles.inputIcon} />
					<TextInput 
					style={styles.input}
					placeholder={'Full Name'}
					placeholderTextColor={'rgba(255,255,255,0.7)'}
					underLineColorAndroid='transparent'
				
					/>
				</View>
			
				<View style={styles.inputContainer}>
				<Icon name={'ios-key'} size={28} color={'rgba(255,255,255,0.7)'}
					style={styles.inputIcon} />
					<TextInput 
					style={styles.input}
					placeholder={'Password'}
					secureTextEntry={true}
					placeholderTextColor={'rgba(255,255,255,0.7)'}
					underLineColorAndroid='transparent'
			
					/>

				</View>

                <View style={styles.inputContainer}>
				<Icon name={'ios-mail'} size={28} color={'rgba(255,255,255,0.7)'}
					style={styles.inputIcon} />
					<TextInput 
					style={styles.input}
					placeholder={'Mail Adress'}
				
					placeholderTextColor={'rgba(255,255,255,0.7)'}
					underLineColorAndroid='transparent'
					/>

				</View>

				<TouchableOpacity 
				style={styles.btnSignUp }
			 
			   >
				<Button
				color="#ff0000"
				title="Sign Up"
               />   
				</TouchableOpacity>

     		 </ImageBackground>
      
		);
	}
}



const styles = StyleSheet.create({
	backgroundContainer: {
    flex:1,
	justifyContent: 'center',
	alignItems:'center',
	width: null,
	height: null,
  },
  logoContainer:{
	alignItems: 'center',
	marginBottom:50,
  },
   Logo:{
		width:120,
		height:120,
   },
   logoText:{
	   color: 'white',
	   fontSize: 30,
	   fontWeight: '500',
	   fontWeight: 'bold',
	   textShadowColor:'#585858',
	   textShadowOffset:{width: 5, height: 5},
	   textShadowRadius:10,
	   marginTop:10,
	   opacity:0.9
   },
   inputContainer:{
	   marginTop:10,
   },
   input:{
	width: WIDTH - 55,
	height: 45,
	borderRadius: 25,
	fontSize: 16,
	paddingLeft: 45,
	backgroundColor: 'rgba(0,0,0,0.35)',
	color: 'rgba(255,255,255,0.7)',
	marginHorizontal: 25,
   },
   btnLogin:{
	   width: WIDTH-55,
	   height: 45,
	   borderRadius: 25,
	   justifyContent: 'center',
	   marginTop: 60
   },
   btnSignUp:{
	width: WIDTH-55,
	height: 45,
	borderRadius: 25,
	justifyContent: 'center',
	marginTop: 20
},
   textLogin:{
	color: 'rgba(255,255,255,1.0)',
	fontSize: 20,
	textAlign: 'center',
   },
   textSignUp:{
	color: 'rgba(255,255,255,1.0)',
	fontSize: 20,
	textAlign: 'center',
   },
   inputIcon:{
	   position: 'absolute',
	   top:8,
	   left:37
   }
});