import React,{Component} from 'react';
import  {createStackNavigator} from 'react-navigation';
import IntroScreen from '../component/screen/IntroScreen';


export default (ParentStack = createStackNavigator(
    {
      Intro: {
        path: "/",
        screen: IntroScreen
      },
      
    },
    {
      initialRouteName: "Intro",
      navigationOptions: {
        header: null
      }
    }
  ));
  