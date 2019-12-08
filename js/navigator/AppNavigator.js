import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import WelcomePage from '../page/WelcomePage';
import HomePage from '../page/HomePage';
const InitNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomePage,
  },
});
const MainNavigator = createStackNavigator({
  Home: {
    screen: HomePage,
  },
});

const SwitchNavigator = createSwitchNavigator({
  Init: InitNavigator,
  Main: MainNavigator,
});
export default createAppContainer(SwitchNavigator);
