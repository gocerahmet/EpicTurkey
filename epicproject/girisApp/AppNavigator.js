import Login from './Login'
import Home from './Home'
import SignUp from './SignUp'
import {createStackNavigator} from 'react-navigation';


const AppNavigator = createStackNavigator({
    Login : {screen : Login},
    Home : {screen : Home},
    SignUp : {screen : SignUp},
});

export default AppNavigator;
