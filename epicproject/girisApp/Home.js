import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import Explore from './screens/Explore'
import Saved from './screens/Saved'
import Inbox from './screens/Inbox'
import Trips from './screens/Trips'
import Profile from './screens/Profile';


export default createBottomTabNavigator({
	Explore:{
		screen:Explore,
		navigationOptions:{
			tabBarLabel:'DISCOVER',
			tabBarIcon:({tintColor})=>(
				<Icon name="ios-search" color={tintColor} size={24}/> 

			)
		}
	},
	
	Saved:{
		screen:Saved,
		navigationOptions:{
			tabBarLabel:'PHOTOS',
			tabBarIcon:({tintColor})=>(
				<Icon name="ios-photos" color={tintColor} size={24}/> 

			)
		}
	},
	
	Trips:{
		screen:Trips,
		navigationOptions:{
			tabBarLabel:'DESTINATIONS',
			tabBarIcon:({tintColor})=>(
				<Icon name="ios-map" color={tintColor} size={24}/> 

			)
		}
	},
	Inbox:{
		screen:Inbox,
		navigationOptions:{
			tabBarLabel:'ABOUT US',
			tabBarIcon:({tintColor})=>(
				<Icon name="ios-business" color={tintColor} size={24}/> 

			)
		}

	},
	Profile:{
		screen:Profile,
		navigationOptions:{
			tabBarLabel:'PROFILE',
			tabBarIcon:({tintColor})=>(
				<Icon name="ios-person" color={tintColor} size={24}/> 

			)
		}
	}
	},{
		tabBarOptions:{
			activeTintColor:'red',
			inactiveTintColor:'grey',
			style:{
				backgroundColor:'white',
				borderTopWidth:0,
				shadowOffset:{width:5,height:3},
				shadowColor:'black',
				shadowOpacity:0.5,
				elevation:5
			}
		}
})
const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor: '#fff',
		justifyContent:'center',
		alignItems:'center'
	},

});