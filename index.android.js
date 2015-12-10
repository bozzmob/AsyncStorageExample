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

var userArr = 
[
    { name: 'j', price: 3, location: { name: 'USA', coords: { lat: 123, lng: 123 }  } },
    { name: 'a', price: 4, location: { name: 'USA', coords: { lat: 123, lng: 123 }  } },
    { name: 'v', price: 1, location: { name: 'USA', coords: { lat: 123, lng: 123 }  } },
    { name: 'a', price: 2, location: { name: 'USA', coords: { lat: 123, lng: 123 }  } },
    { name: 's', price: 1, location: { name: 'EU', coords: { lat: 423, lng: 123 }  } },
    { name: 'c', price: 1, location: { name: 'EU', coords: { lat: 423, lng: 123 }  } },
    { name: 'r', price: 7, location: { name: 'EU', coords: { lat: 423, lng: 123 }  } },
    { name: 'i', price: 9, location: { name: 'Outer Space', coords: { lat: 999, lng: 999 }  } },
    { name: 'p', price: 4, location: { name: 'InterGalatic Space', coords: { lat: 9001, lng: 42 }  } },
    { name: 't', price: 999, location: { name: 'Outside', coords: { lat: -1, lng: 0 }  } },
];

var differentArr = 
[
    { name: 'j', price: 1, location: { name: 'USA', coords: { lat: 101, lng: 101 }  } },
    { name: 'a', price: 2, location: { name: 'USA', coords: { lat: 101, lng: 101 }  } },
    { name: 'v', price: 3, location: { name: 'USA', coords: { lat: 101, lng: 101 }  } },
    { name: 'a', price: 4, location: { name: 'USA', coords: { lat: 101, lng: 101 }  } },
    { name: 's', price: 5, location: { name: 'EU', coords: { lat: 423, lng: 101 }  } },
    { name: 'c', price: 6, location: { name: 'EU', coords: { lat: 423, lng: 101 }  } },
    { name: 'r', price: 7, location: { name: 'EU', coords: { lat: 423, lng: 101 }  } },
    { name: 'i', price: 8, location: { name: 'Outer Space', coords: { lat: 999, lng: 999 }  } },
    { name: 'p', price: 9, location: { name: 'InterGalatic Space', coords: { lat: 9001, lng: 42 }  } },
    { name: 't', price: 10, location: { name: 'Outside', coords: { lat: -1, lng: 0 }  } },
];

var user = new RNStorage(userArr);
var diff = new RNStorage(differentArr);


async function userTest () {
    console.info('=== start react-native-store USER test! ===')
    await user.destroyModel();
    await user.init();
    await user.findTest();
    await user.findByIdTest();
    await user.updateTest();
    await user.updateByIdTest();
    await user.removeTest();
    await user.removeByIdTest();
    console.info('=== react-native-store USER test complete! ===')
}

async function diffTest () {
    console.info('=== start react-native-store DIFF test! ===')
    await diff.destroyModel();
    await diff.init();
    await diff.findTest();
    await diff.findByIdTest();
    await diff.updateTest();
    await diff.updateByIdTest();
    await diff.removeTest();
    await diff.removeByIdTest();
    console.info('=== react-native-store DIFF test complete! ===')
}

userTest();
diffTest();
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