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
//zzz.startTest();

async function startTest () {
console.info('=== start react-native-store test! ===')
await zzz.destroyModel();
await zzz.init();
await zzz.findTest();
await zzz.findByIdTest();
await zzz.updateTest();
await zzz.updateByIdTest();
await zzz.removeTest();
await zzz.removeByIdTest();
console.info('=== react-native-store test complete! ===')
}

startTest();

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