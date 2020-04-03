import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Main from '../main/Main';
import Menu from '../main/menu/index'
import ListOfCardsContainer from '../main/listOfCardsContainer'

const screens = {
  menu: {
    screen: Menu,
    navigationOptions:{
      title:'Menu główne'
    }
  },
  main: {
    screen: Main,
    navigationOptions:{
      title:'Wyszukaj konkretną kartę'
    }
  },
  listOfCardsContainer: {
    screen: ListOfCardsContainer,
    navigationOptions:{
      title:'Lista kart'
    }
  },
};

const Navigation = createStackNavigator(screens);

export default createAppContainer(Navigation);