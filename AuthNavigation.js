import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegistrationScreen';

const Stack = createStackNavigator();

export default class AuthNavigation extends Component {

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Main" screenOptions={{
                    headerShown: false,
                }}>
                    <Stack.Screen name="Main" component={MainScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
