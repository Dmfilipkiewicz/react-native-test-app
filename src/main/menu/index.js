import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './Style'

const Menu = ({navigation}) => {
  const navigationHandler = routeName => {
    navigation.push(routeName);
  };

  return (
    <>
      <View style={styles.menu_view}>
        <View style={styles.menu_view_button}>
          <Button
            title="Wyszukaj kartę"
            onPress={() => navigationHandler('main')}
          />
        </View>
        <View style={styles.menu_view_button}>
          <Button
            title="Lista kart"
            onPress={() => navigationHandler('listOfCardsContainer')}
          />
        </View>
      </View>
    </>
  );
};

export default Menu;