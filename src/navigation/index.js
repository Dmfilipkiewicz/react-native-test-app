import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Main from '../components/Main';
import TestView from '../components/TestView'
import Menu from '../components/menu/index'
import ListOfCardsContainer from '../components/listOfCardsContainer/Index.js'

const screens = {
  menu: {
    screen: Menu
  },
  main: {
    screen: Main,
  },
  testView: {
    screen: TestView,
  },
  listOfCardsContainer: {
    screen: ListOfCardsContainer,
    navigationOptions:{
      title:'Lista kart'
    }
  }
};

const Navigation = createStackNavigator(screens);

export default createAppContainer(Navigation);