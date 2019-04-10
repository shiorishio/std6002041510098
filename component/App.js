// import library
import React from 'react';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Header from './Header';
import Login from './Login';
import Profile from '.Profile';
//import Card from './Card';



// write component
//class App extends React.Component {
    // render() {
    //     return (
    //         //component about react native
    //         < View >
    //             <Header title="Login" />
    //             <Text></Text>
            
    //             <Login />
    //         </View>
    //     );
    // }
//}

const AppNavigator = createStackNavigator({
        Login: Login,
        Profile: Profile
    },
    {
        initialRouteName: "Login"
});

// export 
export default createAppContainer(AppNavigator);
//export default App;
