import React from 'react';
import {View, Text, Button} from 'react-native';

const Menu = ({navigation}) => {
  const navigationHandler = routeName => {
    navigation.push(routeName);
  };

  return (
    <>
      <View style={{padding: 40, backgroundColor: 'ddd'}}>
        <Text>asdasd</Text>
        <Button
          title="counter"
          onPress={() => navigationHandler('main')}
        />
        <Text>xx</Text>
        <Button
          title="Lista redux"
          onPress={() => navigationHandler('testView')}
        />
      </View>
    </>
  );
};

export default Menu;