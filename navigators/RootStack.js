import React from 'react';

import { Colors } from './../components/style';
const { darkLight, brand, primary, tertiary, secondary } = Colors;

//React navigation packages
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import SignUp from './../screens/SignUp';
import Welcome from './../screens/Welcome';
import PictureView from './../screens/PictureView';
import ARView from '../screens/ARView';


const Stack = createStackNavigator();

const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent',
                    },
                    headerTintColor: tertiary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 20,
                    },
                }}
            >
                <Stack.Screen name="SignUp" component={SignUp}/>
                <Stack.Screen options={{headerTransparent: true}} name="Welcome" component={Welcome}/>
                <Stack.Screen options={{headerTransparent: true}} name="PictureView" component={PictureView}/>
                <Stack.Screen options={{headerTransparent: true}} name="ARView" component={ARView}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;