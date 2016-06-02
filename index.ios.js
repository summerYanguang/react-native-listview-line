/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {App} from './scr/App';
import {ListViewTest} from './scr/ListViewTest';


class RNflexbox extends Component {
  render() {
    return (
    /*<App/> */
    <ListViewTest/>
    );
  }
}
AppRegistry.registerComponent('RNflexbox', () => RNflexbox);
