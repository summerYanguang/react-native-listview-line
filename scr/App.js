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

class App extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style = {styles.aView}>
          </View>
          <View style = {styles.aView2}>
          </View>
          <View style = {styles.aView}>
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    aView: {
      backgroundColor: 'red',
      flex: 1
    },
    aView2: {
      backgroundColor: 'green',
      flex: 3
    }
  });


export {App};
