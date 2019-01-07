import { createStackNavigator } from 'react-navigation';
//stackNavigator - Navegação por click
//tabNavigator (createTabNavigator) - Navegação por abas, like instagram.

import Login from './pages/Login';
import Timeline from './pages/Timeline';
import New from './pages/New';

const Routes = createStackNavigator({
    Login,
    Timeline,
    New
});

export default Routes;