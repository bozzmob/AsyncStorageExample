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

var test = async function() {
    //Get/Create model
    var userModel = await reactNativeStore.model("user");

    // Add Data
    var add_data = await userModel.add([{
      username: "tom",
      age: 12,
      sex: "man"
    },{
      username: "test",
      age: 22,
      sex: "man"
    },{
      username: "1test",
      age: 42,
      sex: "man"
    }]);
    // return object or null
    console.log("add_data "+JSON.stringify(add_data));

    // Update Data
    var update_data = await userModel.update({
      username: "mary"
    },{
      where: {
        username: "tom"    
      }
    });
    console.log("update_data "+JSON.stringify(update_data));

    //Remove data with a filter
    var remove_data = await userModel.remove({
      where: {
        age: { lt: 15 }
      }
    });
    console.log(remove_data);
    //Remove all data (pass no where filter)
    var remove_data = await userModel.remove();
    console.log("remove_data"+JSON.stringify(remove_data));

    // search using advanced queries
    var find_data = await userModel.find({
      where: {
        and: [{ username: { neq: 'tom' } }, { age: { gte: 40 } }]
      },
      order: {
        age: 'ASC',
      }
    });
    console.log("find ",JSON.stringify(find_data));
  }

var AsyncStorageExample = React.createClass({

  getInitialState() {
    return test();
  },

    render : function() {
    var color = this.state.selectedValue;
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  },

});

AppRegistry.registerComponent('AsyncStorageExample', () => AsyncStorageExample);