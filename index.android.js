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
    { name: 'j', img: 'https://cdn4.iconfinder.com/data/icons/48x48-free-object-icons/48/House.png', price: 3, location: { name: 'USA', coords: { lat: 123, lng: 123 }  } },
    { name: 'a', img: 'https://cdn4.iconfinder.com/data/icons/48x48-free-object-icons/48/House.png', price: 4, location: { name: 'USA', coords: { lat: 123, lng: 123 }  } },
    { name: 'v', img: 'https://cdn4.iconfinder.com/data/icons/48x48-free-object-icons/48/House.png', price: 1, location: { name: 'USA', coords: { lat: 123, lng: 123 }  } },
    { name: 'a', img: 'https://cdn4.iconfinder.com/data/icons/48x48-free-object-icons/48/House.png', price: 2, location: { name: 'USA', coords: { lat: 123, lng: 123 }  } },
    { name: 's', img: 'https://cdn4.iconfinder.com/data/icons/48x48-free-object-icons/48/House.png', price: 1, location: { name: 'EU', coords: { lat: 423, lng: 123 }  } },
    { name: 'c', img: 'https://cdn4.iconfinder.com/data/icons/48x48-free-object-icons/48/House.png', price: 1, location: { name: 'EU', coords: { lat: 423, lng: 123 }  } },
    { name: 'r', img: 'https://cdn4.iconfinder.com/data/icons/48x48-free-object-icons/48/House.png', price: 7, location: { name: 'EU', coords: { lat: 423, lng: 123 }  } },
    { name: 'i', img: 'https://cdn4.iconfinder.com/data/icons/48x48-free-object-icons/48/House.png', price: 9, location: { name: 'Outer Space', coords: { lat: 999, lng: 999 }  } },
    { name: 'p', img: 'https://cdn4.iconfinder.com/data/icons/48x48-free-object-icons/48/House.png', price: 4, location: { name: 'InterGalatic Space', coords: { lat: 9001, lng: 42 }  } },
    { name: 't', img: 'https://cdn4.iconfinder.com/data/icons/48x48-free-object-icons/48/House.png', price: 999, location: { name: 'Outside', coords: { lat: -1, lng: 0 }  } },
];

var differentArr = 
[
    { name: 'j', img: 'https://cdn4.iconfinder.com/data/icons/48x48-free-object-icons/48/House.png', price: 1, location: { name: 'USA', coords: { lat: 101, lng: 101 }  } },
    { name: 'a', img: 'https://cdn4.iconfinder.com/data/icons/48x48-free-object-icons/48/House.png', price: 2, location: { name: 'USA', coords: { lat: 101, lng: 101 }  } },
    { name: 'v', img: 'https://cdn4.iconfinder.com/data/icons/48x48-free-object-icons/48/House.png', price: 3, location: { name: 'USA', coords: { lat: 101, lng: 101 }  } },
    { name: 'a', img: 'https://cdn4.iconfinder.com/data/icons/48x48-free-object-icons/48/House.png', price: 4, location: { name: 'USA', coords: { lat: 101, lng: 101 }  } },
    { name: 's', img: 'https://cdn4.iconfinder.com/data/icons/48x48-free-object-icons/48/House.png', price: 5, location: { name: 'EU', coords: { lat: 423, lng: 101 }  } },
    { name: 'c', img: 'https://cdn4.iconfinder.com/data/icons/48x48-free-object-icons/48/House.png', price: 6, location: { name: 'EU', coords: { lat: 423, lng: 101 }  } },
    { name: 'r', img: 'https://cdn4.iconfinder.com/data/icons/48x48-free-object-icons/48/House.png', price: 7, location: { name: 'EU', coords: { lat: 423, lng: 101 }  } },
    { name: 'i', img: 'https://cdn4.iconfinder.com/data/icons/48x48-free-object-icons/48/House.png', price: 8, location: { name: 'Outer Space', coords: { lat: 999, lng: 999 }  } },
    { name: 'p', img: 'https://cdn4.iconfinder.com/data/icons/48x48-free-object-icons/48/House.png', price: 9, location: { name: 'InterGalatic Space', coords: { lat: 9001, lng: 42 }  } },
    { name: 't', img: 'https://cdn4.iconfinder.com/data/icons/48x48-free-object-icons/48/House.png', price: 10, location: { name: 'Outside', coords: { lat: -1, lng: 0 }  } },
];

var user = new RNStorage(userArr);
var diff = new RNStorage(differentArr);


async function userTest () {
    console.info('=== start react-native-store USER test! ===')
    await user.destroyModel();
    await user.init();
    await user.findTest();
    await user.findByIdTest();
    var returnVal = await user.updateTest();
    console.log("returnVal = "+JSON.stringify(returnVal));
    await user.updateByIdTest();
    await user.removeTest();
    await user.removeByIdTest();
    console.info('=== react-native-store USER test complete! ===')
    return returnVal;
}

async function diffTest () {
    console.info('=== start react-native-store DIFF test! ===')
    await diff.destroyModel();
    await diff.init();
    await diff.findTest();
    await diff.findByIdTest();
    var returnVal = await diff.updateTest();
    console.log("returnVal = "+JSON.stringify(returnVal));
    await diff.updateByIdTest();
    await diff.removeTest();
    await diff.removeByIdTest();
    console.info('=== react-native-store DIFF test complete! ===')
}

//diffTest();



var AsyncStorageExample = React.createClass({
    
    getInitialState: function () {
        console.log("getInitialState");
        return {
            arr : [],
        }
    },

    componentDidMount: function () {
        console.log("componentDidMount");

        var retval = userTest();
        console.log("componentDidMount retval"+retval);
        retval.then(function (argument) {
            console.log("argument"+JSON.stringify(argument));
            this.stateSetting(argument);
        });
    },

    stateSetting: function(arrval) {
        console.log("stateSetting");
        this.setState({
            arr : arrval,
        });
        console.log("value = "+this.state.arr);
    },
            
    render : function() {
        console.log("render");
        console.log("render - value of this.state.arr"+JSON.stringify(this.state.arr));
        return (
          <View>
            {this.state.arr.map(arr =>
              <Text key={arr.name}>
                &bull; {arr.name}
              </Text>
            )}
          </View>
        );
  },

});

AppRegistry.registerComponent('AsyncStorageExample', () => AsyncStorageExample);