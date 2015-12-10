'use strict';

var React = require('react-native');
var reactNativeStore = require('react-native-store');
var {
  AsyncStorage,
  PickerIOS,
  Text,
  AppRegistry,
  View
} = React;

var reactNativeStore = require('react-native-store');

var RNStorage = require('./RNStorage');

var zzz = new RNStorage();
var AsyncStorageExample = React.createClass({

    render : function() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  },

});

AppRegistry.registerComponent('AsyncStorageExample', () => AsyncStorageExample);