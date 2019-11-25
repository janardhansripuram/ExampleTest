import * as reactNavigation from 'react-navigation';
import {createStackNavigator, Header} from 'react-navigation-stack';
import LoginScreen from './Pages/Login';
import HomeScreen from './Pages/Home';
import Owntransfer from './Pages/Owntransfer';
import ConfirmationPage from './Pages/Confirmation';
import StatusPage from './Pages/Status'
const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Home: {screen: HomeScreen},
  Owntransfer:{
    screen:Owntransfer,
  },
  ConfirmationPage:{screen:ConfirmationPage},
  StatusPage:{screen:StatusPage}
},
{
    initialRouteName: 'Login',
  }
);

const App = reactNavigation.createAppContainer(MainNavigator);

export default App;
