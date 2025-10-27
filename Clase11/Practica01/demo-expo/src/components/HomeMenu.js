import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Users from '../screens/Users';
import Entypo from '@expo/vector-icons/Entypo';

const Tab = createBottomTabNavigator();

class HomeMenu extends Component {
    render(){
  return (
     <Tab.Navigator screenOptions={ { tabBarShowLabel: false } }>
        <Tab.Screen name="Home" component={ Home } options={ { tabBarIcon: () => <Entypo name="home" size={24} color="black" /> }}/>
        <Tab.Screen name="Profile" component={ Profile } />
        <Tab.Screen name="Users" component={ Users }/>
     </Tab.Navigator>
  );
}
}

export default HomeMenu;