/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import MapScreen from "./app/MapScreen"
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MapScreen);
