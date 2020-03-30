import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Main from '../components/Main';
import TestView from '../components/TestView'
import Menu from '../components/menu/index'

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
};

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack);