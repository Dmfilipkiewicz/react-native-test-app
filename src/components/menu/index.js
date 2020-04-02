import React from 'react';
import {View, Text, Button} from 'react-native';

const Menu = ({navigation}) => {
  const navigationHandler = routeName => {
    navigation.push(routeName);
  };

  return (
    <>
      <View style={{padding: 40, backgroundColor: 'ddd'}}>
        <Text>Main</Text>
        <Button
          title="Główna strona"
          onPress={() => navigationHandler('main')}
        />
        <Text>:)</Text>
        <Button
          title="Lista kart"
          onPress={() => navigationHandler('listOfCardsContainer')}
        />
      </View>
    </>
  );
};

export default Menu;