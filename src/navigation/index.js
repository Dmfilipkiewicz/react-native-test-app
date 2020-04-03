import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Main from '../components/Main';
import TestView from '../components/TestView'
import Menu from '../components/menu/index'
import ListOfCardsContainer from '../components/listOfCardsContainer/Index.js'
import Card from '../components/content/listofCards/listOfCards/card/Index';

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
  testView: {
    screen: TestView,
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