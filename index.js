/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
// import Intro from './src/component/screen/IntroScreen';
import ParentStack from './src/navigation/ParentStack'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ParentStack);
