import {Dimensions} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import MainScreen from './screens/MainScreen';
import ToBuyScreen from './screens/ToBuy';
import SideMenu from './navigation/SideMenu';

const WIDTH = Dimensions.get("window").width
const drawerConfig = {
    drawerWidth : WIDTH*0.83,
    contentComponent : ({navigation}) => {
        return(
            <SideMenu navigation={navigation} />
            )
    }
}

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MainScreen,
  },
  ToBuy: {
    screen: ToBuyScreen,
  },
});

export default createAppContainer(MyDrawerNavigator);